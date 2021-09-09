import { Box, Text } from "@chakra-ui/core";
import Embed from "Components/Core/Embed";
import React from "react";
import demoResume from "../../../../static/assets/PDFs/demoResume.pdf";

function ResumeTabWrapper() {
  return (
    <Box
      m="3"
      backgroundColor="#eeeeee"
      p="5"
      borderRadius="1em"
      boxShadow="md"
    >
      <Text fontSize="lg" mb="3" fontWeight="600">
        Resume
      </Text>
      <Embed.PDF pdfLocation={demoResume} />
    </Box>
  );
}

export default ResumeTabWrapper;
