import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/core";
import { roleDetails } from "Data/Recruiter/Settings";
import React, { useState } from "react";
import RoleCard from "./RoleCard";

const tabList = [
  "Administrator",
  "Corporate recruiter",
  "Hiring manager",
  "Reviewer",
  "Accounting",
  "Marketing/Design",
  "Test",
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
      {tabList.map((each) => (
        <Tab justifyContent="flex-start !important" key={each} roundedLeft="0">
          <Flex direction="column" padding="2">
            <Text fontSize="sm">{each}</Text>
          </Flex>
        </Tab>
      ))}
    </TabList>
  );
}

function HiringRolesWrapper() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Box backgroundColor="#f0f4f7">
      <Flex align="center" justify="space-between" p="5">
        <Stack>
          <Text fontSize="lg" my="1" fontWeight="600">
            Hiring roles
          </Text>
          <Text color="grey">
            Customize different levels of access for your team members.{" "}
            <Link color="green !important" href="www.google.com">
              Learn more
            </Link>
          </Text>
        </Stack>
        <Button leftIcon="add" size="sm" variantColor="teal" m="2" mx="4">
          Create New Role
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
          {roleDetails.map((each) => (
            <TabPanel key={each.role}>
              <RoleCard roleObj={each} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default HiringRolesWrapper;
