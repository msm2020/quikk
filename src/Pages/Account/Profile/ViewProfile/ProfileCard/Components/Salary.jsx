import React from "react";
import { Flex, Image, Text } from "@chakra-ui/core";
import SalaryIcon from "static/assets/icons/Job/Salary.png";

export default function Salary({ salary }) {
  return (
    <Flex align="Center">
      <Image src={SalaryIcon} />
      <Text
        mx="2"
        fontSize="sm"
      >{` ${salary.expected} | ${salary.current}`}</Text>
    </Flex>
  );
}
