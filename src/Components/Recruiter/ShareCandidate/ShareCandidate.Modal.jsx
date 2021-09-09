import React from "react";
import {
  Box,
  IconButton,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Grid,
  Input,
  FormLabel,
  ModalFooter,
  Button,
  Divider,
  useDisclosure,
  Checkbox,
} from "@chakra-ui/core";
import { RoleIcon } from "Pages/Recruiter/ATS/CandidateCard";
import PostShareCandidateModal from "./PostShareCandidate.Modal";

function Candidates() {
  return (
    <Box my={5}>
      <Text textTransform="uppercase" fontSize="small" my={3}>
        Candidates
      </Text>
      <Flex alignItems="center">
        <Flex
          border="1px solid teal"
          p={2}
          borderRadius={3}
          alignItems="center"
          flexDirection="row"
          boxShadow="sm"
          maxW="60%"
        >
          <RoleIcon name="Yudhbir Singh" />
          <Text ml={2}>Yudhbir Singh</Text>
        </Flex>
        <IconButton icon="add" ml={3} rounded="full" />
      </Flex>
    </Box>
  );
}

/**
 * Change the select here.
 */
function ShareModalCard({ label }) {
  return (
    <Checkbox variantColor="teal" size="md">
      {label}
    </Checkbox>
  );
}

function VisibleSections() {
  return (
    <Box my={5}>
      <Text textTransform="uppercase" fontSize="small" my={3}>
        Visible Sections
      </Text>

      <Grid templateColumns="repeat(3, 1fr)" gap="5px">
        <ShareModalCard label="Contact Information" />
        <ShareModalCard label="Profile fields" />
        <ShareModalCard label="Contact CV/Resume" />
        <ShareModalCard label="Notes" />
        <ShareModalCard label="Screening questions" />
        <ShareModalCard label="Questionnaires" />
        <ShareModalCard label="Jobs" />
        <ShareModalCard label="Talent pools" />
        <ShareModalCard label="Files" />
      </Grid>
    </Box>
  );
}

function EditableSections() {
  return (
    <Box my={5}>
      <Text textTransform="uppercase" fontSize="small" my={3}>
        Editable Sections
      </Text>

      <Grid templateColumns="repeat(3, 1fr)" gap="5px">
        <ShareModalCard label="Add notes" />
        <ShareModalCard label="Add evaluation" />
        <ShareModalCard label="Upload files" />
      </Grid>
    </Box>
  );
}

function ShareCandidateFooter() {
  return (
    <Box my={5}>
      <Grid templateColumns="1fr 0.1fr" gap="5px">
        <Box>
          <FormLabel>Name of this share</FormLabel>
          <Input type="text" placeholder="Share candidates" />
        </Box>
        <Box>
          <FormLabel>Accessed allowed until</FormLabel>
          <Input type="date" />
        </Box>
      </Grid>
    </Box>
  );
}

export default function ShareCandidateModal({ isOpen, onClose }) {
  const {
    isOpen: postShareCandidateIsOpen,
    onClose: postShareCandidateOnClose,
    onOpen: postShareCandidateOnOpen,
  } = useDisclosure();

  const handleSubmit = (e) => {
    onClose(e);
    postShareCandidateOnOpen(e);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent borderRadius={5}>
          <ModalHeader>Share 1 Candidate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Candidates />
            <VisibleSections />
            <EditableSections />
            <ShareCandidateFooter />
          </ModalBody>
          <ModalFooter>
            <Divider />
            <Button variant="ghost" mr={3}>
              Cancel
            </Button>
            <Button variantColor="teal" onClick={handleSubmit}>
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <PostShareCandidateModal
        isOpen={postShareCandidateIsOpen}
        onClose={postShareCandidateOnClose}
      />
    </>
  );
}
