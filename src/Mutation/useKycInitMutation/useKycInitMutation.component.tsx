import FetchHelper from "Helpers/FetchHelper";
import { IUseKycInitMutationResponse } from "./useKycInitMutation.config";

const useKycInitMutation = () => (
  (formData: any): Promise<IUseKycInitMutationResponse> => FetchHelper('user/kyc/init', 'POST', formData));

export default useKycInitMutation;
