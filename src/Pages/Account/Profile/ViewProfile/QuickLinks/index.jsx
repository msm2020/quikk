import { Box, Stack, Text, Link, Flex, Button } from "@chakra-ui/core";
import React, { useContext } from "react";
import formatDistancetoNow from "date-fns/formatDistanceToNow";
import { ViewProfileContext } from "../ViewProfile.context";
import "./style.scss";

const LinkData = [
  {
    title: "Headline",
    toId: "headline",
    add: false,
  },
  {
    title: "Profile Summary",
    toId: "profile",
    add: false,
  },
  {
    title: "Key Skills",
    toId: "skills",
    add: false,
  },
  {
    title: "Employment",
    toId: "employment",
    add: false,
  },
  {
    title: "Education",
    toId: "education",
    add: false,
  },
  // {
  //   title: "IT Skills",
  //   toId: "itSkills",
  //   add: true,
  // },
  {
    title: "Projects",
    toId: "projects",
    add: false,
  },
  // {
  //   title: "Accomplishments",
  //   toId: "accomplishments",
  //   add: false,
  // },
  // {
  //   title: "Desired Career Profile",
  //   toId: "desired",
  //   add: false,
  // },
  {
    title: "Personal Details",
    toId: "personal",
    add: false,
  },
  {
    title: "Resume",
    toId: "resume",
    add: false,
  },
];

function QuickLinks() {
  const { updatedAt } = useContext(ViewProfileContext),
    _updatedAtGmt = `${updatedAt} GMT`,
    _updatedAt = new Date(_updatedAtGmt),
    formatted = `${formatDistancetoNow(_updatedAt)} ago`;
  return (
    <Box ml="3">
      <Box>
        <Text fontSize="small" ml="2" data-test-id="profile-updated-time">
          Profile updated{" "}
          <span style={{ textDecoration: "underline" }}>{formatted}</span>.
        </Text>
      </Box>
      <Box
        rounded="0.25em"
        alignSelf="flex-start"
        m="5"
        mx="0"
        backgroundColor="#eeeeee"
      >
        <Text p="3" my="3" fontSize="lg" fontWeight="bold">
          Quick Links
        </Text>
        <Stack>
          {LinkData.map((each) => (
            <Link
              px="2"
              className="quick-links"
              key={each.toId}
              href={`#${each.toId}`}
            >
              <Flex justify="space-between">
                <Text padding="0.75em">{each.title}</Text>
                {each.add && (
                  <Button color="#41bb93" variant="link">
                    Add
                  </Button>
                )}
              </Flex>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default QuickLinks;
