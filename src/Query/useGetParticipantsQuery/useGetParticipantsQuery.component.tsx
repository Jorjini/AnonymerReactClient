import FetchHelper from "Helpers/FetchHelper";
import { IUseGetParticipantsQueryParams, IUseGetParticipantsQueryResponse } from "./useGetParticipantsQuery.config";

const useGetParticipantsQuery = () => (
  ({ roomId }: IUseGetParticipantsQueryParams): Promise<IUseGetParticipantsQueryResponse> => (
    FetchHelper(`participant/get-for-public-room?RoomId=${roomId}`, 'GET'))
);

export default useGetParticipantsQuery;
