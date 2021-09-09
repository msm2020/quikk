import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/core";
import FileUploadStatus from "./FileUploadStatus";
import { InputWrapper, InvisibleInput } from "./Utils";
import Server from "static/assets/other/server.png";

export default function UploadCVModal({ isOpen, onClose }) {
  const toast = useToast();
  const [files, setFiles] = useState("");

  const handleFileUpload = (e) => {
    const { files: filesFromClient } = e.target;

    if (!filesFromClient.length) {
      return;
    }

    // Append files on consecutive uploads.
    const _files = [...files, ...filesFromClient];

    // For preventing duplicates.
    const seen = new Set();

    // https://dev.to/matthewoates/comment/8hdm
    const filteredArray = Array.from(_files).filter((f) => {
      const duplicate = seen.has(f.name);
      seen.add(f.name);
      return !duplicate;
    });

    setFiles(filteredArray);
  };

  if (process.env.NODE_ENV === "development") {
    console.log("Files:", files || "None");
  }

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
    setFiles("");
    handleModalClose(e);
  };
  /**
   * Handles modal submit operation.
   * @param {React.MouseEvent | React.KeyboardEvent} e
   */
  const handleModalSubmit = (e) => {
    // TODO: Use dynamic title and status.
    toast({ title: "Added candidates.", status: "success" });
    handleModalClose(e);
  };

  return (
    <Modal isOpen={isOpen} onClose={onUploadCancel} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent borderRadius={3}>
        <ModalHeader>Upload CVs</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <InputWrapper>
            <Image
              display="table"
              height="20vh"
              width="auto"
              objectFit="contain"
              alt="Upload"
              src={Server}
              data-credits="https://www.isometriclove.com/"
            />
            <InvisibleInput
              accept=".pdf"
              type="file"
              onChange={handleFileUpload}
              multiple
            />
            <Text textAlign="center" my={10} mx="auto" fontSize="lg">
              Drop or click here to upload CVs
            </Text>
          </InputWrapper>
          <FileUploadStatus fileList={files} />
        </ModalBody>

        <ModalFooter>
          <Button mr={3} variant="ghost" onClick={onUploadCancel}>
            Cancel
          </Button>
          <Button
            variantColor="teal"
            isDisabled={!files}
            onClick={handleModalSubmit}
          >
            Add candidates
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
