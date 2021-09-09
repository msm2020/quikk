import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/core";
import { pipelinesOptions } from "Data/Recruiter/Settings";
import React from "react";

function Pipelines() {
  const presentPipelines = Object.keys(pipelinesOptions);
  return (
    <Box p="5">
      <Flex align="center" justify="space-between">
        <Stack>
          <Text fontSize="xl" fontWeight="600">
            Pipeline templates
          </Text>
          <Text color="grey">
            Manage pipeline stage templates to be used for all jobs.{" "}
            <Link color="green !important" href="www.google.com">
              Learn More
            </Link>
          </Text>
        </Stack>
        <Button variantColor="teal" size="sm" leftIcon="add">
          New template
        </Button>
      </Flex>
      <Stack maxWidth="700px">
        {presentPipelines.map((eachStageTitle) =>
          Object.keys(pipelinesOptions[eachStageTitle]).map((each) => (
            <Box key={each} my="4">
              <Text my="2" color="grey">
                {each}
              </Text>
              {pipelinesOptions[eachStageTitle][each].map((eachStage) => (
                <Box
                  border="1px solid #eeeeee"
                  borderRadius="0.25em"
                  backgroundColor="white"
                  p="2"
                  m="3"
                  key={eachStage.name}
                >
                  <Flex justify="space-between">
                    <Stack isInline align="center">
                      <span
                        style={{ backgroundColor: eachStage.color }}
                        className="rounded-square"
                      />
                      <Text mx="3">{eachStage.name}</Text>
                    </Stack>
                    <Stack isInline spacing={4}>
                      <IconButton variant="ghost" icon="edit" />
                      {each === "Fixed Stages" ? (
                        ""
                      ) : (
                        <IconButton variant="ghost" icon="delete" />
                      )}
                    </Stack>
                  </Flex>
                </Box>
              ))}
            </Box>
          ))
        )}
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

export default Pipelines;
