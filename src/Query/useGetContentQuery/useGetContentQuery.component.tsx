import FetchHelper from "Helpers/FetchHelper";
import { useCallback } from "react";
import { IUseGetContentQueryParams, IUseGetContentQueryResponse } from "./useGetContentQuery.config";

const useGetContentQuery = () => (
  useCallback((({ roomId }: IUseGetContentQueryParams): Promise<IUseGetContentQueryResponse> => (
    FetchHelper(`chat/get-content?RoomId=${roomId}`, 'GET'))
  ), []));

export default useGetContentQuery;
