import React from "react";
import { Box, Flex, Text, Button, Divider } from "@chakra-ui/core";

const AccomplishCard = ({ title, subtitle }) => (
  <Box my="3" p="3">
    <Flex justify="space-between">
      <Text fontSize="lg">{title}</Text>
      <Button color="var(--primary-green)" variant="link">
        Add
      </Button>
    </Flex>
    <Text my="3" color="grey" fontSize="md">
      {subtitle}
    </Text>
    <Divider borderColor="black" />
  </Box>
);

export default AccomplishCard;
