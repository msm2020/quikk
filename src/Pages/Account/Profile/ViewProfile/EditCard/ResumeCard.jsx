import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Text,
} from "@chakra-ui/core";
import Embed from "Components/Core/Embed/Embed";
import { useStoreActions } from "easy-peasy";
import api from "Http/httpService";
import React, { useEffect, useState } from "react";
import { updateData } from "../ProfilePageContainer";

function ResumeCard({ user, onClose }) {
  const [resume, setResume] = useState();
  const [resumeURL, setResumeURL] = useState(user.resume);
  const [emptyAlert, setEmptyAlert] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const setUpdateStatus = useStoreActions((actions) => actions.setUpdateStatus);
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
    if (!resume) {
      setEmptyAlert(true);
    }
  };
  const updateResume = async () => {
    try {
      var formdata = new FormData();
      if (resume !== undefined || resumeURL !== "") {
        formdata.append("resume", resume);
        const resumeResponse = await Promise.all(
          ["/upload/resume"].map((each) => api.post(each, formdata))
        );
        console.log("This is resp", resumeResponse);
        setResumeURL(resumeResponse[0].data.location);
        setUpdateStatus(true);
        onClose();
        setEditing(false);
      } else if (resumeURL === "") {
        updateData({ ...user, resume: resumeURL }, onClose);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteResume = () => setResumeURL("");
  useEffect(() => {
    if (resume === undefined && resumeURL === "") {
      setEmptyAlert(true);
    } else {
      setEmptyAlert(false);
    }
  }, [resumeURL, resume]);
  return (
    <Box>
      <ModalHeader>Edit Personal Details</ModalHeader>
      <ModalCloseButton onClick={onClose} />
      <ModalBody marginBottom="1em">
        {emptyAlert && (
          <Alert status="info">
            <AlertIcon />
            <AlertTitle mr={2}>
              Upload Your Resume to increase your chances of earning Job
            </AlertTitle>
          </Alert>
        )}
        <Box p="3">
          <Text fontSize="xl">Chosen Resume</Text>
          {resumeURL && !isEditing ? (
            <Box m="0 auto" width="100%" height="100%">
              <Embed.PDF pdfLocation={resumeURL} />
            </Box>
          ) : (
            <input type="file" onChange={onSelectFile} />
          )}
        </Box>
        <ButtonGroup>
          <Button
            leftIcon="delete"
            onClick={deleteResume}
            variantColor="red"
            variant="ghost"
          >
            Delete Resume
          </Button>
          <Button
            leftIcon="edit"
            onClick={() => {
              setEditing(true);
              setResumeURL("");
            }}
          >
            Edit Resume
          </Button>
          <Button
            variantColor="teal"
            rightIcon="arrow-right"
            onClick={updateResume}
          >
            Save
          </Button>
        </ButtonGroup>
      </ModalBody>
    </Box>
  );
}

export default ResumeCard;
