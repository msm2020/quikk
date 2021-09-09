import {
  Box,
  Button,
  Flex,
  IconButton,
  RadioButtonGroup,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";
import ReactSelect from "react-select";
import AddCandidate from "Components/Recruiter/AddCandidate/AddCandidate";
import DragDrop from "Components/DragDrop";
import AdditionalOptions from "./AdditionalOptions";
import { jobsData } from "Data/Recruiter/ATS";

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;
  return (
    <Button
      ref={ref}
      variantColor={isChecked ? "teal" : "gray"}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  );
});

const RoleIcon = ({ name }) => {
  const nameArray = name.split(" ");
  const initials = nameArray.map((each) => each.charAt(0)).join("");
  return (
    <Box
      mx="1"
      backgroundColor="#41bb93"
      color="white"
      py="2"
      px={initials.length > 1 ? "2" : "3"}
      borderRadius="50%"
    >
      <Text fontSize="sm">{initials}</Text>
    </Box>
  );
};
const TeamMembers = ["Anurag Verma", "Susan"];

const sortOptions = [
  { value: "none", label: "No Sorting" },
  { value: "name", label: "Name" },
  { value: "evaluation", label: "Evaluation" },
  { value: "dateCreated", label: "Date Created" },
  { value: "new", label: "New" },
];

function getObj(jobId) {
  // return jobsData.filter(each => each.id === jobId)
  for (let i = 0; i < jobsData.length; i++) {
    if (jobsData[i].id === jobId) {
      return jobsData[i];
    }
  }
}

function ATSWrapper({ jobId }) {
  // const { jobId } = useParams();
  const jobObj = getObj(Number(jobId));
  return (
    // jobObj && (
    <Box backgroundColor="#f0f4f7" height="100vh">
      <Flex
        p="5"
        justify="space-between"
        align="center"
        backgroundColor="white"
      >
        <Flex align="center">
          <Text fontSize="xl" fontWeight="600">
            {jobObj.designation}
          </Text>
          <Text color="grey" ml="5">
            {jobObj.location}
          </Text>
        </Flex>
        <Stack isInline align="center">
          <IconButton
            size="sm"
            icon="add"
            border="1px dashed grey"
            borderRadius="50%"
          />
          {TeamMembers.map((each) => (
            <RoleIcon key={each} name={each} />
          ))}
        </Stack>
      </Flex>
      <Flex justifyContent="space-between" m="4">
        <RadioButtonGroup isInline spacing="0" defaultValue="qualified">
          <CustomRadio value="qualified" roundedRight="0">
            Qualified
          </CustomRadio>
          <CustomRadio value="disqualified" roundedLeft="0">
            Disqualified
          </CustomRadio>
        </RadioButtonGroup>
        <Stack isInline align="center" spacing="4">
          <AddCandidate />
          <Box maxWidth="120px" width="100%">
            <ReactSelect options={sortOptions} placeholder="Sort By" />
          </Box>
          <AdditionalOptions />
        </Stack>
      </Flex>
      {/* ATS */}

      <DragDrop />
    </Box>
  );
}

export default ATSWrapper;
