import FetchHelper from "Helpers/FetchHelper";

const useGetPublicRoomQuery = () => (
  (): Promise<any> => FetchHelper('room/get-all-public', 'GET'))

export default useGetPublicRoomQuery;
