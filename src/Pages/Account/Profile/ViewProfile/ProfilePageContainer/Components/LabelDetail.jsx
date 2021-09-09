import React from "react";
import { Box, Text } from "@chakra-ui/core";

import ButtonLink from "./ButtonLink";

const LabelDetail = ({ label, value }) => (
  <Box p="2">
    <Text color="grey">{label}</Text>
    {value !== null ? (
      <Text my="2">{value}</Text>
    ) : (
      <ButtonLink my="2" text={`Add ${label}`} />
    )}
  </Box>
);

export default LabelDetail;
