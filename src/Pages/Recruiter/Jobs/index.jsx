import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  RadioButtonGroup,
  Stack,
  Text,
} from "@chakra-ui/core";
import { jobsData } from "Data/Recruiter/ATS";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { useHistory, useParams } from "react-router-dom";
import CreateJobsWrapper from "./CreateJobs";
import ATSWrapper from "../ATS";

const jobOptions = [
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
];

const JobCard = ({ eachJob, history }) => (
  <Box
    backgroundColor="white"
    cursor="pointer"
    onClick={() => history.push(`/recruiter/jobs/${eachJob.id}`)}
    borderRadius="0.25em"
    p="5"
    m="3"
    boxShadow="md"
  >
    <Flex align="center" justifyContent="space-between">
      <Text fontWeight="600" fontSize="md" mb="2">
        {eachJob.designation}
      </Text>
      <Text color="grey">{eachJob.posted}</Text>
    </Flex>
    <Flex align="center" justifyContent="space-between">
      <Text color="grey">{eachJob.location}</Text>
      <Box maxWidth="140px" width="100%">
        <ReactSelect options={jobOptions} defaultValue={eachJob.jobState} />
      </Box>
    </Flex>
  </Box>
);

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

function JobsWrapper() {
  const history = useHistory();
  const { jobId } = useParams();
  const url = "/recruiter/jobs";
  const [path, setPath] = useState("");

  useEffect(() => {
    let ChangedPath = history.location.pathname.replace(url, "");
    if (ChangedPath !== "") {
      let removedSlash = ChangedPath.replace("/", "");
      if (removedSlash === "create") {
        setPath("create");
      } else {
        setPath("ats");
      }
    } else if (history.location.pathname === url) {
      setPath("");
    }
  }, [history.location.pathname, url]);
  return (
    <Box>
      {path === "create" || path === "ats" ? (
        path === "ats" && jobId ? (
          <ATSWrapper jobId={jobId} />
        ) : (
          <CreateJobsWrapper />
        )
      ) : (
        path === "" && (
          <Box p="5" backgroundColor="#f0f4f7" height="calc(100vh - 180px)">
            <Flex align="center" justify="space-between">
              <Flex my="5">
                <RadioButtonGroup
                  spacing="0"
                  isInline
                  defaultValue="open"
                  onChange={(val) => val}
                >
                  <CustomRadio value="open" roundedRight="0">
                    Open
                  </CustomRadio>
                  <CustomRadio value="close" rounded="0">
                    Close
                  </CustomRadio>
                  <CustomRadio value="all" roundedLeft="0">
                    All
                  </CustomRadio>
                </RadioButtonGroup>
                <InputGroup ml="2">
                  <InputLeftElement children={<Icon name="search" />} />
                  <Input placeholder="Search" variant="flushed" />
                </InputGroup>
              </Flex>
              <ButtonGroup isInline>
                <Button
                  leftIcon="add"
                  variantColor="teal"
                  onClick={() => history.push("/recruiter/jobs/create")}
                >
                  Create New
                </Button>
                <Button leftIcon="up-down">Reorder</Button>
              </ButtonGroup>
            </Flex>
            <Stack maxWidth="920px" mx="auto">
              {jobsData.map((eachJob) => (
                <JobCard history={history} eachJob={eachJob} key={eachJob.id} />
              ))}
            </Stack>
          </Box>
        )
      )}
    </Box>
  );
}

export default JobsWrapper;
