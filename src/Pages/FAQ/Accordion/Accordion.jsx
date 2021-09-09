import {
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/core";
import React from "react";
import NotFound from "../../../static/assets/SVGs/NotFound.svg";

const Data = [
  {
    title: "Why is it free ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio cum saepe quos. Praesentium, qui placeat? Velit, magni molestias provident illo sint harum ab voluptatum esse ipsa quae consequuntur earum.",
  },
  {
    title: "What is different ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio cum saepe quos. Praesentium, qui placeat? Velit, magni molestias provident illo sint harum ab voluptatum esse ipsa quae consequuntur earum.",
  },
  {
    title: "Will i get a job for sure?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio cum saepe quos. Praesentium, qui placeat? Velit, magni molestias provident illo sint harum ab voluptatum esse ipsa quae consequuntur earum.",
  },
  {
    title: "What if I get spammy jobs from here ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio cum saepe quos. Praesentium, qui placeat? Velit, magni molestias provident illo sint harum ab voluptatum esse ipsa quae consequuntur earum.",
  },
];

const EachAccordion = ({ each }) => (
  <AccordionItem className="AccItem">
    <AccordionHeader>
      <Box flex="1" textAlign="left" fontWeight="500">
        {each.title}
      </Box>
      <AccordionIcon />
    </AccordionHeader>
    <AccordionPanel backgroundColor= "#e8f0fe"  pb={4}>{each.answer}</AccordionPanel>
  </AccordionItem>
);

function Accordion({ value }) {
  const newData =
    value.length > 0 ? Data.filter((word) => word.title.includes(value)) : Data;

  return newData.length > 0 ? (
    <Box margin="0 2rem" border="1px solid #d3d3d3" borderRadius="0.25em" p="1">
      {newData.map((each,i) => (
        <EachAccordion key={each.title} each={each} />
      ))}
    </Box>
  ) : (
    <Flex direction="column" align="center">
      <Image
        size={{ lg: "300px", md: "200px", sm: "150px", xs: "100px" }}
        src={NotFound}
        alt="Not Found"
      />
      <Text fontSize="2xl">{`No Search Results found for ${value} `}</Text>
    </Flex>
  );
}

export default Accordion;
