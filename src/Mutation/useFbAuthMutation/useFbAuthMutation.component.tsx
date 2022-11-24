import FetchHelper from "Helpers/FetchHelper";
import { IUseFbAuthMutationParams, IUseFbAuthMutationResponse } from "./useFbAuthMutation.config";

const useFbAuthMutation = () => (
  ({ accessToken }: IUseFbAuthMutationParams): Promise<IUseFbAuthMutationResponse> => FetchHelper('user/fb-reg-auth', 'POST', {
    accessToken
  }))

export default useFbAuthMutation;
