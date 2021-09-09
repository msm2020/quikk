import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  RadioButtonGroup,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";
import Inbox from "../../../../static/assets/icons/Recruiter/mail/inbox.png";
import "./style.scss";

const EachMail = ({ name, profile, subject, content, sentTime, ...rest }) => (
  <Box
    as="button"
    className="mailCard"
    my="2"
    textAlign="left"
    border="1px solid #eeeeee"
    p="3"
    {...rest}
  >
    <Flex justify="space-between">
      <Stack isInline align="center">
        <Image src={profile} size="40px" rounded="full" />
        <Flex ml="3" direction="column">
          <Text fontWeight="500">{name}</Text>
          <Text color="grey">{subject}</Text>
          <Text
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {content}
          </Text>
        </Flex>
      </Stack>
      <Text color="grey" fontSize="sm">
        {sentTime}
      </Text>
    </Flex>
  </Box>
);

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;
  return (
    <Button
      ref={ref}
      variantColor={isChecked ? "teal" : "gray"}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  );
});

function MailExplorer({ mailData, handleMail, index }) {
  const onClickCard = (mailObj) => {
    handleMail(mailObj);
    // console.log(mailObj);
  };
  return (
    <Box p="2" boxShadow="sm" backgroundColor="white">
      <InputGroup my="2">
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input variant="flushed" placeholder="Search.." />
      </InputGroup>
      <Flex my="3" justify="space-between">
        <RadioButtonGroup isInline defaultValue="rad1" onChange={(val) => val}>
          <CustomRadio value="rad1">All</CustomRadio>
          <CustomRadio value="rad2">Unread</CustomRadio>
        </RadioButtonGroup>
        <Stack isInline>
          <IconButton variant="ghost" icon="repeat" />
          <IconButton variant="ghost" icon="settings" />
        </Stack>
      </Flex>
      <Box>
        {mailData.length ? (
          <>
            {mailData.map((each) => (
              <EachMail
                key={each.senderName}
                name={each.senderName}
                profile={each.senderProfile}
                subject={each.subject}
                content={each.content}
                sentTime={each.sentTime}
                onClick={() => onClickCard(each)}
              />
            ))}
          </>
        ) : (
          <Stack p="5" align="center">
            <Image src={Inbox} size="80px" />
            <Text>No Emails Yet</Text>
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export default MailExplorer;
