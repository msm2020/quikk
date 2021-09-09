import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/core";
import EditorContainer from "Components/Editor";
import React, { useState } from "react";
import Inbox from "../../../../static/assets/icons/Recruiter/mail/inbox.png";

function EmailTabWrapper() {
  const [isCompose, setCompose] = useState(false);
  return (
    <Box
      m="3"
      backgroundColor="#eeeeee"
      p="5"
      borderRadius="1em"
      boxShadow="md"
    >
      {isCompose ? (
        <Flex direction="column">
          <Flex
            backgroundColor="white"
            p="3"
            align="center"
            borderTopLeftRadius="0.5em"
            borderTopRightRadius="0.5em"
          >
            <Text fontWeight="600">To</Text>
            <Box
              ml="3"
              backgroundColor="#eeeeee"
              p="2"
              alignSelf="flex-start"
              borderRadius="0.25em"
              boxShadow="md"
            >
              <Text fontSize="sm">Yudhbir Singh</Text>
            </Box>
          </Flex>
          <EditorContainer />
          <Flex
            boxShadow="md"
            backgroundColor="white"
            borderBottomLeftRadius="0.5em"
            borderBottomRightRadius="0.5em"
            p="3"
            justify="space-between"
            align="center"
          >
            <Button
              variant="ghost"
              onClick={() => setCompose(false)}
              variantColor="red"
            >
              Cancel
            </Button>
            <Button variantColor="teal">Save</Button>
          </Flex>
        </Flex>
      ) : (
        <Stack align="center">
          <Image src={Inbox} size="180px" />
          <Text fontSize="xl" fontWeight="600">
            No Emails Yet
          </Text>
          <Text color="grey">Send your first email to this candidate.</Text>
          <Button
            leftIcon="edit"
            variantColor="teal"
            onClick={() => setCompose(!isCompose)}
          >
            Compose
          </Button>
        </Stack>
      )}
    </Box>
  );
}

export default EmailTabWrapper;
