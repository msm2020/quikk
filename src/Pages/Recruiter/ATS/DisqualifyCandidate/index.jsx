import {
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import React from "react";

const disqualifyReasons = [
  "Lack of knowledge",
  "Not a fit",
  "Hired Elsewhere",
  "Overpriced",
  "Spam",
  "Lacks interpersonal skills",
  "Wrong skill set",
];

function DisqualifyCandidateButton() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <IconButton
        variant="ghost"
        size="sm"
        icon="not-allowed"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Disqualify Candidate</ModalHeader>
          <ModalBody>
            <Text mb="2" color="grey">
              1 Selected Candidate
            </Text>
            <Stack
              p="3"
              spacing="0"
              backgroundColor="#f0f4f7"
              borderRadius="0.5em"
            >
              {disqualifyReasons.map((eachReason, i) => (
                <Radio
                  my="2"
                  variantColor="teal"
                  size="lg"
                  key={eachReason}
                  value={i + 1}
                >
                  {eachReason}
                </Radio>
              ))}
            </Stack>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button variant="ghost" color="black" onClick={onClose}>
                Cancel
              </Button>
              <Button variantColor="red" onClick={onClose}>
                Disqualify
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DisqualifyCandidateButton;
