import FetchHelper from "Helpers/FetchHelper";
import { IUseRegisterMutationParams, IUseRegisterMutationResponse } from "./useRegisterMutation.config";

const useRegisterMutation = () => (
  ({ password, email }: IUseRegisterMutationParams): Promise<IUseRegisterMutationResponse> => FetchHelper('user/reg', 'POST', {
    password,
    email
  }));

export default useRegisterMutation;
