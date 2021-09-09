import {
  Box,
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/core";
import React, { useContext } from "react";

import {
  ViewProfileContext,
  ViewProfileConstantsCtx,
} from "../ViewProfile.context";
import {
  ProfileImage,
  Address,
  Experience,
  Salary,
  ProfileStrength,
  ContactDetails,
} from "./Components";

function ProfileCard({ profile }) {
  const userFromContext = useContext(ViewProfileContext);
  const userConstants = useContext(ViewProfileConstantsCtx);

  const { expected_salary, current_salary } = userFromContext;

  const salary = {
    expected: `${expected_salary} rupees`,
    current: `${current_salary} rupees`,
  };

  return (
    <Box p={{sm:"1",xs:"1",md:"10"}}px={{sm:"0",xs:"0",md:"20"}}paddingTop={{sm:"1rem",xs:"1rem",md:""}} backgroundColor="#0B0b19" color="white">
      <Flex justify="space-between" direction={{ lg: "row", base: "column" }}>
        <Box mx="5">
          <Flex display={{sm:"block",xs:"block",md:"flex"}} align="center">
            <ProfileImage
              src={userFromContext.profile_photo}
              fullName={userConstants.fullName}
            />
            <Box mx="5">
              <Text fontSize="lg">{userConstants.fullName}</Text>
              <Text
                fontSize="md"
                my="2"
                title={`${userConstants.fullName}'s designation`}
              >
                {userConstants.designation}
              </Text>
              <Stack isInline>
                <Address address={userFromContext.address} />
                <Experience years={userFromContext.how_long} />
                <Salary salary={salary} />
              </Stack>
            </Box>
          </Flex>
          <Box mt="8">
            <ProfileStrength
              strength={profile.strength}
              strengthComment={profile.strengthComment}
            />
            <ContactDetails
              mobile={userFromContext.mobiles[0] || null}
              email={userFromContext.user.email}
              email_verified={userFromContext.user.email_verified}
            />
          </Box>
        </Box>
        <Box color="black" rounded="0.5em" p="5" backgroundColor="white">
          <Text fontSize="xl">Suggestions</Text>
          <SimpleGrid minChildWidth="120px" spacing="1em" alignItems="end">
            <List mt="5">
              {profile.suggestion.add.map((each) => (
                <ListItem key={each}>
                  <ListIcon icon="minus" />
                  {`Add ${each}`}
                </ListItem>
              ))}
            </List>
            <Button backgroundColor="#41bb93">Get Started</Button>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProfileCard;
