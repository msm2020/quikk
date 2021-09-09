import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";

import api from "Http/httpService";
import log from "utils/logger";

export const JobSearchCtx = createContext(undefined);

const JobSearchCtxContainer = ({ children }) => {
  const [filters, setFilters] = useState({});
  const [processing, toggleProcessing] = useState(false);
  const [searchResults, setSearchResults] = useState(undefined);

  const { register, handleSubmit, control } = useForm();

  const postSearchQuery = async (data) => {
    const _filters = { ...data, ...filters };

    console.log(_filters);

    toggleProcessing(true);

    try {
      const searchResponse = await api.post(
        "/job/search/basicsearch",
        _filters
      );

      log(searchResponse.data);
      setSearchResults(searchResponse.data);
    } catch (error) {
      log(error);
    } finally {
      toggleProcessing(false);
    }
  };

  // useEffect(() => {
  //   log(searchState);
  // }, [searchState]);

  return (
    <JobSearchCtx.Provider
      value={{
        state: { processing },
        handlers: { postSearchQuery, setFilters },
        searchResults,
        register,
        handleSubmit,
        control,
      }}
    >
      {children}
    </JobSearchCtx.Provider>
  );
};

export default JobSearchCtxContainer;
