import {
  Box,
  Button,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/core";
import EditorContainer from "Components/Editor";
import { roleDetails } from "Data/Recruiter/Settings";
import React, { useState } from "react";
import ReactSelect from "react-select";

const rolesFilter = [
  { value: "admin", label: "Administrator" },
  { value: "corporateRecruit", label: "Corporate Recruiter" },
  { value: "hiringManager", label: "Hiring Manager" },
];

const PermissionChip = ({ eachProp }) => (
  <Box
    p="2"
    display="flex"
    boxShadow="sm"
    backgroundColor="#eeeeee"
    borderRadius="0.5em"
  >
    <Text>{eachProp.label}</Text>
  </Box>
);

const ShowCategory = ({ categoryObj }) => {
  const ObjKeys = Object.keys(categoryObj);
  return (
    <Box my="2">
      {ObjKeys.map((each) => {
        return each === "core" ? (
          <Flex align="flex-start" my="1">
            {categoryObj[each].map((eachValue) => (
              <PermissionChip key={eachValue.value} eachProp={eachValue} />
            ))}
          </Flex>
        ) : (
          <Box p="1">
            <Text>{each.charAt(0).toUpperCase() + each.slice(1)}</Text>
            <Flex align="flex-start" p="1">
              {categoryObj[each].map((eachValue) => (
                <PermissionChip key={eachValue.value} eachProp={eachValue} />
              ))}
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

const ShowDetails = ({ roleDets }) => {
  const { description, roleDetails } = roleDets;
  const roleDetKeys = Object.keys(roleDetails);
  return (
    <Box p="5" border="1px solid grey" borderRadius="0.5em">
      <Text my="2" color="grey">
        {description}
      </Text>
      {roleDetKeys.map((each) => (
        <Box key={each}>
          <Text fontSize="md" fontWeight="600">
            {each.charAt(0) + each.slice(1)}
          </Text>
          <ShowCategory categoryObj={roleDetails[each]} />
        </Box>
      ))}
    </Box>
  );
};

const FirstTab = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <Box>
      <FormControl>
        <FormLabel fontWeight="600">Choose Role</FormLabel>
        <Text color="grey">
          Choose a role for the team members you want to invite.
        </Text>
        <ReactSelect options={rolesFilter} defaultValue="admin" />
      </FormControl>
      <Box my="3">
        <Button
          onClick={toggleShow}
          size="sm"
          variant="link"
          leftIcon={show ? "chevron-up" : "chevron-down"}
        >
          Show role details
        </Button>
        <Collapse mt="4" isOpen={show}>
          <ShowDetails roleDets={roleDetails[0]} />
        </Collapse>
      </Box>
      <Box>
        <Text fontSize="md" fontWeight="600">
          Send invite to
        </Text>
        <Text color="grey" my="1">
          New members will receive an email giving them access to Quiklyy with
          the permissions granted for the role selected above.
        </Text>
        <Textarea placeholder="name@company.com" />
      </Box>
    </Box>
  );
};

const SecondTab = () => (
  <Box>
    <Text fontSize="md" my="2" fontWeight="600">
      Customize invitation message
    </Text>
    <EditorContainer />
  </Box>
);
function AddTeamMember() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState(0);
  const handleSubmit = () => {
    if (index > 0) {
      onClose();
    } else if (index === 0) {
      setIndex(index + 1);
    }
  };
  return (
    <Box>
      <Button onClick={onOpen} variantColor="teal" size="sm" leftIcon="add">
        New Team Member
      </Button>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite new team members</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs index={index} onChange={(index) => setIndex(index)}>
              <TabList display="none">
                <Tab>Step 1</Tab>
                <Tab>Step 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <FirstTab />
                </TabPanel>
                <TabPanel>
                  <SecondTab />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            {index > 0 && (
              <Button
                mr="3"
                alignSelf="left !important"
                variant="ghost"
                variantColor="grey"
                onClick={() => setIndex(index - 1)}
              >
                Back
              </Button>
            )}
            <Button variant="ghost" variantColor="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor="teal" onClick={handleSubmit}>
              {index > 0 ? "Submit" : "Proceed"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default AddTeamMember;
