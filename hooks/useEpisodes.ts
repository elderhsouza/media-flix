import useSWR from "swr";
import { Episode } from "../lib/types/Episode";
import { SWRHookResponse } from "../lib/types/SWRHookResponse";

function buildEpisodes(episodes: Episode[]): Episode[] {
  return episodes.map(({ id, name, overview, aired, image }: Episode) => ({
    id,
    name,
    overview,
    aired,
    image,
  }));
}

export default function useEpisodes(
  seasonId: string
): SWRHookResponse<Episode[]> {
  const { data, error } = useSWR(`/api/episodes/${seasonId}`);

  return {
    data: data && buildEpisodes(data),
    isLoading: !error && !data,
    isError: error,
  };
}
