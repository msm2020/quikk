import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/core";
import React from "react";
import Reply from "../../../../static/assets/icons/Recruiter/mail/reply.png";
import Dots from "../../../../static/assets/icons/Recruiter/mail/dots.png";

const MailCard = ({
  subject,
  profile,
  senderName,
  receiverID,
  sentTime,
  content,
}) => (
  <Box
    m="5"
    p="5"
    backgroundColor="white"
    border="1px solid #eeeeee"
    borderRadius="0.5em"
  >
    <Flex justify="space-between">
      <Text fontWeight="550" fontSize="xl">
        {subject}
      </Text>
      <Stack isInline align="center">
        <Button variant="ghost">
          <Image src={Reply} size="24px" />
        </Button>
        <Button variant="ghost">
          <Image src={Dots} size="24px" />
        </Button>
      </Stack>
    </Flex>
    <Box my="3">
      <Flex justify="space-between" align="center">
        <Stack isInline align="center">
          <Image src={profile} size="40px" rounded="full" />
          <Stack>
            <Text fontWeight="500">{senderName}</Text>
            <Text>{`to Me (${receiverID})`}</Text>
          </Stack>
        </Stack>
        <Stack isInline>
          <Text color="grey">{`${sentTime} ago`}</Text>
          <Button variant="ghost">
            <Image src={Dots} size="24px" />
          </Button>
        </Stack>
      </Flex>
    </Box>
    <Box p="5">
      <Text>{content}</Text>
    </Box>
  </Box>
);

function DisplayMail({ selectedMail }) {
  return (
    <Box>
      {selectedMail.subject && (
        <MailCard
          senderName={selectedMail.senderName}
          content={selectedMail.content}
          sentTime={selectedMail.sentTime}
          receiverID={selectedMail.receiverID}
          profile={selectedMail.senderProfile}
          subject={selectedMail.subject}
        />
      )}
    </Box>
  );
}

export default DisplayMail;
