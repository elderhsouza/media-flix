import useSWR from "swr";
import { Episode } from "../lib/types/Episode";
import { SWRHookResponse } from "../lib/types/SWRHookResponse";

export default function useEpisodes(
  seasonId: string
): SWRHookResponse<Episode[]> {
  const { data, error } = useSWR(`/api/episodes/${seasonId}`);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
