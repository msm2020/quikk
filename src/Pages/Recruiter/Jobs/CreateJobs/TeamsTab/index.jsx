import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";
import DetailCard from "../DetailCard";
import ProfilePic from "../../../../../static/assets/other/profile.jpg";
import Group from "../../../../../static/assets/icons/Recruiter/group.png";

const MemberCard = ({ name, role }) => (
  <Box m="5">
    <Flex align="center" justify="space-between">
      <Stack isInline align="center">
        <Image src={ProfilePic} size="32px" rounded="full" />
        <Stack ml="3">
          <Text fontWeight="600">{name}</Text>
          <Text color="grey">{role}</Text>
        </Stack>
      </Stack>
      <Button variant="ghost">
        <Icon name="close" />
      </Button>
    </Flex>
  </Box>
);

function TeamsWrapper() {
  return (
    <Box py="5">
      <DetailCard>
        <FormLabel fontSize="lg" fontWeight="600">
          Team Members
        </FormLabel>
        <Text color="grey">
          Assign team members to work on and access this job.
          <Link color="teal !important" href="www.google.com">
            Learn More
          </Link>
        </Text>
        <MemberCard name="A V" role="Administrator" />
        <Accordion allowMultiple my="2">
          <AccordionItem>
            <AccordionHeader>
              <Box flex="1" textAlign="left">
                <Flex align="center">
                  <Image src={Group} size="32px" rounded="full" />
                  <Stack ml="3">
                    <Text fontWeight="600">Administrator</Text>
                    <Text color="grey">1 team member can access all jobs</Text>
                  </Stack>
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel pb="4">
              <MemberCard name="A V" role="Administrator" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Divider />
        <Button leftIcon="add">Add team member</Button>
      </DetailCard>
    </Box>
  );
}

export default TeamsWrapper;
