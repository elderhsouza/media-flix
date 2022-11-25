import useSWR from 'swr';
import type { Show } from '../lib/types/Show';
import type { SWRHookResponse } from '../lib/types/SWRHookResponse';

export default function useShow(showId: string): SWRHookResponse<Show> {
  const { data, error } = useSWR(`/api/shows/${showId}`);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
