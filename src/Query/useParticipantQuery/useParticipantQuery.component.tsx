import FetchHelper from "Helpers/FetchHelper";

const useParticipantQuery = () => (
  (): Promise<any> => FetchHelper('participant/get-for-default', 'GET'))

export default useParticipantQuery;
