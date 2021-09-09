import { Box, Grid } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SearchResults from "../SearchResults";
import SearchAccordion from "./SearchAccordion";
import SideAccordion from "./SideAccordion";

function CandidateSearch() {
  // console.log(location);
  const history = useHistory();
  const [search, setSearch] = useState(false);
  const url = "/recruiter/search";
  useEffect(() => {
    let changedURL = history.location.pathname.replace(url, "");
    if (changedURL !== "") {
      let newURL = changedURL.replace("/", "");
      if (newURL === "results") {
        setSearch(true);
      }
    } else {
      setSearch(false);
    }
  }, [history.location.pathname]);
  return (
    <Box>
      {search ? (
        <SearchResults />
      ) : (
        <Grid
          paddingTop="1em"
          gap="2rem"
          marginRight="3em"
          templateColumns="0.4fr 1.2fr"
        >
          <SideAccordion />
          <SearchAccordion />
        </Grid>
      )}
    </Box>
  );
}

export default CandidateSearch;
