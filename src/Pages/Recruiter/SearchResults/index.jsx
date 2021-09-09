import { Box, Grid } from "@chakra-ui/core";
import React from "react";
import FilterAccordion from "./FilterAccordion";
import ResultsWrapper from "./ResultsWrapper";
import StatsToolBar from "./StatsToolBar";

function SearchResults() {
  return (
    <Box>
      <Box backgroundColor="#eeeeee">
        <StatsToolBar />
        <Grid templateColumns="0.4fr 1.3fr">
          <FilterAccordion />
          <ResultsWrapper />
        </Grid>
      </Box>
    </Box>
  );
}

export default SearchResults;
