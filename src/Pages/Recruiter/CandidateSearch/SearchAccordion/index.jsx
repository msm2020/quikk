import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Icon,
  Select,
  Stack,
} from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import AcademicDetailCard from "../AcademicDetailCard";
import AdditionDetailCard from "../AdditionDetailCard";
import AdvSearchCard from "../AdvSearchCard";
import EmployDetailCard from "../EmployDetailCard";
import ResultDetailCard from "../ResultDetailCard";

const EachAccordion = ({ title, children }) => (
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <AccordionHeader
          padding="2"
          backgroundColor="#41977b"
          color="white"
          _hover="background-color: #41977b"
        >
          <Box fontSize="1.05em" flex="1" textAlign="left">
            {title}
          </Box>
          <Icon size="12px" name={isExpanded ? "minus" : "add"} />
        </AccordionHeader>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </>
    )}
  </AccordionItem>
);

function SearchAccordion() {
  const history = useHistory();
  return (
    <Box>
      <Accordion>
        <EachAccordion title="Advanced Search">
          <AdvSearchCard />
        </EachAccordion>
        <EachAccordion title="Employment Details">
          <EmployDetailCard />
        </EachAccordion>
        <EachAccordion title="Academic Details">
          <AcademicDetailCard />
        </EachAccordion>
        <EachAccordion title="Additional Details">
          <AdditionDetailCard />
        </EachAccordion>
        <EachAccordion title="Result Details">
          <ResultDetailCard />
        </EachAccordion>
      </Accordion>
      <Box py="5">
        <Select defaultValue="6m" maxW="250px">
          <option value="6m">Active in 6 months</option>
          <option value="12m">Active in 12 months</option>
          <option value="24m">Active in 24 months</option>
        </Select>
      </Box>
      <Stack spacing="1em">
        <Button
          _hover={{ bg: "#0072bc" }}
          color="white"
          backgroundColor="#0072bc"
          py="3"
          width="100%"
          onClick={() => history.push("/recruiter/search/results")}
        >
          Search
        </Button>
        <Checkbox>Save the current search as your default search</Checkbox>
      </Stack>
    </Box>
  );
}

export default SearchAccordion;
