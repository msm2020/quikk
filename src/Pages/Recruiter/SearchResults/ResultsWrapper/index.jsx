import {
  Button,
  Checkbox,
  Flex,
  Icon,
  Select,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { searchResults } from "../../../../Data/Recruiter/CandidateSearch";
import ResultCard from "../ResultCard";

function ResultsWrapper() {
  return (
    <Stack m="5">
      <Flex justify="space-between" mx="5">
        <Flex align="center">
          <Select size="sm" value="hide">
            <option value="hide">Hide Profiles</option>
            <option value="view">View Profiles</option>
          </Select>
          <Stack mx="2" isInline spacing="1em" align="center" minW="200px">
            <Text fontSize="sm">Active in</Text>
            <Select size="sm" value="6m" maxW="120px">
              <option value="6m">6 Months</option>
              <option value="12m">12 Months</option>
            </Select>
          </Stack>
          <Stack isInline minW="200px" align="center">
            <Text fontSize="sm">Show</Text>
            <Select size="sm" value="160" maxW="80px">
              <option value="160">160</option>
              <option value="220">220</option>
            </Select>
          </Stack>
        </Flex>
        <Stack isInline align="center">
          <Text fontSize="sm">Page 20 of 128</Text>
          <Button
            size="sm"
            backgroundColor="#41bb93"
            _hover={{ backgroundColor: "#41bb93" }}
          >
            <Icon name="chevron-right" />
          </Button>
        </Stack>
      </Flex>
      <Flex
        boxShadow="md"
        mx="5"
        justify="space-between"
        align="center"
        backgroundColor="white"
        p="3"
      >
        <Stack isInline gap="1em">
          <Checkbox>Select All</Checkbox>
          <Text mx="3" fontSize="sm">
            <Icon name="add" /> Add To
          </Text>
          <Text mx="3" fontSize="sm">
            <Icon name="email" /> Email
          </Text>
        </Stack>
        <Flex align="center">
          <Text w="60%" fontSize="sm" fontWeight="700">
            Sort By
          </Text>
          <Select w="100%" size="sm" defaultValue="relevance" color="#41bb93">
            <option value="relevance">Relevance</option>
          </Select>
        </Flex>
      </Flex>
      {searchResults.map((each) => (
        <ResultCard result={each} key={each.name.split(" ").join("")} />
      ))}
    </Stack>
  );
}

export default ResultsWrapper;
