import React from "react";
import {
  IconButton,
  Divider,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/core";
import ShareCandidateModal from "./ShareCandidate.Modal";

// Share Candidate Menu Modal
function ShareCandidateMenuModal({ onClose, isOpen }) {
  const {
    isOpen: shareCandidateModalIsOpen,
    onClose: shareCandidateModalOnClose,
    onOpen: shareCandidateModalOnOpen,
  } = useDisclosure();

  const handleOpen = (e) => {
    onClose(e);
    shareCandidateModalOnOpen(e);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={5}>
          <ModalHeader>
            Share Candidate
            <Text fontSize="small">
              Share this candidate with anyone outside Quiklyy!
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button
              justifyContent="flex-start"
              leftIcon="external-link"
              variant="ghost"
              onClick={handleOpen}
              isFullWidth
            >
              Share now
            </Button>
            <Divider />
            <Button
              justifyContent="flex-start"
              leftIcon="add"
              variant="ghost"
              isFullWidth
            >
              Add to existing shares
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      <ShareCandidateModal
        isOpen={shareCandidateModalIsOpen}
        onClose={shareCandidateModalOnClose}
      />
    </>
  );
}

export default function ShareCandidate() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const initialFocusRef = useRef();

  return (
    <>
      <IconButton
        icon="external-link"
        variant="ghost"
        size="sm"
        onClick={onOpen}
      />

      <ShareCandidateMenuModal onClose={onClose} isOpen={isOpen} />

      {/* Popover looks very ugly with current card styling. Using Modal instead. */}
      {/* <Popover initialFocusRef={initialFocusRef} placement="bottom" usePortal>
        <PopoverTrigger>
          <IconButton
            icon="external-link"
            variant="ghost"
            size="sm"
            onClick={onOpen}
          />
        </PopoverTrigger>
        <PopoverContent zIndex={4} borderColor="teal" maxW="sm">
          <PopoverHeader>
            <Text>Share Candidate</Text>
            <Text fontSize="small">
              Share this candidate with anyone outside Quiklyy!
            </Text>
          </PopoverHeader>
          <PopoverBody>
            <Button
              justifyContent="flex-start"
              leftIcon="external-link"
              variant="ghost"
              isFullWidth
            >
              Share now
            </Button>
            <Divider />
            <Button
              justifyContent="flex-start"
              leftIcon="add"
              variant="ghost"
              isFullWidth
            >
              Add to existing shares
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover> */}
    </>
  );
}
