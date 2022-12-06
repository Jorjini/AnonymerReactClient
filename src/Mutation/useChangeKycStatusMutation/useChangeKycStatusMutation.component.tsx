import FetchHelper from 'Helpers/FetchHelper';
import { IUseChangeKycStatusMutation } from './useChangeKycStatusMutation.config';

const useChangeKycStatusMutation = () => (
  (data: IUseChangeKycStatusMutation): Promise<any> => FetchHelper('user/kyc/change-status', 'POST', {
    ...data
  }));

export default useChangeKycStatusMutation