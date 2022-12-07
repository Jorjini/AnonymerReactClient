import { createContext, ReactElement, useReducer } from "react";
import { GlobalContextTypes, IGlobalConfigContextState, IGlobalContextAction, IGlobalContextState } from "./GlobalContext.config";


const initialState = {
  showChatMenu: true
};

const reducer = (state: IGlobalContextState, action: IGlobalContextAction) => {
  switch (action.type) {
    case GlobalContextTypes.SHOW_CHAT_MENU:
      return { showChatMenu: action.payload.showChatMenu }
    default:
      return state;
  }
}

export const GlobalContextStore = createContext<IGlobalConfigContextState>({});

const GlobalContext = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch
  };

  return (
    <GlobalContextStore.Provider value={value}>
      {children}
    </GlobalContextStore.Provider>
  )
};

export default GlobalContext;
