import { IRoom } from "Types/Types";

export interface IUseGetPublicRoomQueryResponse {
  message: unknown[]
  rooms: IRoom[]
  statusCode: number;
}
