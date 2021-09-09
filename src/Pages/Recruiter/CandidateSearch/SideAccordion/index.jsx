import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/core";
import React from "react";

const ShowSearches = ({ title, date }) => (
  <Box padding="0.5em" borderBottom="1px #eeeeee solid">
    <Flex justifyContent="space-between" align="center">
      <Text>{title}</Text>
      <Text>{date}</Text>
    </Flex>
  </Box>
);
const searchList = [
  {
    title: "SR-Dyne",
    date: "24-06-2019",
  },
  {
    title: "NTT",
    date: "24-06-2019",
  },
  {
    title: "MDT",
    date: "24-06-2019",
  },
];

function SideAccordion() {
  return (
    <Box>
      <Accordion allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionHeader
                _expanded={{ bg: "#ddf3ec" }}
                borderRight="3px solid #41977b"
              >
                <Box flex="1" textAlign="left">
                  Recent Searches
                </Box>
                <Icon size="12px" name={isExpanded ? "minus" : "add"} />
              </AccordionHeader>
              <AccordionPanel pb={4}>No Recent Search Found</AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionHeader
                _expanded={{ bg: "#ddf3ec" }}
                borderRight="3px solid #41977b"
              >
                <Box flex="1" textAlign="left">
                  Saved Searches
                </Box>
                <Icon size="12px" name={isExpanded ? "minus" : "add"} />
              </AccordionHeader>
              <AccordionPanel pb={4} p="1">
                {searchList.map((each) => (
                  <ShowSearches
                    key={each.title.toLowerCase()}
                    title={each.title}
                    date={each.date}
                  />
                ))}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default SideAccordion;
