import useSWR from "swr"
import { SWRHookResponse } from "../lib/types/SWRHookResponse"

export type Episode = {
  id: number,
  name: string,
  overview: string,
  aired: string,
  image: string
}

function buildEpisodes(episodes: Episode[]): Episode[] {
  return episodes.map(({ id, name, overview, aired, image }: Episode) =>
    ({id, name, overview, aired, image}));
}

export default function useEpisodes(seasonId: number): SWRHookResponse<Episode[] | undefined> {
  const { data, error } = useSWR(`/api/episodes/${seasonId}`)

  return {
    data: data && buildEpisodes(data),
    isLoading: !error && !data,
    isError: error
  }
}