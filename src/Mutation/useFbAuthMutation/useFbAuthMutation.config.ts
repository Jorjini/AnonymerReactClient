export interface IUseFbAuthMutationParams {
  accessToken: string
}

export interface IUseFbAuthMutationResponse {
  message: unknown[];
  statusCode: number;
  token: string;
}
