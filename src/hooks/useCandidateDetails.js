import useSwr from "swr";
import {BACKEND_URL} from "../constants";

export default function useCandidateDetails() {
  const { data, error } = useSwr( BACKEND_URL + "/api/v1/fetch/candidate");

  return {
    loading: !data && !error,
    data,
    error,
  };
}
