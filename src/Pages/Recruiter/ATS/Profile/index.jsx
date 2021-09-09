import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/core";
import { userData } from "Data/Profile";
import React from "react";

const ShowCard = ({ title, children }) => (
  <Box
    backgroundColor="#eeeeee"
    p="5"
    m="3"
    borderRadius="0.5em"
    boxShadow="md"
  >
    <Text fontSize="lg">{title}</Text>
    {children}
  </Box>
);
const SkillChip = ({ skill }) => (
  <Text
    my="3"
    mx="2"
    color="#41bb93"
    padding="0.5em"
    border="2px solid #41bb93"
    backgroundColor="#cbe2da"
  >
    {skill}
  </Text>
);
const LabelDetail = ({ label, value }) => (
  <Box p="2">
    <Text color="grey">{label}</Text>
    {value !== null ? (
      <Text my="2">{value}</Text>
    ) : (
      <Button color="#41bb93" variant="link">{`Add ${label}`}</Button>
    )}
  </Box>
);
const AccomplishCard = ({ title, subtitle }) => (
  <Box my="3" p="3">
    <Flex justify="space-between">
      <Text fontSize="lg">{title}</Text>
    </Flex>
    <Text my="3" color="grey" fontSize="md">
      {subtitle}
    </Text>
    <Divider borderColor="black" />
  </Box>
);

const DetailCard = ({ title, subtitle, duration }) => (
  <Box p="2">
    <Text fontSize="md">{title}</Text>
    <Text my="1" color="grey">
      {subtitle}
    </Text>
    <Text color="grey">{duration}</Text>
    <Divider borderColor="black" width="90%" margin="1em auto" />
  </Box>
);

function ProfileTabWrapper() {
  return (
    <Box color="black">
      <ShowCard title="Headline">
        <Text mt="2" fontSize="md" color="grey">
          {userData.headline}
        </Text>
      </ShowCard>
      <ShowCard title="Profile Summary">
        <Text mt="3" fontSize="md" color="grey">
          {userData.profileSummary}
        </Text>
      </ShowCard>
      <ShowCard title="Key Skills">
        <Text my="2" fontSize="md">
          Primary
        </Text>
        <Flex flexWrap="wrap">
          {userData.skills.primary.map((each) => (
            <SkillChip key={each} skill={each} />
          ))}
        </Flex>
        <Text my="2" fontSize="md">
          Secondary
        </Text>
        <Flex flexWrap="wrap">
          {userData.skills.secondary.map((each) => (
            <SkillChip key={each} skill={each} />
          ))}
        </Flex>
      </ShowCard>
      <ShowCard title="Employment">
        <Box my="3">
          {userData.employment.map((each) => (
            <DetailCard
              key={each.title.split(" ").join("")}
              title={each.title}
              subtitle={each.company}
              duration={each.duration}
            />
          ))}
        </Box>
      </ShowCard>
      <ShowCard title="Education">
        <Box my="3">
          {userData.education.map((each) => (
            <DetailCard
              key={each.degree.split(" ").join("")}
              title={each.degree}
              subtitle={each.organisation}
              duration={
                each.type
                  ? `${each.completed} (${each.type})`
                  : `${each.completed}`
              }
            />
          ))}
        </Box>
      </ShowCard>
      <ShowCard title="IT Skills">
        <Text mt="3" color="grey">
          {userData.itSkills.skills}
        </Text>
      </ShowCard>
      <ShowCard title="Projects">
        {userData.projects.map((each) => (
          <Text color="grey" my="3" key={each.slice(0, 5)}>
            {each}
          </Text>
        ))}
      </ShowCard>
      <ShowCard title="Accomplishments">
        {userData.accomplishments.map((each) => (
          <AccomplishCard
            key={each.title.split(" ").join("")}
            title={each.title}
            subtitle={each.subTitle}
          />
        ))}
      </ShowCard>
      <ShowCard title="Desired Career Profile">
        <Grid templateColumns="repeat(2, 1fr)" gap="1em">
          <LabelDetail label="Industry" value={userData.desired.industry} />
          <LabelDetail
            label="Functional Area"
            value={userData.desired.functional}
          />
          <LabelDetail label="Role" value={userData.desired.role} />
          <LabelDetail label="Job Type" value={userData.desired.jobType} />
          <LabelDetail
            label="Employment Type"
            value={userData.desired.employType}
          />
          <LabelDetail label="Desired Shift" value={userData.desired.shift} />
          <LabelDetail
            label="Expected Salary"
            value={userData.desired.expectedSalary}
          />
          <LabelDetail
            label="Desired Location"
            value={userData.desired.location}
          />
          <LabelDetail
            label="Desired Industry"
            value={userData.desired.desiredIndustry}
          />
        </Grid>
      </ShowCard>
      <ShowCard title="Personal Details">
        <Grid templateColumns="repeat(2, 1fr)" gap="1em">
          <LabelDetail label="Date of Birth" value={userData.personal.dob} />
          <LabelDetail
            label="Permanent Address"
            value={userData.personal.perAdd}
          />
          <LabelDetail label="Gender" value={userData.desired.role} />
          <LabelDetail label="Area Pin Code" value={userData.personal.gender} />
          <LabelDetail
            label="Marital Status"
            value={userData.personal.areaPin}
          />
          <LabelDetail label="Hometown" value={userData.personal.homeTown} />
          <LabelDetail
            label="Passport Number"
            value={userData.personal.passportNo}
          />
          <LabelDetail label="Category" value={userData.personal.category} />
          <LabelDetail
            label="Work Permit for USA"
            value={userData.personal.permitUSA}
          />
          <LabelDetail
            label="Work Permit for Other Country"
            value={userData.personal.permitOtherCountry}
          />
          <Box gridColumn="1 / span 2">
            <LabelDetail
              label="Differently Abled"
              value={userData.personal.diffAbled}
            />
          </Box>
          <Stack>
            <Text color="grey">Languages</Text>
            {userData.personal.languages.map((each) => (
              <Text key={each.name} my="3">
                {each.name}
              </Text>
            ))}
          </Stack>
          <SimpleGrid minChildWidth="120px" spacing="1em">
            <Stack>
              <Text color="grey">Proficiency</Text>
              {userData.personal.languages.map((each) => (
                <Text key={each.name} my="3">
                  {each.proficiency}
                </Text>
              ))}
            </Stack>
            <SimpleGrid minChildWidth="40px" spacing="1em">
              <Stack align="center">
                <Text color="grey">Read</Text>
                {userData.personal.languages.map((each) => (
                  <Checkbox
                    variantColor="teal"
                    key={each.name}
                    my="3"
                    isChecked={each.read}
                  />
                ))}
              </Stack>
              <Stack align="center">
                <Text color="grey">Write</Text>
                {userData.personal.languages.map((each) => (
                  <Checkbox
                    variantColor="teal"
                    key={each.name}
                    my="3"
                    isChecked={each.write}
                  />
                ))}
              </Stack>
              <Stack align="center">
                <Text color="grey">Speak</Text>
                {userData.personal.languages.map((each) => (
                  <Checkbox
                    variantColor="teal"
                    key={each.name}
                    my="3"
                    isChecked={each.speak}
                  />
                ))}
              </Stack>
            </SimpleGrid>
          </SimpleGrid>
        </Grid>
      </ShowCard>
    </Box>
  );
}

export default ProfileTabWrapper;
