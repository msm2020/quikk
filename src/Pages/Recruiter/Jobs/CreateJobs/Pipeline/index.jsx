import {
  Box,
  Button,
  Flex,
  FormLabel,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";
import DetailCard from "../DetailCard";
import "./style.scss";

export const stageDetails = [
  {
    name: "Applied",
    value: "applied",
    color: "#D2444D",
    fixed: true,
  },
  {
    name: "Sourced",
    value: "sourced",
    color: "#88C81F",
    fixed: true,
  },
  {
    name: "Screening",
    value: "applied",
    color: "#398AE7",
    fixed: false,
  },
  {
    name: "Telephonic 1",
    value: "applied",
    color: "#A35910",
    fixed: false,
  },
  {
    name: "Telephonic 2",
    value: "applied",
    color: "#95E77D",
    fixed: false,
  },
  {
    name: "Technical Interview",
    value: "applied",
    color: "#DB780A",
    fixed: false,
  },
  {
    name: "Assignment",
    value: "applied",
    color: "#A8A63D",
    fixed: false,
  },
  {
    name: "HR Round",
    value: "applied",
    color: "#07FC28",
    fixed: false,
  },
  {
    name: "Offer Given",
    value: "applied",
    color: "#082027",
    fixed: false,
  },
  {
    name: "Hired",
    value: "applied",
    color: "#BE5235",
    fixed: false,
  },
  {
    name: "Reject",
    value: "applied",
    color: "#FDE7E4",
    fixed: false,
  },
];

const ShowStage = ({ name, color, fixed }) => (
  <Box border="1px solid #eeeeee" p="3" m="3">
    <Flex justify="space-between">
      <Stack isInline>
        <span style={{ backgroundColor: color }} className="rounded-square" />
        <Text mx="3">{name}</Text>
      </Stack>
      <Stack isInline>
        <Icon name="edit" />
        {fixed ? "" : <Icon name="delete" />}
      </Stack>
    </Flex>
  </Box>
);

// const EditStage = () => (
//     <Box border="1px solid #eeeeee" borderRadius="0.5em" p="5" my="3">

//         <SimpleGrid minChildWidth="120px" spacing="1em" alignItems="flex-end">
//             <FormControl isRequired>
//                 <FormLabel fontWeight="600">Stage Name</FormLabel>
//                 <Input placeholder="Type stage name.." />
//             </FormControl>
//             <FormControl>
//                 <FormLabel>Type</FormLabel>
//                 <Select>
//                     <option value="apply">Apply</option>
//                     <option value="apply">Phone Screen</option>
//                     <option value="apply">Interview</option>
//                     <option value="apply">Evaluation</option>
//                 </Select>
//             </FormControl>
//             <FormControl>
//                 <Select placeholder="Time Limit">
//                     <option value="apply">Apply</option>
//                     <option value="apply">Phone Screen</option>
//                     <option value="apply">Interview</option>
//                     <option value="apply">Evaluation</option>
//                 </Select>
//             </FormControl>
//         </SimpleGrid>
//         <Button my="2" leftIcon="add">Action</Button>
//         <Divider />
//         <Flex justify="space-between">
//             <Button leftIcon="delete">Delete</Button>
//             <Stack isInline>
//                 <Button variant="ghost">Cancel</Button>
//                 <Button variantColor="teal">Save</Button>
//             </Stack>
//         </Flex>
//     </Box>
// );

function PipelineWrapper() {
  return (
    <Box py="5">
      <DetailCard>
        <FormLabel fontSize="lg" fontWeight="600">
          Pipeline
        </FormLabel>
        <Text color="grey">
          Manage candidates by setting up a hiring pipeline for your job.{" "}
          <Link color="teal !important" href="www.google.com">
            Learn More
          </Link>
        </Text>
        {stageDetails.map((each) => (
          <ShowStage
            fixed={each.fixed}
            key={each.name}
            name={each.name}
            color={each.color}
          />
        ))}
        {/* <EditStage /> */}
        <Button my="5" leftIcon="add" width="100%" border="2px dashed grey">
          Add New
        </Button>
      </DetailCard>
    </Box>
  );
}

export default PipelineWrapper;
