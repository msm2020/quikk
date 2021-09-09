import {
  Box,
  Button,
  Checkbox,
  Flex,
  IconButton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/core";
import { roleOptions } from "Data/Recruiter/Settings";
import React from "react";
import SettingsCard from "../../SettingsCard";

const categoryList = Object.keys(roleOptions);
const RoleTabBar = () => {
  return (
    <TabList>
      {categoryList.map((each) => (
        <Tab key={each}>{each.toUpperCase()}</Tab>
      ))}
    </TabList>
  );
};

const ModifiedCheckBox = ({ value, isChecked, isDisabled }) => (
  <Checkbox
    alignItems="baseline"
    size="sm"
    variantColor="teal"
    my="2"
    isDefaultChecked={isChecked}
    isDisabled={isDisabled}
  >
    <Stack ml="2">
      <Text mb="1" m="0" fontWeight="600">
        {value}
      </Text>
      <Text color="grey">
        Can manage company-wide SSO settings and the recently deleted candidates
        list, as well as delete all notes and evaluations, including those added
        by other team members.
      </Text>
    </Stack>
  </Checkbox>
);

const CategoryTabPanel = ({ roleSettings, isEditable }) => {
  const roleKeys = Object.keys(roleSettings);
  return (
    <TabPanels p="5">
      {roleKeys.map((each) => (
        <TabPanel key={each}>
          {Object.keys(roleSettings[each]).map((eachSubCat) =>
            eachSubCat === "core" ? (
              Object.keys(roleSettings[each][eachSubCat]).map((eachFin) => (
                <ModifiedCheckBox
                  isDisabled={!isEditable}
                  key={eachFin}
                  value={eachFin}
                  isChecked={roleSettings[each][eachSubCat][eachFin]}
                />
              ))
            ) : (
              <Box mb="3" key={eachSubCat}>
                <Text mb="1" fontWeight="600">
                  {eachSubCat.toUpperCase()}
                </Text>
                {Object.keys(roleSettings[each][eachSubCat]).map((eachFin) => (
                  <ModifiedCheckBox
                    isDisabled={!isEditable}
                    key={eachFin}
                    value={eachFin}
                    isChecked={roleSettings[each][eachSubCat][eachFin]}
                  />
                ))}
              </Box>
            )
          )}
        </TabPanel>
      ))}
    </TabPanels>
  );
};

function RoleCard({ roleObj }) {
  return (
    <SettingsCard>
      <Box>
        <Flex align="center" justify="space-between">
          <Box>
            <Text fontSize="xl" fontWeight="600">
              {roleObj.role}
              {roleObj.isEditable && (
                <IconButton ml="2" variant="ghost" icon="edit" />
              )}
            </Text>
            <Text color="grey" fontSize="sm">
              {roleObj.isEditable
                ? `Saved ${roleObj.savedDays} ago`
                : "This role can not be edited"}
            </Text>
          </Box>
          <Stack isInline>
            <Button
              size="sm"
              backgroundColor="#41bb93"
              color="white"
              _hover={{ backgroundColor: "#41bb93", color: "white" }}
            >
              Save
            </Button>
            <IconButton size="sm" icon="settings" />
          </Stack>
        </Flex>
        <Stack>
          <Text my="2" color="grey">
            {roleObj.description}
          </Text>
          <Stack isInline my="3">
            <Button size="sm" leftIcon="repeat">
              Reassign Team Members
            </Button>
            <Button size="sm" leftIcon="add">
              Invite new team members
            </Button>
          </Stack>
        </Stack>
        <Tabs>
          <RoleTabBar />
          <CategoryTabPanel
            roleSettings={roleObj.roleSettings}
            isEditable={roleObj.isEditable}
          />
        </Tabs>
      </Box>
    </SettingsCard>
  );
}

export default RoleCard;
