import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";

function TitleCard({ jobPost, jobData }) {
  return (
    <Box color="white" marginTop="65.6px" p="10" backgroundColor="#293c43">
      {/* Title */}
      <Text fontSize="2xl">{jobData.jobTitle}</Text>

      {/*
       * Company that posted this job.
       * //! Missing in the API.
       */}
      <Text my="2" fontSize="lg">
        {jobData.companyName}
      </Text>

      {/* Location */}
      <Flex my="3">
        <Flex align="center" mr="3">
          <Image mr="2" src={jobPost.locationIcon} />
          <Text>{jobPost.location}</Text>
        </Flex>

        {/* Experience */}
        <Flex align="center" mr="3" isInline>
          <Image mr="2" src={jobPost.expIcon} />
          <Text>{`${jobData.experience.min} - ${jobData.experience.min} years`}</Text>
        </Flex>

        {/* Salary range */}
        <Flex align="center" mr="3" isInline>
          <Image mr="2" src={jobPost.salaryIcon} />
          <Text>{`${jobData.minSalary.lakhs} - ${jobData.maxSalary.lakhs} lakhs ${jobData.minSalary.currency} per annum`}</Text>
        </Flex>
      </Flex>

      {jobData.jobType === "WALKIN" ? (
        <>
          <Stack isInline>
            <Text color="#ff8227">Walk In Time & Venue - </Text>
            {/*
             * Walkin Avenue
             * //! Missing from the API.
             */}
            <Text color="white">{` ${jobPost.inDate}, ${jobPost.inTime} onwards`}</Text>
          </Stack>
          <Grid
            templateColumns="repeat(auto-fit, minmax(120px, 1fr))"
            gap="1em"
          >
            <Box>
              <Flex direction="column">
                <Stack isInline>
                  <Text>Venue - </Text>
                  <Text>{jobPost.venue}</Text>
                </Stack>
                <Stack isInline>
                  <Text>Date - </Text>
                  <Text>{jobPost.inDate}</Text>
                </Stack>
                <Stack isInline>
                  <Text>Timing - </Text>
                  <Text>{`${jobPost.fromTime} to ${jobPost.toTime}`}</Text>
                </Stack>
                <Stack isInline>
                  <Text>Contact Persons - </Text>
                  <Text>{jobPost.contact.join(", ")}</Text>
                </Stack>
              </Flex>
            </Box>
            <Stack alignSelf="center">
              <SimpleGrid minChildWidth="120px" spacing="1em">
                <Button
                  backgroundColor="#41bb93"
                  _hover={{ backgroundColor: "#41bb93" }}
                >
                  Attending
                </Button>
                <Button backgroundColor="white" color="black">
                  Missing
                </Button>
              </SimpleGrid>
              <Text fontSize="sm" color="grey">
                Express Interest to recruiter and also get a reminder of the
                walk-in
              </Text>
            </Stack>
            <Stack align="center" justifyContent="center">
              <Text fontSize="sm" color="grey">
                Job Views: 20
              </Text>
              <Text fontSize="sm" color="grey">
                Job Applicants: 100
              </Text>
              <Text fontSize="sm" color="grey">
                Posted 1 hour ago
              </Text>
            </Stack>
          </Grid>
        </>
      ) : (
        <Flex justify="space-between" mt="10">
          <Button
            backgroundColor="#41bb93"
            _hover={{ backgroundColor: "#41bb93" }}
            size="md"
          >
            Apply
          </Button>
          <SimpleGrid minChildWidth="60px" spacing="1em">
            <Text fontSize="sm" color="grey">
              Job Views: 20
            </Text>
            <Text fontSize="sm" color="grey">
              Job Applicants: 100
            </Text>
            <Text fontSize="sm" color="grey">
              Posted 1 hour ago
            </Text>
          </SimpleGrid>
        </Flex>
      )}
    </Box>
  );
}

export default TitleCard;
