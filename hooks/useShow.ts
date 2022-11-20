import useSWR from "swr";
import type { SWRHookResponse } from "../lib/types/SWRHookResponse";

type SeasonResponse = {
  id: number;
  type: { type: string };
  number: number;
  image: string;
};

export type Season = {
  id: number;
  number: number;
  image: string;
};

type ShowResponse = {
  tvdb_id: string;
  name: string;
  image: string;
  firstAired: string;
  lastAired: string;
  overview: string;
  status: { name: string };
  seasons: [];
};

export type Show = {
  id: string;
  name: string;
  image: string;
  firstAired: string;
  lastAired: string;
  overview: string;
  status: string;
  seasons: Season[];
  seasonCount: number;
};

function buildSeasons(seasons: SeasonResponse[]): Season[] {
  return seasons
    .filter(
      (season: SeasonResponse) =>
        season.type.type === "official" && season.number > 0
    )
    .map(({ id, number, image }: SeasonResponse) => ({ id, number, image }));
}

function buildShow(show: ShowResponse): Show {
  const {
    tvdb_id,
    name,
    image,
    firstAired,
    lastAired,
    status,
    overview,
    seasons,
  } = show;
  const builtSeasons = buildSeasons(seasons);

  return Object.freeze({
    name,
    image,
    firstAired,
    lastAired,
    id: tvdb_id,
    status: status.name,
    overview: overview,
    seasons: builtSeasons,
    seasonCount: builtSeasons.length,
  });
}

export default function useShow(showId: string): SWRHookResponse<Show> {
  const { data, error } = useSWR<ShowResponse>(`/api/shows/${showId}`);

  return {
    data: data && buildShow(data),
    isLoading: !error && !data,
    isError: error,
  };
}
