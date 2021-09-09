import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Text,
} from "@chakra-ui/core";
import React from "react";
import ProfileCard from "../ProfileCard";
import { filterCategories, demoProfile } from "../../../../Data/Jobs/index";

const EachFilter = ({ filter }) => (
  <AccordionItem>
    <AccordionHeader>
      <Box flex="1" textAlign="left">
        {filter.title}
      </Box>
      <AccordionIcon />
    </AccordionHeader>
    <AccordionPanel pb={4}>
      <CheckboxGroup variantColor="teal" defaultValue={filter.defaultValues}>
        {filter.options.map((each) => (
          <Checkbox key={each.value} value={each.value}>
            {each.name}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>
);

function FilterCard() {
  return (
    <Box
      alignSelf="flex-start"
      backgroundColor="#eeeeee"
      m="10"
      marginLeft="0"
      p="5"
      width="auto"
    >
      <ProfileCard profile={demoProfile[0]} />
      <Box>
        <Text my="5" color="#41bb93" fontSize="lg">
          Filters
        </Text>
        <Accordion>
          {filterCategories.map((fil) => (
            <EachFilter key={fil.title} filter={fil} />
          ))}
        </Accordion>
      </Box>
    </Box>
  );
}

export default FilterCard;
