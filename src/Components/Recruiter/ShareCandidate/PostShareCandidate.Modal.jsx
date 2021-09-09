import React from "react";
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Input,
  FormLabel,
  Button,
  Textarea,
  Stack,
  ModalFooter,
} from "@chakra-ui/core";

export default function ShareCandidateModal({ isOpen, onClose }) {
  const handleSubmit = (e) => onClose(e);

  function ShareLink() {
    return (
      <Stack>
        <FormLabel>Share link</FormLabel>
        <Flex>
          <Input
            type="text"
            placeholder="https://share.quiklyy.co/c/yudhbirsingh"
            isDisabled
          />
          <Button ml={2} leftIcon="copy">
            Copy
          </Button>
        </Flex>
      </Stack>
    );
  }

  function ShareViaEmail() {
    return (
      <Stack mt={5}>
        <FormLabel>Share via email</FormLabel>
        <Textarea type="text" placeholder="av@email.com, sm@email.com" />
      </Stack>
    );
  }

  function Footer() {
    return (
      <>
        <Box mr="auto">
          <Button leftIcon="delete" variant="ghost">
            Delete
          </Button>
          <Button leftIcon="external-link" variant="ghost">
            Preview
          </Button>
        </Box>
        <Button variantColor="teal" size="sm" onClick={handleSubmit}>
          Save
        </Button>
      </>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent borderRadius={5}>
        <ModalHeader>
          1 candidate shared
          <Text fontSize="sm">Created by A V just now.</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ShareLink />
          <ShareViaEmail />
        </ModalBody>
        <ModalFooter>
          <Footer />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
