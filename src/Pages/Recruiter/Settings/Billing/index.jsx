import { Button, Stack, Text } from "@chakra-ui/core";
import React from "react";
import ChoosePlan from "static/assets/SVGs/ChoosePlan";
import SettingsCard from "../SettingsCard";

function BillingWrapper() {
  return (
    <SettingsCard style={{ margin: "0.5em auto" }} maxWidth="720px">
      <Stack align="center">
        <ChoosePlan width="40vw" height="40vh" padding="0" />
        <Text my="2" fontSize="xl" fontWeight="600">
          1 days left to choose a plan
        </Text>
        <Text my="2" color="grey" maxW="400px">
          Your account is about to expire and be blocked. Choose a plan to
          continue hiring without hassle.
        </Text>
        <Button
          my="2"
          rightIcon="arrow-forward"
          backgroundColor="#41bb93"
          color="white"
          _hover={{ backgroundColor: "#41bb93", color: "white" }}
        >
          Choose your plan
        </Button>
      </Stack>
    </SettingsCard>
  );
}

export default BillingWrapper;
