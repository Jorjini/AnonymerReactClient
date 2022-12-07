import { useContext } from "react"
import { GlobalContextStore } from "./GlobalContext.component";

const useGlobalConfig = () => {
  const { state, dispatch } = useContext(GlobalContextStore);

  if (!state || !dispatch) {
    throw new Error('useGlobalConfig must be initialized');
  };

  return {
    state,
    dispatch
  };
};

export default useGlobalConfig;
