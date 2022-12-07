import FetchHelper from "Helpers/FetchHelper";
import { IUseGetContentQueryParams, IUseGetContentQueryResponse } from "./useGetContentQuery.config";

const useGetContentQuery = () => (
  ({ roomId }: IUseGetContentQueryParams): Promise<IUseGetContentQueryResponse> => (
    FetchHelper(`chat/get-content?RoomId=${roomId}`, 'GET'))
);

export default useGetContentQuery;
