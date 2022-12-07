import FetchHelper from "Helpers/FetchHelper";
import {IRoom} from "../../Pages/Home/Room/Room.config";

const useGetPublicRoomQuery = () => (
  (): Promise<any> => FetchHelper('room/get-all-public', 'GET'))

export default useGetPublicRoomQuery;
