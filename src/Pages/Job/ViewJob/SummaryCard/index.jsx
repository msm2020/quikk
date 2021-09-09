import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/core";
import React from "react";

import ShareJob from "./components/ShareJob";

const EachDetail = ({ title, value }) => (
  <SimpleGrid minChildWidth="100px" spacing="1em" my="5">
    <Text color="grey" fontSize="sm">
      {title}
    </Text>
    <Text fontSize="sm">{value}</Text>
  </SimpleGrid>
);

function SummaryCard({ jobPosting, jobData }) {
  return (
    <Flex direction="column" p="5" backgroundColor="#eeeeee">
      <Flex
        my="5"
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        align="center"
      >
        <Image src={jobPosting.posted.img} size="100px" />
        <Flex ml="5" direction="column">
          <Text fontSize="lg">{jobPosting.posted.name}</Text>
          <Text fontSize="md" my="2">
            {jobPosting.posted.role}
          </Text>
          <Text>{`${jobData.city}, ${jobData.state}`}</Text>
        </Flex>
      </Flex>
      <Button backgroundColor="#41bb93" variant="solid">Message</Button>
      <ShareJob links={jobPosting.links} jobTitle={jobData.jobTitle} />
      <Box my="5">
        <Text mb="2" fontSize="md">
          Job Details
        </Text>
        <EachDetail title="Salary" value={jobPosting.job.salary} />
        <EachDetail title="Industry" value={jobData.department} />
        <EachDetail title="Functional Area" value={jobData.functionalArea} />
        <EachDetail title="Role Category" value={jobPosting.job.category} />
        <EachDetail title="Employment Type" value={jobData.employmentType} />
      </Box>
      <Box my="5">
        <Text fontSize="md">Key Skills</Text>
        <Text my="2" fontSize="sm" color="grey">
          {jobData.skills.join(", ")}
        </Text>
      </Box>
    </Flex>
  );
}

export default SummaryCard;
