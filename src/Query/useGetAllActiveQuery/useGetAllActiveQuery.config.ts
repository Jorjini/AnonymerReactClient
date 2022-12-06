import { IKyc } from "Types/Types";

export interface IUseGetAllActiveQueryParams {
  adminId: string;
  kycId: string;
  status: number;
}



export interface IUseGetAllActiveQueryResponse {
  kycs: IKyc[];
  message: string[];
  statusCode: number;
}
