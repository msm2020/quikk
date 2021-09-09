import { Box, Grid, Stack, Text } from "@chakra-ui/core";
import { approvalList } from "Data/Recruiter/Approvals";
import React, { useState } from "react";
import ApprovalsCard from "./ApprovalsCard";
import "./style.scss";
import PreviewWindow from "./PreviewWindow/index";

function ApprovalsWrapper() {
  const [chosenProfile, setChosenProfile] = useState();

  const handleChosenProfile = (givenProfile) => {
    setChosenProfile(givenProfile);
  };

  // console.log(chosenProfile)

  return (
    <Box backgroundColor="#f0f4f7">
      <Text px="5" py="2" fontSize="xl" fontWeight="600">
        Approvals
      </Text>
      <Grid
        pb="4"
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap="1em"
      >
        <Stack>
          {approvalList.map((each) => (
            <ApprovalsCard
              handleProfile={handleChosenProfile}
              eachProfile={each}
              key={each.name}
            />
          ))}
        </Stack>
        <PreviewWindow chosenProfile={chosenProfile} />
      </Grid>
    </Box>
  );
}

export default ApprovalsWrapper;
