import { Box, Flex, Grid, Spinner, Stack, Text } from "@chakra-ui/core";
import kebabCase from "lodash/kebabCase";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import NavBar from "../../../Components/NavBar";
import { recommendedJobs } from "../../../Data/Jobs";
import { useJobData } from "../../../hooks";
import SummaryCard from "./SummaryCard";
import TitleCard from "./TitleCard";

function searchFunc(key, array) {
  return array.filter((elem) => {
    if (!elem.hasOwnProperty("id")) {
      return false;
    }

    return elem.id === key;
  })[0];
}

const TitleDescription = ({ title, desc }) => (
  <Stack my="3">
    <Text fontSize="lg">{title}</Text>
    <Text fontSize="md" color="grey">
      {desc}
    </Text>
  </Stack>
);

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

function ViewJob() {
  const history = useHistory();
  const { jobId, jobTitle } = useParams();
  const [loading, error, jobData] = useJobData(jobId);

  const jobPost = searchFunc("102234", recommendedJobs);

  // Fill the job title in the URL
  // for better SEO.
  useEffect(() => {
    const fillJobTitleSlug = () => {
      if (!jobData || jobTitle) {
        return;
      }

      const _pathname = window.location.pathname,
        _kebabedjobTitle = kebabCase(jobData.jobTitle),
        _jobTitleSlug = _pathname.endsWith("/")
          ? `${_pathname}${_kebabedjobTitle}`
          : `${_pathname}/${_kebabedjobTitle}`;

      history.push(_jobTitleSlug);
    };

    fillJobTitleSlug();
  }, [jobData, jobTitle, history]);

  // TODO: Show UI Skeleton while job data is being loaded.
  if (loading) {
    return (
      <Layout>
        <Flex
          height="100vh"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner />
          <Text fontSize="sm" mt="5">
            Loading job details...
          </Text>
        </Flex>
      </Layout>
    );
  }

  // TODO: Show empty state for no jobs found.
  if (!jobData) {
    return (
      <Layout>
        <Box className="no-job-found">
          <Text fontSize="lg">No job found!</Text>
        </Box>
      </Layout>
    );
  }

  // TODO: Show error illustration when errored.
  if (error) {
    return (
      <Layout>
        <Box className="error-fetching-job-details">
          <Text fontSize="lg">Error fetching job details!</Text>
        </Box>
      </Layout>
    );
  }

  return (
    <Box>
      <NavBar />
      <TitleCard jobPost={jobPost} jobData={jobData} />
      <Grid my="5" templateColumns="0.8fr 2fr" gap="1em">
        <Box>
          <Text ml="3" my="3" fontSize="lg">
            Job Posted By
          </Text>
          <SummaryCard jobPosting={jobPost} jobData={jobData} />
        </Box>
        <Box mx="10">
          <TitleDescription
            title="Job Description"
            desc={jobData.jobDescription}
          />
          <TitleDescription
            title="Desired Candidate"
            desc={jobData.candidateProfile}
          />
          <TitleDescription title="Company Profile" desc={jobPost.profile} />
          <TitleDescription title="Attachment" desc={jobPost.profile} />
        </Box>
      </Grid>
    </Box>
  );
}

export default ViewJob;
