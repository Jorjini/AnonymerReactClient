import { createContext, ReactElement, useReducer } from "react";
import { ChatContextTypes, IChatContextAction, IChatContextState, IChatContextStateState } from "./ChatContext.config";


const initialState = {
  content: []
};

const reducer = (state: IChatContextState, action: IChatContextAction) => {
  switch (action.type) {
    case ChatContextTypes.RECEIVE_MESSAGE:
      return { content: [state.content, action.payload.content].flat() }
    default:
      return state;
  }
}

export const IChatContextStore = createContext<IChatContextStateState>({});

const ChatContext = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch
  };

  return (
    <IChatContextStore.Provider value={value}>
      {children}
    </IChatContextStore.Provider>
  )
};

export default ChatContext;
