import useSWR from "swr";
import { Season, SeasonResponse } from "../lib/types/Season";
import { Show, ShowResponse } from "../lib/types/Show";
import type { SWRHookResponse } from "../lib/types/SWRHookResponse";

function buildSeasons(seasons: SeasonResponse[]): Season[] {
  return seasons
    .filter((season) => season.type.type === "official" && season.number > 0)
    .map(({ id, number, image, type }) => ({
      id,
      number,
      image,
      type: type.type,
    }));
}

function buildShow({
  id,
  name,
  overview,
  image,
  status,
  firstAired,
  lastAired,
  seasons,
}: ShowResponse): Show {
  const builtSeasons = buildSeasons(seasons);

  return Object.freeze({
    id,
    name,
    image,
    firstAired,
    lastAired,
    overview,
    status: status.name,
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
