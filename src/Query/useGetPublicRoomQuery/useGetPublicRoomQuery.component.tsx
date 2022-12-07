import FetchHelper from "Helpers/FetchHelper";
import { IUseGetPublicRoomQueryResponse } from "./useGetPublicRoomQuery.config";

const useGetPublicRoomQuery = () => (
  (): Promise<IUseGetPublicRoomQueryResponse> => FetchHelper('room/get-all-public', 'GET'))

export default useGetPublicRoomQuery;
