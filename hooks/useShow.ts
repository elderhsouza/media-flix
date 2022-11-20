import useSWR from "swr"
import { SWRHookResponse } from "../lib/types/SWRHookResponse"

type SeasonResponse = {
  id: number,
  type: { type: string },
  number: number,
  image: string
}

export type Season = {
  id: number,
  number: number,
  image: string
}

export type Show = {
  id: string,
  name: string,
  image: string,
  firstAired: string,
  lastAired: string,
  status: string,
  overview: string,
  seasons: Season[],
  seasonCount: number,
}

function buildSeasons(seasons: SeasonResponse[]): Season[] {
  return seasons
    .filter((season: SeasonResponse) => season.type.type === "official" && season.number > 0)
    .map(({ id, number, image }: SeasonResponse) => ({id, number, image}));
}

function buildShow(show: any): Show {
  const { id, name, image, firstAired, lastAired, status, overview, seasons } = show;
  const builtSeasons = buildSeasons(seasons);

  return Object.freeze({
    id,
    name,
    image,
    firstAired,
    lastAired,
    status: status.name,
    overview: overview,
    seasons: builtSeasons,
    seasonCount: builtSeasons.length,
  });
}

export default function useShow(showId: string): SWRHookResponse<Show> {
  const { data, error } = useSWR<Show>(`/api/shows/${showId}`)

  return {
    data: buildShow(data),
    isLoading: !error && !data,
    isError: error
  }
}