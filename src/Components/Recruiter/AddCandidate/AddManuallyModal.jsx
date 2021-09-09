import React, { useRef, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Text,
  Button,
  useToast,
  Box,
  Grid,
  IconButton,
  Input,
  Divider,
  Icon,
  Flex,
  Textarea,
  Collapse,
  Image,
} from "@chakra-ui/core";
import FileUploadStatus from "./FileUploadStatus";
import log from "utils/logger";

const initialState = {
  avatar: "",
  resume: "",
};

export default function AddManuallyModal({ isOpen, onClose }) {
  const toast = useToast();
  const [showMore, toggleShowMore] = useState(false);
  const [state, setState] = useState(initialState);

  const fileInputRef = useRef(null);
  const resumeUploadRef = useRef(null);

  log(state);

  /**
   * Handle candidate avatar upload.
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleAvatarUpload = (e) => {
    const { files } = e.target;
    const avatar = files[0];

    if (!avatar) return;

    // Use FileReader to upload images.
    // https://stackoverflow.com/a/61744514/7469926
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setState({
        ...state,
        avatar: reader.result,
      });
    });

    reader.readAsDataURL(avatar);
  };

  /**
   * Handle resume upload.
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleResumeUpload = (e) => {
    const { files } = e.target;
    const resume = files;

    if (!resume) return;

    setState({
      ...state,
      resume,
    });
  };

  /**
   * Handles modal close operation.
   * @param {React.MouseEvent | React.KeyboardEvent} e
   */
  const handleModalClose = (e) => onClose(e);

  /**
   * Handles upload cancel operation.
   * @param {React.MouseEvent | React.KeyboardEvent} e
   */
  const onUploadCancel = (e) => {
    setState(initialState);
    handleModalClose(e);
  };

  /**
   * Handles modal submit operation.
   * @param {React.MouseEvent | React.KeyboardEvent} e
   */
  const handleModalSubmit = (e, { title, status = "success" }) => {
    toast({ title, status });
    handleModalClose(e);
  };

  return (
    <Modal isOpen={isOpen} onClose={onUploadCancel} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent borderRadius={3} maxW="lg">
        <ModalHeader>Add new candidate</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Box>
            <Grid templateColumns="0.2fr 1fr" gap=".5em" alignContent="center">
              {/* Show candidate avatar only when it is uploaded. */}
              {state.avatar ? (
                <Box m="auto">
                  <Image
                    src={state.avatar}
                    alt="Candidate avatar"
                    objectFit="cover"
                    rounded="full"
                    size="50px"
                  />
                </Box>
              ) : (
                <Box>
                  <IconButton
                    icon="attachment"
                    variantColor="teal"
                    width="100%"
                    onClick={(e) => fileInputRef.current.click()}
                  />
                  <Input
                    name="candidate-avatar"
                    id="candidate-avatar"
                    type="file"
                    accept="image/*"
                    display="none"
                    position="fixed"
                    ref={fileInputRef}
                    onChange={handleAvatarUpload}
                  />
                </Box>
              )}

              {/* Candidate's full name */}
              <Input type="text" placeholder="Full name" height="100%" />
            </Grid>

            <Divider my={5} />

            {/* Email Input */}
            <Box>
              <Grid templateColumns="0.3fr 1fr">
                <Flex alignItems="center">
                  <Icon mr={3} name="email" color="teal" />
                  <Text>Email</Text>
                </Flex>
                <Flex flexDirection="column">
                  <Input placeholder="Add email address" />
                  <IconButton icon="add" mt={2}>
                    Add
                  </IconButton>
                </Flex>
              </Grid>
            </Box>

            <Divider my={5} />

            {/* Phone number */}
            <Box>
              <Grid templateColumns="0.3fr 1fr">
                <Flex alignItems="center">
                  <Icon mr={3} name="phone" color="teal" />
                  <Text>Phone</Text>
                </Flex>
                <Flex flexDirection="column">
                  <Input placeholder="Add phone number" />
                  <IconButton icon="add" mt={2}>
                    Add
                  </IconButton>
                </Flex>
              </Grid>
            </Box>

            {/* Show More */}
            <Collapse isOpen={showMore}>
              <Divider my={5} />

              <Box>
                <Grid templateColumns="0.3fr 1fr">
                  <Flex alignItems="center">
                    <Icon mr={3} name="at-sign" color="teal" />
                    <Text>Socials</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Input placeholder="Add social link" />
                    <IconButton icon="add" mt={2}>
                      Add
                    </IconButton>
                  </Flex>
                </Grid>
              </Box>

              <Divider my={5} />

              <Box>
                <Grid templateColumns="0.3fr 1fr">
                  <Flex alignItems="center">
                    <Icon mr={3} name="link" color="teal" />
                    <Text>Links</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Input placeholder="Add link" />
                    <IconButton icon="add" mt={2}>
                      Add
                    </IconButton>
                  </Flex>
                </Grid>
              </Box>
            </Collapse>

            <Box my={5}>
              <Divider my={5} />
              <Button
                size="sm"
                variantColor="teal"
                onClick={(e) => toggleShowMore(!showMore)}
              >
                Show {showMore ? "Less" : "More"}
              </Button>
            </Box>

            <Divider my={5} />

            {/* CV Upload */}
            <Box mt={5}>
              <Text textTransform="uppercase">CV / Resume</Text>
              <Input
                type="file"
                display="none"
                accept=".pdf"
                onChange={handleResumeUpload}
                ref={resumeUploadRef}
              />
              <Button
                mt={3}
                size="sm"
                leftIcon="add"
                variantColor="teal"
                onClick={(e) => resumeUploadRef.current.click()}
              >
                Upload file
              </Button>
              {state.resume && (
                <Box my={5}>
                  <FileUploadStatus fileList={state.resume} />
                </Box>
              )}
            </Box>
            <Divider my={5} />
            <Box mt={5}>
              <Text textTransform="uppercase">Cover Letter</Text>
              <Textarea mt={3} />
            </Box>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} variant="ghost" onClick={onUploadCancel}>
            Cancel
          </Button>
          <Button
            variantColor="teal"
            onClick={(e) =>
              handleModalSubmit(e, {
                title: "Added candidate.",
                status: "success",
              })
            }
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
