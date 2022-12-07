export interface IResponseError<T extends object = never> {
  message: string;
  errors: Record<string, string[]>;
  additionalFields?: T;
}

export interface IFetchHelperParams {
  endpoint: string;
  method: string;
  body?: any;
  headers?: any;
}