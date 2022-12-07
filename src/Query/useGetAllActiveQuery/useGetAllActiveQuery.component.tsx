import FetchHelper from "Helpers/FetchHelper";
import { useCallback } from "react";
import { IUseGetAllActiveQueryResponse } from "./useGetAllActiveQuery.config";

const useGetAllActiveQuery = () => (
  useCallback((): Promise<IUseGetAllActiveQueryResponse> => (
    FetchHelper('user/kyc/get-all-active', 'GET'))
    , []));

export default useGetAllActiveQuery;
