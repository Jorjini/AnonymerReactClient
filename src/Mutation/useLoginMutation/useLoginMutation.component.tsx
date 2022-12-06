import FetchHelper from "Helpers/FetchHelper";
import { IUseLoginMutationParams, IUseLoginMutationResponse } from "./useLoginMutation.config";

const useLoginMutation = () => (
  ({ password, email }: IUseLoginMutationParams): Promise<IUseLoginMutationResponse> => FetchHelper('user/login', 'POST', {
    password,
    email
  }));

export default useLoginMutation;
