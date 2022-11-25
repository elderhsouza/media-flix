import { SWRResponse } from 'swr';

export interface SWRHookResponse<DataType> extends Partial<SWRResponse<DataType>> {
  data: DataType;
  isError: boolean;
  isLoading: boolean;
}
