import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import { useStoreState } from "easy-peasy";
import Scheduler from "Pages/Recruiter/Scheduler";
import React from "react";
import NotChosen from "static/assets/SVGs/NotChosen";

export const nullObjectChecker = (demoObject) => {
  for (let eachKey in demoObject) {
    if (demoObject[eachKey] !== null && demoObject[eachKey] !== "") {
      return true;
    }
  }
  return false;
};

export const interviewType = {
  f2f: "Face 2 Face Interview",
  online: "Online Interview",
};

const InterviewerChip = ({ label }) => (
  <Text mr="2" p="2" backgroundColor="#eeeeee" borderRadius="0.5em">
    {label}
  </Text>
);

const ModifiedFormControl = ({ label, value, ...rest }) => (
  <FormControl my="2" {...rest}>
    <FormLabel fontWeight="600">{label}</FormLabel>
    <Text color="grey">{value}</Text>
  </FormControl>
);

function SchedulerTabWrapper() {
  const scheduleStateObj = useStoreState(
    (state) => state.recruiter.scheduleState
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    type,
    interviewer,
    duration,
    companyName,
    designation,
    candidate,
    candidateMail,
    candidatePhone,
    note,
    date,
  } = scheduleStateObj;
  return (
    <Box
      p="5"
      m="3"
      backgroundColor="#eeeeee"
      borderRadius="1em"
      boxShadow="md"
    >
      {nullObjectChecker(scheduleStateObj) ? (
        <>
          <Text fontSize="xl" fontWeight="600" mb="3">
            {interviewType[type]}
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap="1em">
            <ModifiedFormControl
              label="Date & Time"
              value={new Date(date).toString()}
            />
            <FormControl my="2">
              <FormLabel>Duration</FormLabel>
              {duration && <Text>{duration.label}</Text>}
            </FormControl>
            <Stack my="2" gridColumn="span 2">
              <FormLabel fontWeight="600">Interviewer: </FormLabel>
              <Stack isInline>
                {Array.isArray(interviewer) &&
                  interviewer.map((each) => (
                    <InterviewerChip key={each.value} label={each.label} />
                  ))}
              </Stack>
            </Stack>
            <ModifiedFormControl label="Company Name" value={companyName} />
            <ModifiedFormControl label="Designation" value={designation} />
            <ModifiedFormControl
              label="Candidate Name"
              value={candidate}
              gridColumn="span 2"
            />
            <ModifiedFormControl
              label="Candidate Email"
              value={candidateMail}
            />
            <ModifiedFormControl
              label="Candidate Phone"
              value={candidatePhone}
            />
            <ModifiedFormControl label="Note" value={note} />
          </Grid>
        </>
      ) : (
        <Stack align="center">
          <NotChosen height="30vh" width="30vw" />
          <Text my="2" fontSize="xl" fontWeight="600">
            No Schedule Found
          </Text>
          <Button
            leftIcon="calendar"
            onClick={onOpen}
            variantColor="teal"
            my="2"
          >
            Schedule
          </Button>
          <Scheduler isOpen={isOpen} onClose={onClose} />
        </Stack>
      )}
    </Box>
  );
}

export default SchedulerTabWrapper;
