import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/core";
import { disqualifyReasons } from "Data/Recruiter/Settings";
import React from "react";

function DisqualifyReasonWrapper() {
  return (
    <Box p="5">
      <Text fontSize="xl" fontWeight="600">
        Disqualify Reasons
      </Text>
      <Text color="grey">
        Manage disqualify reasons across all jobs.{" "}
        <Link color="green !important" href="www.google.com">
          Learn More
        </Link>
      </Text>
      <Stack maxWidth="600px">
        {disqualifyReasons.map((each) => (
          <Flex
            my="4"
            borderRadius="0.35em"
            boxShadow="md"
            align="center"
            justify="space-between"
            backgroundColor="white"
            p="2"
            px="4"
            key={each}
          >
            <Text fontWeight="550">{each}</Text>
            <Stack isInline spacing={2}>
              <IconButton variant="ghost" icon="edit" />
              <IconButton variant="ghost" icon="delete" />
            </Stack>
          </Flex>
        ))}
        <Button
          my="4"
          backgroundColor="#f0f4f7"
          border="1px dashed grey"
          leftIcon="add"
        >
          Add new
        </Button>
      </Stack>
    </Box>
  );
}

export default DisqualifyReasonWrapper;
