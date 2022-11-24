import FetchHelper from "Helpers/FetchHelper";
import { IUseFbAuthMutationParams } from "./useFbAuthMutation.config";

const useFbAuthMutation = () => (
  ({ accessToken }: IUseFbAuthMutationParams) => FetchHelper('user/fb-reg-auth', 'POST', {
    accessToken
  }))

export default useFbAuthMutation;
