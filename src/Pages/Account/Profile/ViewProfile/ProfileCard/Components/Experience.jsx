import React from "react";
import { Flex, Image, Text } from "@chakra-ui/core";
import ExperienceIcon from "static/assets/icons/Job/Experience.png";

export default function Experience({ years }) {
  return (
    <Flex align="Center" mr="3" data-test-id="candidate-work-experience">
      <Image src={ExperienceIcon} />
      <Text mx="2" fontSize="sm">
        {years}
      </Text>
    </Flex>
  );
}
