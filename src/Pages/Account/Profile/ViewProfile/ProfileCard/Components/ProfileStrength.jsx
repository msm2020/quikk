import React, { useContext } from "react";
import { Box, Flex, Text, Progress } from "@chakra-ui/core";
import { ViewProfileContext as Ctx } from "../../ViewProfile.context";
import { calculateProfileStrength } from "../../utils";

export default function ProfileStrength() {
  const user = useContext(Ctx),
    _strength = calculateProfileStrength(user);

  return (
    <Box maxWidth="250px" data-test-id="profile-strength">
      <Flex justify="space-between">
        <Text data-test-id="profile-strength-comment">{`Profile Strength (${_strength.strengthComment})`}</Text>
        <Text
          data-test-id="profile-strength"
          color="var(--primary-green)"
        >{`${_strength.strength} %`}</Text>
      </Flex>
      <Progress
        my="2"
        height="0.25em"
        backgroundColor="white"
        color="green"
        size="sm"
        value={_strength.strength}
      />
    </Box>
  );
}
