import FetchHelper from "Helpers/FetchHelper";
import { useCallback } from "react";

const useParticipantQuery = () => (
  useCallback((): Promise<any> => FetchHelper('participant/get-for-default', 'GET'), []));

export default useParticipantQuery;
