import api from "../../Http/httpService";
import { BASE_API_URL, getJobById as jobById } from "../endpoints";

export const getJobById = (id) => api.get(`${BASE_API_URL}/${jobById(id)}`);
