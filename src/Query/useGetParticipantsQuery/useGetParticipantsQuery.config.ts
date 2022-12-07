export interface IUseGetParticipantsQueryParams {
  roomId: string;
}

export interface IUseGetParticipantsQueryResponse {
  message: string[];
  participants: unknown[];
  statusCode: number;
}
