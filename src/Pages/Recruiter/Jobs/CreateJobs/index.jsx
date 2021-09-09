import {
  Box,
  Flex,
  Grid,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { tabDetails } from "../../../../Data/Recruiter/CreateJob";
import ApplicationFormWrapper from "./ApplicationForm";
import JobPosting from "./JobPosting";
import JobStatus from "./JobStatus";
import PipelineWrapper from "./Pipeline";
import TeamsWrapper from "./TeamsTab";

function CreateJobsWrapper() {
  return (
    <Box backgroundColor="#f0f4f7">
      <Grid templateColumns="2fr 0.3fr" gap="1em">
        <Tabs m="3" backgroundColor="white" align="center" isFitted>
          <TabList>
            {tabDetails.map((each) => (
              <Tab key={each.name}>
                <Flex align="center">
                  <Image src={each.icon} size="24px" />
                  <Text ml="3">{each.name}</Text>
                </Flex>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <JobPosting />
            </TabPanel>
            <TabPanel>
              <ApplicationFormWrapper />
            </TabPanel>
            <TabPanel>
              <PipelineWrapper />
            </TabPanel>
            <TabPanel>
              <TeamsWrapper />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <JobStatus />
      </Grid>
    </Box>
  );
}

export default CreateJobsWrapper;
