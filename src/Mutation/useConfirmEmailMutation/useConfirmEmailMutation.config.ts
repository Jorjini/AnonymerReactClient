import { IUseRegisterMutationResponse } from "Mutation/useRegisterMutation/useRegisterMutation.config";

export interface IUseConfirmEmailMutationParams {
  code: string;
}

export interface IUseConfirmEmailMutationResponse extends IUseRegisterMutationResponse { }