import axios from "axios";
import { USER_TOKEN_KEY } from "../constants";
// import log from "../utils/logger";

const api = axios.create({
  //baseURL: "https://backend.quiklyy.com",
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    'Content-Type': "application/json",
    'Acess-Control-Allow-Origin':"*",
    },
});

// Intercept every request & attach auth token.
api.interceptors.request.use(
  (request) => {
     if (localStorage.getItem(USER_TOKEN_KEY)) {
       request.headers["Authorization"] = `Bearer ${localStorage.getItem(
         USER_TOKEN_KEY
       )}`;
     }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
