import { Dispatch } from "react";

export enum GlobalContextTypes {
  SHOW_CHAT_MENU = 'SHOW_CHAT_MENU'
}

export interface IInitialState {
  showChatMenu: boolean;
}

export type IGlobalContextState = IInitialState

export interface IGlobalContextAction {
  type: GlobalContextTypes.SHOW_CHAT_MENU;
  payload: IInitialState
}

export interface IGlobalConfigContextState {
  state?: IGlobalContextState;
  dispatch?: Dispatch<IGlobalContextAction>;
}
