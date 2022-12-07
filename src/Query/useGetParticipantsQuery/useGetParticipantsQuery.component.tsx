import FetchHelper from "Helpers/FetchHelper";
import { useCallback } from "react";
import { IUseGetParticipantsQueryParams, IUseGetParticipantsQueryResponse } from "./useGetParticipantsQuery.config";

const useGetParticipantsQuery = () => (
  useCallback(({ roomId }: IUseGetParticipantsQueryParams): Promise<IUseGetParticipantsQueryResponse> => (
    FetchHelper(`participant/get-for-public-room?RoomId=${roomId}`, 'GET'))
    , []));

export default useGetParticipantsQuery;
