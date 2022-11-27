import useSWR from 'swr';
import type { Show } from '../lib/types/Show';

export default function useShow<Type>(showId: Type) {
  return useSWR<Show>(
    showId
      ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/shows/${showId}`
      : null
  );
}
