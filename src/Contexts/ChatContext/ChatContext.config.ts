import { Dispatch } from "react";
import { IContent } from "Types/Types";

export enum ChatContextTypes {
  RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
}


export interface IInitialState {
  content: IContent[];
}

export type IChatContextState = IInitialState

export interface IChatContextAction {
  type: ChatContextTypes.RECEIVE_MESSAGE;
  payload: IInitialState
}

export interface IChatContextStateState {
  state?: IChatContextState;
  dispatch?: Dispatch<IChatContextAction>;
}
