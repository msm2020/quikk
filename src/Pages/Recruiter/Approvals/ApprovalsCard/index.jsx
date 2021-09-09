import { Box, Button, Grid, Image, Stack, Text } from "@chakra-ui/core";
import React from "react";

function ApprovalsCard({ eachProfile, handleProfile }) {
  // const setChosenProfile = () => {
  //     handleProfile(eachProfile.resume);
  // }
  return (
    <Box
      backgroundColor="white"
      borderRadius="1em"
      boxShadow="md"
      p="5"
      m="2"
      mx="5"
    >
      <Stack isInline spacing="1em" align="center">
        <Image size="110px" borderRadius="35%" src={eachProfile.profilePic} />
        <Stack ml="3" width="100%">
          <Text fontWeight="600" fontSize="xl">
            {eachProfile.name}
          </Text>
          <Grid templateColumns="repeat(auto-fit,minmax(170px,1fr))" gap="1em">
            <Text fontSize="md">
              <b>Designation:</b> {eachProfile.designation}
            </Text>
            <Text fontSize="md">
              <b>Client's Company:</b> {eachProfile.clientCompany}
            </Text>
            <Text fontSize="md">
              <b>Current CTC:</b> {eachProfile.currentCTC}
            </Text>
            <Text fontSize="md">
              <b>Expected CTC:</b> {eachProfile.expectedCTC}
            </Text>
            <Text fontSize="md">
              <b>Notice Period:</b> {eachProfile.noticePeriod}
            </Text>
          </Grid>
        </Stack>
      </Stack>
      <Grid templateColumns="repeat(3,1fr)" gap="1em" mt="5">
        {/* <Text fontSize="md"><b>Designation:</b> {eachProfile.designation}</Text>
                <Text fontSize="md" gridColumn="span 2" alignContent="baseline"><b>Client's Company:</b> {eachProfile.clientCompany}</Text>
                <Text fontSize="md"><b>Current CTC:</b> {eachProfile.currentCTC}</Text>
                <Text fontSize="md"><b>Expected CTC:</b> {eachProfile.expectedCTC}</Text>
                <Text fontSize="md"><b>Notice Period:</b> {eachProfile.noticePeriod}</Text> */}
        <Button
          variantColor="teal"
          onClick={() => {
            let newProfile = JSON.parse(JSON.stringify(eachProfile));
            newProfile.isApproved = true;
            handleProfile(newProfile);
          }}
        >
          Approve
        </Button>
        <Button
          variantColor="red"
          onClick={() => {
            let newProfile = JSON.parse(JSON.stringify(eachProfile));
            newProfile.isDeclined = true;
            handleProfile(newProfile);
          }}
        >
          Decline
        </Button>
        <Button
          variant="ghost"
          gridColumn={{ lg: "span 1", md: "span 1", sm: "span 2" }}
          onClick={() => handleProfile(eachProfile)}
        >
          Resume Preview
        </Button>
      </Grid>
    </Box>
  );
}

export default ApprovalsCard;
