import React, { Fragment } from "react";
import { Flex, Text } from "@chakra-ui/core";

const Chips = ({ children }) => <Fragment>{children}</Fragment>;

Chips.Container = ({ children }) => (
  <Flex className="chips-container" flexWrap="wrap" padding="1">
    {children}
  </Flex>
);

Chips.SkillChip = ({ skill }) => (
  <Text
    my="1"
    mx="2"
    color="#41bb93"
    padding="0.5em"
    border="2px solid #41bb93"
    backgroundColor="#cbe2da"
    className="skill-chip"
    data-skill={skill}
  >
    {skill}
  </Text>
);

export default Chips;
