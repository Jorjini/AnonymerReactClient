import FetchHelper from "Helpers/FetchHelper";
import { useCallback } from "react";
import { IUseGetPublicRoomQueryResponse } from "./useGetPublicRoomQuery.config";

const useGetPublicRoomQuery = () => (
  useCallback((): Promise<IUseGetPublicRoomQueryResponse> => FetchHelper('room/get-all-public', 'GET'), []));

export default useGetPublicRoomQuery;
