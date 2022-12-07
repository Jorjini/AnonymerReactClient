import { useContext } from "react"
import { IChatContextStore } from "./ChatContext.component";

const useChatContext = () => {
  const { state, dispatch } = useContext(IChatContextStore);

  if (!state || !dispatch) {
    throw new Error('useChatContext must be initialized');
  };

  return {
    state,
    dispatch
  };
};

export default useChatContext;
