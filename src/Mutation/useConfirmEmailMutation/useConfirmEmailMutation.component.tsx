import FetchHelper from "Helpers/FetchHelper";
import { IUseConfirmEmailMutationParams, IUseConfirmEmailMutationResponse } from "./useConfirmEmailMutation.config";

const useConfirmEmailMutation = () => (
  ({ code }: IUseConfirmEmailMutationParams): Promise<IUseConfirmEmailMutationResponse> => FetchHelper('user/verify-email', 'POST', {
    code
  }));

export default useConfirmEmailMutation;
