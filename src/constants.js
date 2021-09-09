import log from "./utils/logger";

export const USER_TOKEN_KEY = "_UTOKEN";
export const USER_TYPE = "userType";

export const BACKEND_URL = "https://backend.quiklyy.com";


export const loadConstantsInWindow = () => {
  window._quiklyyConstants = {
    LOADING_CLASSNAME: "loading",
  };

  return log("Configured constants in `window`.");
};
