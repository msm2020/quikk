import { Box } from "@chakra-ui/core";
import React from "react";

function DetailCard({ children }) {
  return (
    <Box m="5" backgroundColor="white" p="5" borderRadius="0.5em">
      {children}
    </Box>
  );
}

export default DetailCard;
