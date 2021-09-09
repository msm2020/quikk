import { Box } from "@chakra-ui/core";
import React from "react";

function Card({ children }) {
  return (
    <Box
      backgroundColor="white"
      maxW="950px"
      margin={{ lg: "1em auto", base: "1em 1.5em" }}
      padding="0.5em 1em"
      boxShadow="0 0 4px 2px rgba(0,0,0,.2)"
    >
      {children}
    </Box>
  );
}

export default Card;
