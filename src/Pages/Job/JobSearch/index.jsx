import { Grid } from "@chakra-ui/core";
import NavBar from "../../../Pages/HomePage/NavBar/NavBar";
import React from "react";
import { SearchInputs } from "./Components";
import FilterCard from "./FilterCard";
import ShowJobs from "./ShowJobs";
import JobSearchCtxContainer from "./JobSearch.Context";
import AdvancedSearch from "Pages/HomePage/AdvancedSearch/AdvancedSearch";

function JobSearch() {
  return (
    <JobSearchCtxContainer>
      <NavBar />
     <SearchInputs yes={true}/>
   

      <Grid mt="5" templateColumns="auto 2fr" gap="1em">
        {/*
         * // TODO: FilterCard includes ProfileCard as well.
         * // Seperate them.
         */}
        <FilterCard />
        <ShowJobs />
      </Grid>
    </JobSearchCtxContainer>
  );
}

export default JobSearch;
