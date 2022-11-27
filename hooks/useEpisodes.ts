import useSWR from 'swr';
import { Episode } from '../lib/types/Episode';

export default function useEpisodes(
  seasonId: string
) {
  const { data, error } = useSWR<Episode[]>(`/api/episodes/${seasonId}`);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
