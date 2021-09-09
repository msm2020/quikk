import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { iconsList } from "../../../../Data/Recruiter/Icons/index";

const TitleSubtitle = ({ title, subtitle }) => (
  <>
    <Text fontSize="sm" color="grey">
      {title}
    </Text>
    <Text fontSize="sm">{subtitle}</Text>
  </>
);

function ResultCard({ result }) {
  return (
    <Box m="5" mb="2">
      <Box
        boxShadow="lg"
        backgroundColor="white"
        border="1px solid #eeeeee"
        p="5"
        pb="1"
      >
        <Checkbox alignItems="start">
          <Flex justify="space-between" direction={{ lg: "row", sm: "column" }}>
            <Flex justify="space-between">
              <Image size="100px" src={result.profilePic} rounded="100%" />
              <Box ml="10">
                <Stack>
                  <Flex align="center">
                    <Text fontWeight="800" fontSize="lg">
                      {result.name}
                    </Text>
                    {result.isPremium && (
                      <Image ml="2" size="24px" src={iconsList.premium} />
                    )}
                  </Flex>
                  <Stack isInline>
                    <Flex align="Center">
                      <Image src={iconsList.expIcon} />
                      <Text mx="2" fontSize="sm">
                        {result.experience}
                      </Text>
                    </Flex>
                    <Flex align="Center">
                      <Image src={iconsList.salaryIcon} />
                      <Text
                        mx="2"
                        fontSize="sm"
                      >{` ${result.expectedSalary} | ${result.desiredSalary}`}</Text>
                    </Flex>
                    {/* <Flex align="Center">
                                            <Image src={profile.salaryIcon} />
                                            <Text mx="2" fontSize="sm">{` ${profile.expectedSalary} | ${profile.desiredSalary}`}</Text>
                                        </Flex> */}
                    <Flex align="center">
                      <Image src={iconsList.locationIcon} />
                      <Text mx="2" fontSize="sm">
                        {result.location}
                      </Text>
                    </Flex>
                  </Stack>
                </Stack>
                <Text my="3" fontSize="sm">
                  {result.description}
                </Text>
                <Grid templateColumns="repeat(2, 0.5fr)" gap="1em">
                  <Flex align="center">
                    <Image src={iconsList.mail} />
                    <Text ml="5" fontSize="sm">
                      {result.mailID}
                    </Text>
                  </Flex>
                  <Checkbox
                    variantColor="teal"
                    isChecked={result.mailVerify}
                    isDisabled={!result.mailVerify}
                  >
                    Verified
                  </Checkbox>
                  <Flex align="center">
                    <Image src={iconsList.phone} />
                    <Text ml="5" fontSize="sm">
                      {result.phone}
                    </Text>
                  </Flex>
                  <Checkbox
                    isChecked={result.phoneVerify}
                    isDisabled={!result.phoneVerify}
                  >
                    Verified
                  </Checkbox>
                </Grid>
              </Box>
            </Flex>
            <Grid my="3" templateColumns="0.3fr 1.2fr" gap="1em">
              <TitleSubtitle
                title="Current"
                subtitle={result.currentDesignation}
              />
              <Text fontSize="sm" color="grey">
                Education
              </Text>
              <Stack>
                {result.education.map((each) => (
                  <Text key={each} fontSize="sm">
                    {each}
                  </Text>
                ))}
              </Stack>
              <TitleSubtitle
                title="Pre Loc"
                subtitle={result.previousLocation}
              />
              <TitleSubtitle
                title="Primary Skills"
                subtitle={result.skills.primary.join(", ")}
              />
              <TitleSubtitle
                title="Secondary Skills"
                subtitle={result.skills.secondary.join(", ")}
              />
            </Grid>
          </Flex>
        </Checkbox>
        <Divider />
        <Flex justify="space-between">
          <Text color="#41bb93">{`Similar ${result.similar.count}`}</Text>
          <Image size="32px" src={iconsList.chatBubble} />
        </Flex>
      </Box>
      <Stack
        p="1"
        isInline
        spacing="1em"
        justifyContent="flex-end"
        color="grey"
      >
        <Flex align="center">
          <Image src={iconsList.views} />
          <Text ml="3" fontSize="sm">
            {result.views}
          </Text>
        </Flex>
        <Flex align="center">
          <Image src={iconsList.downloads} />
          <Text ml="3" fontSize="sm">
            {result.downloads}
          </Text>
        </Flex>
        <Flex align="center">
          <Image src={iconsList.attach} />
          <Text ml="3" fontSize="sm">
            {result.resume}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="sm">{`Active: ${result.lastActive}`}</Text>
        </Flex>
        <Flex>
          <Text fontSize="sm">{`Modified: ${result.lastModified}`}</Text>
        </Flex>
      </Stack>
    </Box>
  );
}

export default ResultCard;
