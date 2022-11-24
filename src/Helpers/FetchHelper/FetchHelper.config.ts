export interface IResponseError<T extends object = never> {
  message: string;
  errors: Record<string, string[]>;
  additionalFields?: T;
}
