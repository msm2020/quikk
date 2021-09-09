import { Box, Button, Flex, Stack, Text } from "@chakra-ui/core";
import React from "react";
import { searchResultInfo } from "../../../../Data/Recruiter/CandidateSearch";

const EachChip = ({ value }) => (
  <Box backgroundColor="#eeeeee" p="2" mr="3">
    <Text fontSize="sm">{value}</Text>
  </Box>
);

function StatsToolBar() {
  return (
    <Box p="5" backgroundColor="white">
      <Flex justify="space-between" align="center">
        <Stack isInline align="center">
          <Text fontSize="lg" fontWeight="700">
            All Keywords
          </Text>
          <Stack isInline my="1em">
            {searchResultInfo.keywords.map((each) => (
              <EachChip key={each} value={each} />
            ))}
          </Stack>
        </Stack>
        <Text fontSize="2xl" fontWeight="800" color="#41bb93">
          {searchResultInfo.profilesFound.toLocaleString()}
        </Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <Stack isInline>
          <Button
            size="sm"
            backgroundColor="#41bb93"
            color="white"
            _hover={{ backgroundColor: "#41bb93" }}
          >
            Modify Search
          </Button>
          <Button size="sm">New Search</Button>
          <Button size="sm" variant="ghost">
            Save Search
          </Button>
        </Stack>
        <Text
          color="grey"
          fontSize="sm"
        >{`profiles found in ${searchResultInfo.foundIn}`}</Text>
      </Flex>
    </Box>
  );
}

export default StatsToolBar;
