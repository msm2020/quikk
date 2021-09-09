import { Box, Text } from "@chakra-ui/core";
import React, { useContext } from "react";
// import log from "utils/logger";
import { JobCard } from "../Components";
import { JobSearchCtx as Ctx } from "../JobSearch.Context";
import "./style.scss";

function ShowJobs() {
  const { searchResults } = useContext(Ctx);

  // log(`Search results: ${JSON.stringify(searchResults)}`);

  if (!searchResults) {
    // TODO: Show initiate search illustration.
    return <Text>Search for the job, you'd like to apply!</Text>;
  }

  if (!searchResults.length) {
    // TODO: Show no jobs found illustration.
    return (
      <Text>No jobs found. Enter more keywords to get better matches.</Text>
    );
  }

  return (
    <Box>
      <Text fontSize="lg">{`${searchResults.length} job(s) found.`}</Text>
      {searchResults.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Box>
  );
}

export default ShowJobs;
