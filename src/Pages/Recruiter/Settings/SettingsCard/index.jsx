import { Box } from "@chakra-ui/core";
import React from "react";

function SettingsCard({ children, ...rest }) {
  return (
    <Box
      backgroundColor="white"
      p="5"
      m="3"
      border="1px solid #eeeeee"
      borderRadius="0.5em"
      boxShadow="md"
      {...rest}
    >
      {children}
    </Box>
  );
}

export default SettingsCard;
