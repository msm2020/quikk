import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Flex,
  Text,
  Button,
  Stack,
  Link,
} from "@chakra-ui/core";
import Editor from "Components/Recruiter/Editor";

const tabList = [
  {
    category: "",
    subCategories: ["Auto Reply (Default)"],
  },
  {
    category: "Event Invitation",
    subCategories: ["Event Invitation"],
  },
  {
    category: "General",
    subCategories: [
      "Candidate Rejection",
      "Invitation - Phone Interview",
      "Invitation to interview",
      "Application acknowledgement",
    ],
  },
];

function SubNavBar() {
  return (
    <TabList
      className="tab-bar"
      // backgroundColor="#f0f4f7"
      alignSelf="flex-start"
      justifyContent="space-around"
      maxWidth="250px"
    >
      {tabList.map((_, i) =>
        tabList[i].subCategories.map((subCategory) => (
          <Tab
            justifyContent="flex-start !important"
            key={subCategory}
            roundedLeft="0"
          >
            <Flex direction="column" align="center" padding="3">
              <Text fontSize="sm">{subCategory}</Text>
            </Flex>
          </Tab>
        ))
      )}
    </TabList>
  );
}

export default function EmailTemplatesWrapper() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box backgroundColor="#f0f4f7">
      <Flex align="center" justify="space-between" p="5">
        <Stack>
          <Text fontSize="lg" my="1" fontWeight="600">
            Email Templates
          </Text>
          <Text color="grey">
            Create and manage email templates used in this company.{" "}
            <Link color="green !important" href="www.google.com">
              Learn more
            </Link>
          </Text>
        </Stack>
        <Button leftIcon="add" size="sm" variantColor="teal" m="2" mx="4">
          New Template
        </Button>
      </Flex>
      <Tabs
        size="sm"
        variantColor="teal"
        variant="soft-rounded"
        orientation="vertical"
        display="grid"
        gridTemplateColumns="0.2fr 1fr"
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        <SubNavBar />
        <TabPanels>
          {/* Auto Reply */}
          <TabPanel p="2">
            <Editor category="autoReply" />
          </TabPanel>
          <TabPanel p="2">
            <Editor category="eventInvitation" />
          </TabPanel>
          <TabPanel p="2">
            <Editor />
          </TabPanel>
          <TabPanel p="2">
            <Editor />
          </TabPanel>
          <TabPanel p="2">
            <Editor />
          </TabPanel>
          <TabPanel p="2">
            <Editor />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
