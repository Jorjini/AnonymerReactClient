import FetchHelper from "Helpers/FetchHelper";
import { IUseGetAllActiveQueryResponse } from "./useGetAllActiveQuery.config";

const useGetAllActiveQuery = () => (
  (): Promise<IUseGetAllActiveQueryResponse> => (
    FetchHelper('user/kyc/get-all-active', 'GET'))
)

export default useGetAllActiveQuery;
