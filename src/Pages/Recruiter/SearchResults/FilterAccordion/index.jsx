import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Stack,
} from "@chakra-ui/core";
import React from "react";
import { filterOptions } from "../../../../Data/Recruiter/CandidateSearch";

const EachAccordion = ({ title, children }) => (
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <AccordionHeader>
          <Box p="3" flex="1" textAlign="left">
            {title}
          </Box>
          <Icon size="12px" name={isExpanded ? "minus" : "add"} />
        </AccordionHeader>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </>
    )}
  </AccordionItem>
);

function FilterAccordion() {
  return (
    <Box alignSelf="start" boxShadow="md" backgroundColor="white" m="5" ml="0">
      <Flex p="5">
        <Checkbox variantColor="teal">Premium Candidates</Checkbox>
      </Flex>
      <Accordion>
        {filterOptions.map((each) => (
          <EachAccordion
            key={each.title.split(" ").join("")}
            title={each.title}
          >
            {each.options.map((eachOpt) => (
              <Box>
                <Checkbox variantColor="teal" value={eachOpt.value}>
                  {eachOpt.name}
                </Checkbox>
              </Box>
            ))}
          </EachAccordion>
        ))}
      </Accordion>
      <Stack p="3">
        <Button
          size="md"
          _hover={{ backgroundColor: "#41bb93" }}
          backgroundColor="#41bb93"
          color="white"
        >
          Refine Search
        </Button>
      </Stack>
    </Box>
  );
}

export default FilterAccordion;
