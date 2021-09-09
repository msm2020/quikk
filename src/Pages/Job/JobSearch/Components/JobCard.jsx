import { Box, Flex, Image, Stack, Text } from "@chakra-ui/core";
import React from "react";
import { Link } from "react-router-dom";
// import { ShareJobs } from ".";
import kebabCase from "lodash/kebabCase";
import formatDistance from "date-fns/formatDistance";
import LocationIcon from "static/assets/icons/Job/Location.png";
import ExperienceIcon from "static/assets/icons/Job/Experience.png";
import SalaryIcon from "static/assets/icons/Job/Salary.png";

const JobCard = ({
  job: {
    id,
    jobTitle,
    jobType,
    department,
    functionalArea,
    country,
    state,
    city,
    zipcode,
    employementType,
    candidateProfile,
    jobDescription,
    experience,
    minSalary,
    maxSalary,
    educationLevel,
    weeklyWorkingHours,
    skills,
    createdAt,
    isActive,
    recruiterId,
  },
}) => {
  return (
    <Link to={`/job/${id}/${kebabCase(jobTitle)}`}>
      <Box
        p="10"
        mt="3"
        mb="10"
        mr="10"
        backgroundColor="#eeeeee"
        rounded="0.5em"
      >
        <Flex justify="space-between">
          <Stack>
            <Text fontSize="lg">{jobTitle}</Text>
            <Text my="1" fontSize="md">
              {/* // TODO: Ask why company field is not included in the schema? */}
              {"company"}
            </Text>
          </Stack>
          {/* <ShareJobs links={job.links} /> */}
        </Flex>
        <Text my="1" fontSize="sm" color="grey">{`Posted ${formatDistance(
          new Date(createdAt),
          new Date()
        )} ago.`}</Text>
        <Flex my="5">
          <Flex mr="5" align="center">
            <Image mr="2" src={LocationIcon} />
            <Text fontSize="sm">{`${city}, ${country}`}</Text>
          </Flex>
          <Flex mr="5" align="center">
            <Image mr="2" src={ExperienceIcon} />
            <Text fontSize="sm">{experience?.min}</Text>
          </Flex>
          <Flex mr="5" align="center">
            <Image mr="2" src={SalaryIcon} />
            <Text fontSize="sm">{`${minSalary.lakhs} lacs ${minSalary.thousands} thousands`}</Text>
          </Flex>
        </Flex>
        <Stack my="5">
          <Text fontSize="md">Description</Text>
          <Text
            fontSize="sm"
            className="job-description"
            textAlign="justify"
            color="grey"
          >
            {jobDescription}
          </Text>
        </Stack>
        <Stack my="5">
          <Text fontSize="md">Keywords</Text>
          <Text color="grey">{skills.join(", ")}</Text>
        </Stack>
      </Box>
    </Link>
  );
};

export default JobCard;
