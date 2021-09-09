import {
  Button,
  Divider,
  Flex,
  Image,
  Progress,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/core";
import React, { Fragment } from "react";
import { useCandidateDetails } from "hooks";
import computeProfileStrength from "Pages/Account/Profile/ViewProfile/utils/calculate-profile-strength";

function ProfileCard({ profile }) {
  const { data, error, loading } = useCandidateDetails();

  if (loading || error) {
    return <p>Loading...</p>;
  }

  const { strength, strengthComment } = computeProfileStrength(data);

  return (
    // <Box backgroundColor="#eeeeee" m="10" marginLeft="0" p="5" width="auto">
    <Fragment>
      <Flex
        align={{ base: "center" }}
        direction={{ lg: "row", md: "column", sm: "column", xs: "column" }}
      >
        <Image rounded="1em" src={data?.profile_photo} size="100px" />
        <Flex direction="column" marginLeft="1em" marginTop="0.5em">
          <Flex justify="space-between">
            <Text fontSize="lg">{`${data?.first_name} ${data?.last_name}`}</Text>
            <Button size="sm" variant="ghost">
              Update
            </Button>
          </Flex>
          <Text fontSize="0.9em" marginTop="0.35em">
            {data?.professional_details[0]?.designation}
          </Text>
          <Stack marginY="1.2em">
            <SimpleGrid gridTemplateColumns="0.8fr 0.2fr" spacing="1em">
              <Text fontSize="sm">{`Profile Strength (${strengthComment})`}</Text>
              <Text color="green">{`${strength} %`}</Text>
            </SimpleGrid>
            <Progress
              height="0.25em"
              backgroundColor="black"
              color="green"
              size="sm"
              value={strength}
            />
          </Stack>
        </Flex>
      </Flex>
      <SimpleGrid minChildWidth="120px" marginY="1em" spacing="1em">
        <Flex as="span" align="center" fontSize="sm">
          {" "}
          <Text marginRight="0.5em" fontSize="lg" color="#41bb93">
            {profile.jobs.recommended.count}
          </Text>
          Recommended{" "}
        </Flex>
        <Flex as="span" align="center" fontSize="sm">
          {" "}
          <Text marginRight="0.5em" fontSize="lg" color="#41bb93">
            {profile.jobs.applied.count}
          </Text>
          Applied{" "}
        </Flex>
      </SimpleGrid>
      <Divider borderColor="black.200" />
    </Fragment>
    // </Box>
  );
}

export default ProfileCard;
