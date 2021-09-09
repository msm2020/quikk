import api from "./httpService";
import { BACKEND_URL } from "../constants";

export async function loginCandidate(payload) {
  return api.post( BACKEND_URL+ "/api/v1/auth/login-candidate", payload);
}

export async function loginRecruiter(payload) {
  return api.post( BACKEND_URL + "/auth/login-recruiter", payload);
}

export async function registerCandidate(payload) {
  return api.post( BACKEND_URL + "/api/v1/signup/recruitee", payload);
}

export async function registerRecruiter(payload) {
  return api.post( BACKEND_URL + "/api/v1/signup/recruiter", payload);
}
