import { IParticipant } from "Types/Types";

export interface IUseGetParticipantsQueryParams {
  roomId: string;
}

export interface IUseGetParticipantsQueryResponse {
  message: string[];
  participants: IParticipant[];
  statusCode: number;
}
