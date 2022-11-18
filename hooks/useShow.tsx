import useSWR from "swr"

export default function useShow(showId: string) {
  const { data, error } = useSWR(`/api/shows/${showId}`)

  return {
    show: data,
    isLoading: !error && !data,
    isError: error
  }
}