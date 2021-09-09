import { Box, Button, Stack, Text } from "@chakra-ui/core";
import Embed from "Components/Core/Embed";
import EditorContainer from "Components/Editor";
import React from "react";
import NotChosen from "static/assets/SVGs/NotChosen";

const DeclineCard = () => {
  return (
    <Box p="5">
      <Text fontSize="lg" my="2" fontWeight="600">
        Decline Reason
      </Text>
      <EditorContainer />
      <Stack my="5" alignSelf="baseline">
        <Button variantColor="teal">Submit</Button>
      </Stack>
    </Box>
  );
};

function PreviewWindow({ chosenProfile }) {
  return (
    <Box
      alignSelf="flex-start"
      mx="5"
      my="2"
      boxShadow="md"
      p="5"
      backgroundColor="white"
      borderRadius="0.5em"
    >
      <Text fontWeight="600">Preview Window</Text>
      {chosenProfile ? (
        <Box margin="0 auto">
          {chosenProfile.isDeclined ? (
            <DeclineCard />
          ) : (
            <Embed.PDF pdfLocation={chosenProfile.resume} />
          )}
        </Box>
      ) : (
        <Stack align="center">
          <NotChosen width="25vw" height="40vh" />
          <Text>Choose a Profile's resume to Preview</Text>
        </Stack>
      )}
    </Box>
  );
}

export default PreviewWindow;
