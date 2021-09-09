import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/core";
import EditorContainer from "Components/Editor";
import { userProfile } from "Data/Recruiter/Settings";
import React, { useState } from "react";
import SettingsCard from "../SettingsCard";

const EmailProviderCard = ({ each }) => (
  <Box
    border="1px solid #cccccc"
    textAlign="left !important"
    borderRadius="0.5em"
    p="3"
    m="2"
  >
    <Flex justify="space-between" align="center">
      <Stack isInline align="center">
        <Image
          src={each.mailIcon}
          border="2px solid #eeeeee"
          size="32px"
          width="auto"
          borderRadius="0.25em"
        />
        <Stack align="left">
          <Text fontWeight="600">{each.label}</Text>
          {each.isActive && <Text color="grey">{each.mail}</Text>}
        </Stack>
      </Stack>
      <Stack isInline align="center">
        {each.isActive && (
          <Text color="#41bb93" alignItems="center">
            <Icon mr="2" name="check" />
            Active now
          </Text>
        )}
        <Button leftIcon="edit">{each.isActive ? "Edit" : "Activate"}</Button>
      </Stack>
    </Flex>
  </Box>
);

const EmailSignatureCard = ({ value }) => (
  <Box
    border="1px solid #cccccc"
    textAlign="left !important"
    as="button"
    borderRadius="0.5em"
    p="3"
    my="2"
  >
    {value}
  </Box>
);

function ProfileWrapper() {
  const initialValue = "Demo Signature";
  const [isEdited, setEdited] = useState(false);
  const [value, setValue] = useState(initialValue);

  const toggleEdit = () => setEdited(!isEdited);
  const onCancel = () => {
    setValue(initialValue);
    toggleEdit();
  };
  const { profilePic, userName, phoneNumber, role, email } = userProfile;
  return (
    <SettingsCard>
      <Flex justify="space-between" align="center">
        <Stack isInline>
          <Image src={profilePic} size="70px" rounded="full" />
          <Stack>
            <Text fontSize="xl" fontWeight="600">
              {userName}
            </Text>
            <Text color="grey">{`${phoneNumber}  ●  ${email[0].mail}  ●  ${role}`}</Text>
          </Stack>
        </Stack>
        <SimpleGrid minChildWidth="120px" spacing="1em">
          <Button leftIcon="settings">Edit Profile</Button>
          <Button leftIcon="lock">Change Password</Button>
        </SimpleGrid>
      </Flex>
      <Divider backgroundColor="#eeeeee" my="3" />
      <Box>
        <Text my="3" fontSize="lg" fontWeight="600">
          Email Settings
        </Text>
        <Text color="grey">
          Decide which email address Quiklyy should use to send messages to
          candidates.{" "}
          <Link href="www.google.com" color="lightgreen !important">
            Learn more
          </Link>
        </Text>
        <Stack my="2">
          {email.map((each) => (
            <EmailProviderCard each={each} key={each.label} />
          ))}
        </Stack>
        <Text my="3" fontSize="lg" fontWeight="600">
          Email Signature
        </Text>
        <Text color="grey">
          Decide which email address Quiklyy should use to send messages to
          candidates.{" "}
          <Link href="www.google.com" color="lightgreen !important">
            Learn more
          </Link>
        </Text>
        {isEdited ? (
          <Box>
            <EditorContainer
              outputFormat="plain"
              initialValue={value}
              setStoredValue={setValue}
            />
            <Stack>
              <Button onClick={toggleEdit}>Save</Button>
              <Button onClick={onCancel}>Cancel</Button>
            </Stack>
          </Box>
        ) : (
          <Flex justify="space-between" align="center">
            <EmailSignatureCard value={value} />
            <Button
              size="sm"
              leftIcon="edit"
              onClick={toggleEdit}
              variantColor="teal"
            >
              Edit
            </Button>
          </Flex>
        )}
      </Box>
    </SettingsCard>
  );
}

export default ProfileWrapper;
