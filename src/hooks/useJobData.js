import useSwr from "swr";
import { getJobById } from "../api/endpoints";

const useJobData = (id) => {
  const { data, error } = useSwr(getJobById(id));
  return [!data && !error, error, data];
};

export default useJobData;
