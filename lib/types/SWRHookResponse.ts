
export type SWRHookResponse<T> = {
  data: T | [] | undefined;
  isError: boolean;
  isLoading: boolean;
};
