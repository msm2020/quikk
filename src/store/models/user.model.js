import { action, thunk } from "easy-peasy";
import api from "Http/httpService";
import log from "utils/logger";
import { USER_TOKEN_KEY, USER_TYPE , BACKEND_URL} from "../../constants";

const user = {
  sessionToken: null,
  isLoggedIn: false,
  hasFilledCandidateDetails: false,
  isInitializing: false,
  postLoginRedirectSlug: "",
  userType: "",

  // Set user state.
  setUser: action((state, payload) => ({
    ...state,
    ...payload,
  })),

  // Set initializing process state.
  setInitializing: action((state, payload) => ({
    ...state,
    isInitializing: payload,
  })),

  // Persist user session token.
  persist: action((state, payload) => {
    localStorage.setItem(USER_TOKEN_KEY, payload.sessionToken);
    localStorage.setItem(USER_TYPE, payload.userType);
  }),

  // Remove user.
  removeUser: action((state, payload) => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(USER_TOKEN_KEY);

    // Reset user state.
    return {
      ...state,
      isLoggedIn: false,
      sessionToken: null,
      hasFilledCandidateDetails: false,
      isInitializing: false,
    };
  }),

  // Check if user is logged in, if yes, authenticate
  // and dispatch action to update state.
  initializeUser: thunk(async (actions, payload) => {
    log(`Initializing user.`);
    actions.setInitializing(true);

    const token = localStorage.getItem(USER_TOKEN_KEY);
    const userType = localStorage.getItem(USER_TYPE);

    if (!token) {
      actions.setInitializing(false);
      return;
    }

    // Remove user if token is not valid.
    if (!(await actions.isSessionTokenValid({ token }))) {
      actions.removeUser();
      actions.setInitializing(false);
      return;
    }

    actions.setUser({
      isLoggedIn: true,
      sessionToken: token,
      userType: userType,
    });

    // User has not filled details, set redirect slug.
    if (!(await actions.checkIfFilledCandidateDetails())) {
      actions.setUser({
        hasFilledCandidateDetails: false,
        postLoginRedirectSlug: "/candidate/create",
      });
      actions.setInitializing(false);
      return;
    }

    actions.setUser({
      hasFilledCandidateDetails: true,
      postLoginRedirectSlug: "/account/profile/view",
    });

    // TODO: Come with a better logic.
    payload &&
      payload?.continueSlug &&
      actions.setUser({
        postLoginRedirectSlug: payload.continueSlug,
      });
    actions.setInitializing(false);
    return;
  }),

  // Validate user session token.
  isSessionTokenValid: thunk(async (actions, payload) => {
    try {
      const { token } = payload;

      await api.post (BACKEND_URL + "/api/v1/auth/validatetoken", {
        token,
      });

      return true;
    } catch (error) {
      return false;
    }
  }),

  // Check with the server if user has filled details.
  checkIfFilledCandidateDetails: thunk(async (actions, payload) => {
    try {
      await api.get( BACKEND_URL + "/api/v1/fetch/candidate");
      return true;
    } catch (error) {
      return false;
    }
  }),
};

export default user;
