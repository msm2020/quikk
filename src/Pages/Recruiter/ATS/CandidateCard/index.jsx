import {
  Box,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Profile from "../../../../static/assets/other/profile.jpg";
import ProfileTabWrapper from "../Profile";
import ResumeTabWrapper from "../Resume";
import EmailTabWrapper from "../Email";
import SchedulerTabWrapper from "../Scheduler";
import Scheduler from "Pages/Recruiter/Scheduler";
import CommentsTabWrapper from "../Comments";
import ActivityTabWrapper from "../Activity";
import DisqualifyCandidateButton from "../DisqualifyCandidate";
import ShareCandidate from "Components/Recruiter/ShareCandidate/ShareCandidate.Menu";

export const RoleIcon = ({ name }) => {
  const nameArray = name.split(" ");
  const initials = nameArray.map((each) => each.charAt(0)).join("");
  return (
    <Box
      mx="1"
      backgroundColor="#f0f4f7"
      color="#41bb93"
      py="2"
      px={initials.length > 1 ? "2" : "3"}
      borderRadius="50%"
    >
      <Text fontSize="xs">{initials}</Text>
    </Box>
  );
};

const SchedulerWrap = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton icon="calendar" variant="ghost" size="sm" onClick={onOpen} />
      <Scheduler isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const CandidateModal = ({ isOpen, onClose, tabIndex }) => {
  const [index, setIndex] = useState(tabIndex);

  useEffect(() => {
    setIndex(tabIndex);
  }, [tabIndex]);

  console.log(index, tabIndex);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p="0">
          <Box className="candidate-modal" p="5" color="white">
            <Flex align="center">
              <Image src={Profile} size="90px" rounded="full" />
              <Stack ml="4">
                <Text fontSize="xl" fontWeight="550">
                  Anurag Verma
                </Text>
                <Text>UI / UX Designer</Text>
              </Stack>
            </Flex>
            <SimpleGrid my="4" minChildWidth="120px" spacing="2em">
              <Stack>
                <Flex align="center">
                  <Icon name="email" />
                  <Text fontSize="sm" ml="3">
                    anuragverma123@gmail.com
                  </Text>
                </Flex>
                <Flex>
                  <Icon name="phone" />
                  <Text fontSize="sm" ml="3">
                    +91 12345 67890
                  </Text>
                </Flex>
              </Stack>
              <FormControl>
                <FormLabel fontSize="sm" color="grey">
                  Location
                </FormLabel>
                <Text fontSize="md">Gurgaon</Text>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm" color="grey">
                  Experience
                </FormLabel>
                <Text fontSize="md">2+ Years</Text>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm" color="grey">
                  Expected Offer
                </FormLabel>
                <Text fontSize="md">17+ Lakhs</Text>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm" color="grey">
                  Notice Period
                </FormLabel>
                <Text fontSize="md">30 Days</Text>
              </FormControl>
            </SimpleGrid>
          </Box>
          <Box p="3">
            <Tabs
              variantColor="teal"
              tabIndex={index}
              onChange={(index) => setIndex(index)}
              isFitted
              variant="soft-rounded"
            >
              <TabList>
                <Tab tabIndex={0}>Profile</Tab>
                <Tab tabIndex={1}>Resume</Tab>
                <Tab tabIndex={2}>Scheduler</Tab>
                <Tab tabIndex={3}>Email</Tab>
                <Tab tabIndex={4}>Comments</Tab>
                <Tab tabIndex={5}>Share</Tab>
                <Tab tabIndex={6}>Activity</Tab>
              </TabList>
              <TabPanels>
                <TabPanel px="2" color="black">
                  <ProfileTabWrapper />
                </TabPanel>
                <TabPanel px="2" color="black">
                  <ResumeTabWrapper />
                </TabPanel>
                <TabPanel px="2" color="black">
                  <SchedulerTabWrapper />
                </TabPanel>
                <TabPanel px="2" color="black">
                  <EmailTabWrapper />
                </TabPanel>
                <TabPanel px="2" color="black">
                  <CommentsTabWrapper />
                </TabPanel>
                <TabPanel px="2" color="black">
                  <EmailTabWrapper />
                </TabPanel>
                <TabPanel px="2" color="black">
                  <ActivityTabWrapper />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

function CandidateCard({ name, phone, email, borderColor, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setIndex] = useState(0);

  // useEffect(() => {
  //     setIndex(tabIndex);
  // }, [tabIndex]);

  // console.log(tabIndex);

  return (
    <Box
      p="2"
      m="2"
      className="candidate-card"
      backgroundColor="white"
      borderRadius="0.5em"
      boxShadow="lg"
      outline="none"
      borderColor={borderColor}
    >
      <Flex align="center" cursor="pointer">
        <RoleIcon name="Yudhbir Singh" />
        <Stack ml="3" spacing="1">
          <Text fontWeight="550" onClick={onOpen}>
            {name}
          </Text>
          <Flex direction="column">
            <Text fontSize="sm" color="grey">
              {email}
            </Text>
            <Text fontSize="sm" color="grey">
              {phone}
            </Text>
          </Flex>
        </Stack>
      </Flex>
      <SimpleGrid minChildWidth="80px" spacing="1em" my="3">
        <Text fontSize="xs" color="grey">
          <b>Expected CTC:</b> 25 lakh
        </Text>
        <Text fontSize="xs" color="grey">
          <b>Current CTC:</b> 25 lakh
        </Text>
        <Text fontSize="xs" color="grey">
          <b>Notice Period:</b> 1 month
        </Text>
      </SimpleGrid>
      <Flex
        justify="space-between"
        display="none"
        className="card-button-group"
      >
        <ButtonGroup>
          <ShareCandidate />
          <IconButton
            onClick={(e) => {
              setIndex(3);
              onOpen(e);
            }}
            variant="ghost"
            size="sm"
            icon="email"
          />
          <IconButton variant="ghost" size="sm" icon="chat" />
          <SchedulerWrap />
        </ButtonGroup>
        <DisqualifyCandidateButton />
      </Flex>
      <CandidateModal isOpen={isOpen} onClose={onClose} tabIndex={tabIndex} />
    </Box>
  );
}

export default CandidateCard;
