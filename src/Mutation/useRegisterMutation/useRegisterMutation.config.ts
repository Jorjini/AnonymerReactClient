export interface IUseRegisterMutationParams {
  password: string;
  email: string;
}

export interface IUseRegisterMutationResponse {
  token: {
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
    message: unknown[];
  }
  statusCode: number;
  message: string[];
}
