import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { OptionIcons } from "../../../../../Data/Recruiter/Icons";
import DetailCard from "../DetailCard";

const ApplicationSelect = () => (
  <Select defaultValue="req">
    {OptionIcons.map((each) => (
      <option value={each.value} key={each.name}>
        {each.name}
      </option>
    ))}
  </Select>
);

function ApplicationFormWrapper() {
  return (
    <Box py="5">
      <DetailCard>
        <FormLabel fontSize="lg" fontWeight="600">
          Screening Questions
        </FormLabel>
        <Text color="grey">
          Candidates will need to answer these questions before they can apply.{" "}
          <Link color="teal !important" href="www.google.com">
            Learn More
          </Link>
        </Text>
        <Button my="5" leftIcon="add" width="100%" border="2px dashed grey">
          Add New
        </Button>
      </DetailCard>
      <DetailCard>
        <FormLabel fontSize="lg" fontWeight="600">
          Personal Information
        </FormLabel>
        <Text color="grey">
          Decide what should be displayed on the application form.
        </Text>
        <SimpleGrid minChildWidth="120px" spacing="1em" my="1em">
          <FormControl>
            <FormLabel>CV/Resume</FormLabel>
            <ApplicationSelect />
          </FormControl>
          <FormControl>
            <FormLabel>Cover Letter</FormLabel>
            <ApplicationSelect />
          </FormControl>
          <FormControl>
            <FormLabel>Photo</FormLabel>
            <ApplicationSelect />
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <ApplicationSelect />
          </FormControl>
        </SimpleGrid>
      </DetailCard>
    </Box>
  );
}

export default ApplicationFormWrapper;
