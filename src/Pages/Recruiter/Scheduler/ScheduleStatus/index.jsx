import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import { useStoreState } from "easy-peasy";
import React from "react";

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

function ScheduleStatus() {
  const scheduleStateObj = useStoreState(
    (state) => state.recruiter.scheduleState
  );
  const { isOpen, onClose, onOpen } = useDisclosure();
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
    <>
      <Button onClick={onOpen} size="sm">
        View Schedule
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="0.5em">
          <ModalHeader>{interviewType[type]}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Edit
            </Button>
            <Button variantColor="red" onClick={onClose}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ScheduleStatus;
