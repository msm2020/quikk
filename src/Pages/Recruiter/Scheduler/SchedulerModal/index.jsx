import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  Grid,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Box,
} from "@chakra-ui/core";
import FormDatePicker from "Components/Form/FormDatePicker";
import ReactSelect from "react-select";
import { useStoreActions } from "easy-peasy";

const ModifiedFormControl = ({ name, value, onChange, ...rest }) => {
  return (
    <FormControl mb="3" {...rest}>
      <FormLabel>{name}</FormLabel>
      <Input value={value} onChange={onChange} placeholder={`Enter ${name}`} />
    </FormControl>
  );
};

export const interviewerOptions = [
  { value: "anuragVerma", label: "Anurag Verma" },
  { value: "susan", label: "Susan" },
  { value: "simran", label: "Simran" },
];

export const durationOptions = [
  { value: "15m", label: "15 minutes" },
  { value: "30m", label: "30 minutes" },
  { value: "45m", label: "45 minutes" },
  { value: "1h", label: "1 hour" },
];

function SchedulerModal({ stateObj, setStateObj, isOpen, onClose }) {
  const { setScheduleDate } = useStoreActions((actions) => ({
    setScheduleDate: actions.setScheduleDate,
  }));
  const [date, setDate] = useState(new Date());
  const handleChange = (value, prop) => {
    let newStateObj = JSON.parse(JSON.stringify(stateObj));
    newStateObj[prop] = value;
    setStateObj(newStateObj);
  };
  const handleInterviewer = (selected) => {
    let newStateObj = JSON.parse(JSON.stringify(stateObj));
    newStateObj["interviewer"] = selected;
    setStateObj(newStateObj);
  };
  const handleDuration = (selectedDur) => {
    let newStateObj = JSON.parse(JSON.stringify(stateObj));
    newStateObj["duration"] = selectedDur;
    setStateObj(newStateObj);
  };
  const sendOutputState = () => {
    let newStateObj = JSON.parse(JSON.stringify(stateObj));
    newStateObj.date = date;
    setStateObj(newStateObj);
    setScheduleDate(date);
    onClose();
  };
  // console.log(scheduleStateObj)
  // console.log(date);

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="0.5em">
        <ModalHeader>Schedule a Meeting</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            mb="3"
            boxShadow="md"
            p="2"
            border="2px solid #eeeeee"
            borderRadius="0.5em"
          >
            <Flex>
              <Text mr="3" fontWeight="600">
                Date & Time:
              </Text>
              <FormDatePicker
                backgroundColor="#f0f4f7"
                dateFormat="dd/MM/yyyy hh:mm aa"
                date={date}
                setDate={setDate}
                showTimeSelect
              />
            </Flex>
            <FormControl my="3">
              <ReactSelect
                onChange={handleDuration}
                placeholder="Duration"
                options={durationOptions}
              />
            </FormControl>
          </Box>
          <Grid
            borderRadius="0.5em"
            gap="1em"
            templateColumns="repeat(2, 1fr)"
            backgroundColor="#f0f4f7"
            p="5"
          >
            <FormControl gridColumn="span 2">
              <Select
                placeholder="Type of Interview"
                value={stateObj.type}
                onChange={(e) => handleChange(e.target.value, "type")}
              >
                <option value="f2f">Face 2 Face Interview</option>
                <option value="online">Online Interview</option>
              </Select>
            </FormControl>
            <FormControl my="3" gridColumn="span 2">
              <FormLabel>Interviewer</FormLabel>
              <ReactSelect
                placeholder="Interviewer"
                options={interviewerOptions}
                value={stateObj.interviewer}
                onChange={handleInterviewer}
                isMulti
              />
            </FormControl>
            <ModifiedFormControl
              name="Company Name"
              value={stateObj.companyName}
              onChange={(e) => handleChange(e.target.value, "companyName")}
            />
            <ModifiedFormControl
              name="Designation"
              value={stateObj.designation}
              onChange={(e) => handleChange(e.target.value, "designation")}
            />
            <ModifiedFormControl
              gridColumn="span 2"
              name="Candidate Name"
              value={stateObj.candidate}
              onChange={(e) => handleChange(e.target.value, "candidate")}
            />
            <ModifiedFormControl
              name="Email"
              value={stateObj.candidateMail}
              onChange={(e) => handleChange(e.target.value, "candidateMail")}
            />
            <ModifiedFormControl
              name="Phone Number"
              value={stateObj.candidatePhone}
              onChange={(e) => handleChange(e.target.value, "candidatePhone")}
            />
            <FormControl gridColumn="span 2">
              <FormLabel>Note</FormLabel>
              <Textarea
                placeholder="Enter Note..."
                value={stateObj.note}
                onChange={(e) => handleChange(e.target.value, "note")}
              />
            </FormControl>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost">Cancel</Button>
          <Button
            ml="4"
            variantColor="teal"
            onClick={() => sendOutputState(stateObj)}
          >
            Schedule
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SchedulerModal;
