export interface IUseLoginMutationParams {
  email: string;
  password: string;
}

export interface IUseLoginMutationResponse {
  userId: string;
  anonymerToken: string;
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  role: string;
  status: number;
  kycStatus: number;
  statusCode: number;
  message: string[];
}