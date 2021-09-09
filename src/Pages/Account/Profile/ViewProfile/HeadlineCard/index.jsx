import { Box, Button, Flex, Icon, Text } from "@chakra-ui/core";
import React from "react";

function HeadlineCard() {
  return (
    <Box
      id="headline"
      my="5"
      padding="1.5em"
      backgroundColor="#eeeeee"
      rounded="0.25em"
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="lg">{title}</Text>
        <Button variant="ghost" onClick={onOpen} color="#41bb93">
          <Icon name="edit" />
        </Button>
      </Flex>
    </Box>
  );
}

export default HeadlineCard;
