import {
  Box,
  Checkbox,
  Grid,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useToast,
  // useToast,
} from "@chakra-ui/core";
import React, { useContext, useEffect,Suspense, lazy } from "react";
import capitalize from "lodash/capitalize";
import { mutate } from "swr";


import {
  Chips,
  LabelDetail,
  DetailCard,
  QuiText,
  ProjectCard,
} from "./Components";
import { ViewProfileContext } from "../ViewProfile.context";
import Embed from "Components/Core/Embed";
import { descending } from "utils/sort";
import { formatDate } from "utils";
import EditCard from "../EditCard";
import api from "Http/httpService";
import SkillsCard from "./Components/SkillsCard";
import { useStoreActions, useStoreState } from "easy-peasy";
import {BACKEND_URL} from "../../../../../constants";

const DocIframe = lazy(() => import( "./doc.js"));

export const updateData = async (userData, closeModal) => {
  // const userData  = {...user, [name]: value};
  // const toast = useToast();
  try {
    mutate("/update/candidate", userData, false);
    const resp = await api.post("/update/candidate", userData);
    if (resp) {
      closeModal();
      mutate( BACKEND_URL + "/api/v1/fetch/candidate");
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
function ProfilePageContainer() {
  const user = useContext(ViewProfileContext);
  const toast = useToast();
  const isUpdated = useStoreState((state) => state.isUpdated);
  const setUpdateStatus = useStoreActions((actions) => actions.setUpdateStatus);

  useEffect(() => {
    if (isUpdated) {
      toast({
        title: "Update Successful",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      // setUpdateStatus(false)
    } else if (isUpdated === false) {
      toast({
        title: "Update Failed",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isUpdated, toast, setUpdateStatus]);

  // useEffect(() => {
  console.log(isUpdated);
  const docs = [
    { uri: "http://www.msnlabs.com/img/resume-sample.pdf" },
  ];

  // },[isUpdated])
  return (
    <Box pt="6">
      {/* Profile headline */}
      <EditCard
        category="basic"
        title="Headline"
        id="headline"
        onUpdate={updateData}
        defaultValue={user.resume_headline}
        name="resume_headline"
      >
        <QuiText.Secondary data-test-id="candidate-resume-headline">
          {user.resume_headline}
        </QuiText.Secondary>
      </EditCard>

      {/* Profile summary */}
      <EditCard
        category="basic"
        title="Profile Summary"
        id="profile"
        defaultValue={user.profile_summary}
        name="profile_summary"
      >
        <QuiText.Secondary>{user.profile_summary}</QuiText.Secondary>
      </EditCard>

      {/* Key skills */}
      <SkillsCard
        title="Key Skills"
        onUpdate={updateData}
        primarySkills={user.primary_skills}
        suggestedSkills={user.suggested_skills}
      >
        <QuiText.SecondaryTitle>Primary</QuiText.SecondaryTitle>
        <Chips.Container>
          {user.primary_skills.map((skill) => (
            <Chips.SkillChip key={skill} skill={skill} />
          ))}
        </Chips.Container>

        {/* Secondary skills */}
        <QuiText.SecondaryTitle>Secondary</QuiText.SecondaryTitle>
        <Chips.Container>
          {user.suggested_skills.map((skill) => (
            <Chips.SkillChip key={skill} skill={skill} />
          ))}
        </Chips.Container>
      </SkillsCard>

      {/* <EditCard title="Key Skills" id="skills">
        Primary skills
        <QuiText.SecondaryTitle>Primary</QuiText.SecondaryTitle>
        <Chips.Container>
          {user.primary_skills.map((skill) => (
            <Chips.SkillChip key={skill} skill={skill} />
          ))}
        </Chips.Container>

        Secondary skills
        <QuiText.SecondaryTitle>Secondary</QuiText.SecondaryTitle>
        <Chips.Container>
          {user.suggested_skills.map((skill) => (
            <Chips.SkillChip key={skill} skill={skill} />
          ))}
        </Chips.Container>
      </EditCard> */}

      {/* Professional details */}
      <EditCard
        title="Employment"
        id="employment"
        onUpdate={updateData}
        name="professional_details"
        category="employment"
      >
        <Box my="3">
          {user.professional_details
            .sort((a, b) => descending(a, b, "start_date"))
            .map((each) => (
              <DetailCard
                key={each.org_name}
                title={each.designation}
                subtitle={each.org_name}
                duration={`${formatDate(each.start_date)} - ${
                  Boolean(each.end_date) ? formatDate(each.end_date) : "Present"
                }`}
              />
            ))}
        </Box>
        {/* <ButtonLink text="Add Job Profile" /> */}
      </EditCard>

      {/* Educational details */}
      <EditCard
        title="Education"
        id="education"
        name="courses"
        category="education"
      >
        <Box my="3">
          {user.courses
            .sort((a, b) => descending(a, b, "passing_year"))
            .map((course) => (
              <DetailCard
                key={course.eduId}
                title={`${course.course}, ${course.specialization}`}
                subtitle={course.college_name}
                duration={`Year of graduation: ${course.passing_year}`}
              />
            ))}
        </Box>
        {/* <ButtonGroup className="button-link-group">
          <ButtonLink text="Add Post Graduation Details" />
          <ButtonLink text="Add 10th / 12th Details" />
        </ButtonGroup> */}
      </EditCard>

      {/*
       * IT Skills.
       * @TODO in the second phase.
       */}
      {/* <EditCard title="IT Skills" id="itSkills">
        <QuiText.Secondary>{userData.itSkills.skills}</QuiText.Secondary>
      </EditCard> */}

      {/* Projects */}
      <EditCard
        title="Projects"
        id="projects"
        name="projects"
        category="project"
      >
        {user.projects
          .sort((curr, next) => descending(curr, next, "start_date"))
          .map((project) => (
            <ProjectCard key={project.pj_id} data={project} />
          ))}
        {/* <ButtonLink text="Add project" /> */}
      </EditCard>

      {/*
       * Accomplishments.
       * @TODO in the second phase.
       */}
      {/* <EditCard title="Accomplishments" id="accomplishments">
        {userData.accomplishments.map((each) => (
          <AccomplishCard
            key={each.title.toString()}
            title={each.title}
            subtitle={each.subTitle}
          />
        ))}
      </EditCard> */}

      {/*
       * Desired career profile
       * @TODO in the second phase.
       */}
      {/* <EditCard title="Desired Career Profile" id="desired">
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
      </EditCard> */}

      {/* Personal details */}
      <EditCard title="Personal Details" id="personal" category="personal">
        <Grid templateColumns="repeat(2, 1fr)" gap="1em">
          {/* Date of birth */}
          <LabelDetail label="Date of Birth" value={formatDate(user.dob)} />

          {/* Permanent Address */}
          {/* <LabelDetail
            label="Permanent Address"
            value={userData.personal.perAdd}
          /> */}

          {/* Gender */}
          {user.gender && (
            <LabelDetail label="Gender" value={capitalize(user.gender)} />
          )}

          {/*
           * //! Not included in the schema.
           */}
          {/* <LabelDetail label="Area Pin Code" value={userData.personal.gender} /> */}

          {user.marital_status && (
            <LabelDetail
              label="Marital Status"
              value={capitalize(user.marital_status)}
            />
          )}

          {/* Hometown */}
          <LabelDetail label="Hometown" value={user.address.city} />

          {/*
           * //! Not included in the schema.
           */}
          {/* <LabelDetail
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
          /> */}

          {/* Is candidate physically challenged? */}
          <Box gridColumn="1 / span 2">
            <LabelDetail
              label="Differently Abled"
              value={capitalize(user.physically_chalngd.toString())}
            />
          </Box>

          {/* Language */}
          <Stack p="2">
            <Text color="grey">Languages</Text>
            {user.languages.map(({ language }) => (
              <Text key={language} my="3">
                {capitalize(language)}
              </Text>
            ))}
          </Stack>

          {/* Proficiency */}
          <SimpleGrid minChildWidth="120px" spacing="1em">
            <Stack>
              <Text color="grey">Proficiency</Text>
              {user.languages.map(({ language_id, proficiency }) => (
                <Text key={language_id} my="3">
                  {capitalize(proficiency)}
                </Text>
              ))}
            </Stack>

            {/* Can read? */}
            <SimpleGrid minChildWidth="40px" spacing="1em">
              <Stack align="center">
                <Text color="grey">Read</Text>
                {user.languages.map(({ language_id, read }) => (
                  <Checkbox
                    key={language_id}
                    isChecked={read}
                    variantColor="teal"
                    my="3"
                    isDisabled
                  />
                ))}
              </Stack>

              {/* Can write? */}
              <Stack align="center">
                <Text color="grey">Write</Text>
                {user.languages.map(({ language_id, write }) => (
                  <Checkbox
                    variantColor="teal"
                    key={language_id}
                    my="3"
                    isChecked={write}
                    isDisabled
                  />
                ))}
              </Stack>

              {/* Can speak? */}
              <Stack align="center">
                <Text color="grey">Speak</Text>
                {user.languages.map(({ language_id, speak }) => (
                  <Checkbox
                    variantColor="teal"
                    key={language_id}
                    my="3"
                    isChecked={speak}
                    isDisabled
                  />
                ))}
              </Stack>
            </SimpleGrid>
          </SimpleGrid>
        </Grid>
      </EditCard>

      {/* Resume viewer */}
      <EditCard title="Resume" id="resume" category="resume">
        <Box className="resume-viewer">
          {user.resume !== "null" && user.resume !== "" ? (
            <Skeleton isLoaded={!!user.resume}>
              <Box m="0 auto" width="100%" height="100%">
              <Suspense fallback={<div>Loading...</div>}>
              < DocIframe source={user.resume&&user.resume} />
              </Suspense>


              </Box>
            </Skeleton>
          ) : (
            <>
              <Text my="2">
                Upload resume & multiply the chances of you getting hired.
              </Text>
              {/* <ButtonLink text="Add Resume" my="2" /> */}
            </>
          )}
        </Box>
      </EditCard>
    </Box>
  );
}

export default ProfilePageContainer;
