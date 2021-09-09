import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";
import React from "react";
import BillingWrapper from "./Billing";
import ProfileWrapper from "./Profile";
import TeamMembersWrapper from "./TeamMembers";
import EmailTemplatesWrapper from "./EmailTemplates";
import HiringRolesWrapper from "./HiringRoles";
import DisqualifyReasonWrapper from "./DisqualifyReason";
import Pipelines from "./Pipeline";

const settingTabs = [
  "Profile",
  "Team Members",
  "Hiring Roles",
  "Billing",
  "Disqualify Reasons",
  "Pipelines",
  "Email Templates",
];

function SettingsWrapper() {
  return (
    <Box>
      <Tabs
        size="lg"
        variant="soft-rounded"
        variantColor="teal"
        orientation="vertical"
        display="grid"
        gridTemplateColumns="0.2fr 1fr"
      >
        <TabList maxWidth="250px">
          {settingTabs.map((each) => (
            <Tab
              justifyContent="flex-start !important"
              key={each}
              roundedLeft="0"
            >
              {each}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel p="2" backgroundColor="#f0f4f7">
            <ProfileWrapper />
          </TabPanel>
          <TabPanel
            p="2"
            backgroundColor="#f0f4f7"
            height="calc(100vh - 180px)"
          >
            <TeamMembersWrapper />
          </TabPanel>
          <TabPanel>
            <HiringRolesWrapper />
          </TabPanel>
          <TabPanel
            p="2"
            backgroundColor="#f0f4f7"
            height="calc(100vh - 180px)"
          >
            <BillingWrapper />
          </TabPanel>
          <TabPanel p="2" backgroundColor="#f0f4f7">
            <DisqualifyReasonWrapper />
          </TabPanel>
          <TabPanel p="2" backgroundColor="#f0f4f7">
            <Pipelines />
          </TabPanel>
          <TabPanel>
            <EmailTemplatesWrapper />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default SettingsWrapper;
