import React from "react";
import { Box, Text, Divider } from "@chakra-ui/core";

const DetailCard = ({ title, subtitle, duration }) => (
  <Box p="2">
    <Text fontSize="lg">{title}</Text>
    <Text my="1" color="grey">
      {subtitle}
    </Text>
    <Text color="grey">{duration}</Text>
    <Divider borderColor="black" width="90%" margin="1em auto" />
  </Box>
);

export default DetailCard;
