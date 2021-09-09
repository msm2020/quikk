import {
  Box,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
} from "@chakra-ui/core";
import React from "react";

function ResultDetailCard() {
  return (
    <Box padding="1em">
      <Grid templateColumns="0.5fr 2fr" gap="1em">
        <FormLabel>Show</FormLabel>
        <RadioGroup
          variantColor="teal"
          isInline
          spacing={5}
          defaultValue="rad1"
        >
          <Radio value="rad1">All Candidates</Radio>
          <Radio value="rad2">New Candidates</Radio>
          <Radio value="rad3">Modified Candidates</Radio>
        </RadioGroup>
        <FormLabel>Show only candidates with</FormLabel>
        <RadioGroup
          variantColor="teal"
          isInline
          spacing={5}
          defaultValue="rad1"
        >
          <Radio value="rad1">Verified mobile number</Radio>
          <Radio value="rad2">Verified Card ID</Radio>
          <Radio value="rad3">Attached Resume</Radio>
        </RadioGroup>
        <FormLabel>Show Candidates seeking</FormLabel>
        <Stack>
          <Stack isInline>
            <Select placeholder="Job Type">
              <option>Work from home</option>
            </Select>
            <Select placeholder="Employment Type">
              <option>Work from home</option>
            </Select>
          </Stack>
          <RadioGroup variantColor="teal" spacing={5} defaultValue="rad1">
            <Radio value="rad1">Search only premium institute resume</Radio>
            <Radio value="rad2">Search only Featured Candidates</Radio>
            <Radio value="rad3">
              Search only those candidates than can be contacted by SMS
            </Radio>
          </RadioGroup>
        </Stack>
        <FormLabel>Resume per page</FormLabel>
        <Stack>
          <Select placeholder="Set Number">
            <option>40</option>
            <option>80</option>
            <option>120</option>
          </Select>
        </Stack>
        <FormLabel>Sort by</FormLabel>
        <Stack>
          <Select placeholder="Category">
            <option>Relevance</option>
            <option>New</option>
            <option>Old</option>
          </Select>
        </Stack>
        <FormLabel htmlFor="semantic-search">Semantic Search</FormLabel>
        <Stack>
          <Switch id="semantic-search" />
        </Stack>
      </Grid>
    </Box>
  );
}

export default ResultDetailCard;
