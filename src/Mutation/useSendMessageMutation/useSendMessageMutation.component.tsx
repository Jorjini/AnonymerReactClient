import FetchHelper from "Helpers/FetchHelper";
import { IUseSendMessageMutationParams } from "./useSendMessageMutation.config";

const useSendMessageMutation = () => (
  (data: IUseSendMessageMutationParams): Promise<any> => FetchHelper('chat/send-message', 'POST', {
    ...data
  })
);


export default useSendMessageMutation;
