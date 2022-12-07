import { IContent } from "Types/Types";

export interface IUseGetContentQueryParams {
  roomId: string;
}

export interface IUseGetContentQueryResponse {
  content: IContent[];
  message: string[];
  statusCode: number;
}
