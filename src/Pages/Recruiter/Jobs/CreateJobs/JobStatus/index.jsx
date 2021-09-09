import { Box, Button, Select, Stack, Text } from "@chakra-ui/core";
import React from "react";

function JobStatus() {
  return (
    <Box
      boxShadow="lg"
      backgroundColor="white"
      p="5"
      m="3"
      alignSelf="flex-start"
    >
      <Text fontSize="lg" fontWeight="600">
        JOB STATUS
      </Text>
      <Stack p="3">
        <Select>
          <option value="publish">Publish</option>
          <option value="draft">Draft</option>
        </Select>
        <Button width="100%" variantColor="teal" color="white">
          Save
        </Button>
      </Stack>
    </Box>
  );
}

export default JobStatus;
