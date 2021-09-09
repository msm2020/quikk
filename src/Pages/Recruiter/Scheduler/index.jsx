import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";
import SchedulerModal from "./SchedulerModal";

export const nullObjectChecker = (demoObject) => {
  for (let eachKey in demoObject) {
    if (demoObject[eachKey] !== null && demoObject[eachKey] !== "") {
      return true;
    }
  }
  return false;
};

export const demoStateObj = {
  type: "",
  interviewer: null,
  companyName: "",
  designation: "",
  duration: null,
  date: new Date(),
  candidate: "",
  candidateMail: "",
  candidatePhone: "",
  note: "",
};

function Scheduler({ isOpen, onClose }) {
  const { setSchedule } = useStoreActions((actions) => ({
    setSchedule: actions.setSchedule,
  }));
  // const scheduleStateObj = useStoreState(
  //   (state) => state.recruiter.scheduleState
  // );

  const [stateObj, setStateObj] = useState(demoStateObj);

  // const { isOpen, onOpen, onClose } = useDisclosure();
  const onCloseSchedule = () => {
    setSchedule(stateObj);
    onClose();
  };
  return (
    //  <Flex p="5">
    //     <Button onClick={onOpen}>Schedule a Meeting</Button>
    <SchedulerModal
      isOpen={isOpen}
      onClose={onCloseSchedule}
      stateObj={stateObj}
      setStateObj={setStateObj}
    />
    //   <Box my="5">
    //     {nullObjectChecker(scheduleStateObj) && stateObj.interviewer && (
    //       <ScheduleStatus />
    //     )}
    //   </Box>
    //  </Flex>
  );
}

export default Scheduler;
