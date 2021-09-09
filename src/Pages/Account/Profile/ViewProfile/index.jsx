import {
  Badge,
  Box,
  Flex,
  Grid,
  Image,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/core";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import ViewProfileContextWrap from "./ViewProfile.context";
import Card from "Components/Card";
import NavBar from "../../../../Pages/HomePage/NavBar/NavBar"
import Eligibility from "../EditProfile/Eligibility";
import OtherDetails from "../EditProfile/OtherDetails";
import PersonalInfo from "../EditProfile/PersonalInfo";
import ProfessionalDetails from "../EditProfile/ProfessionalDetails";
import Resume from "../EditProfile/Resume";
import Skills from "../EditProfile/Skills";
import ProfileCard from "./ProfileCard";
import TabBar from "./TabBar";

import { userData } from "Data/Profile/index";
import ProfilePageContainer from "./ProfilePageContainer";
import QuickLinks from "./QuickLinks";
import JobSearch from "Pages/Job/JobSearch";

function ViewProfile() {
  // const index = useStoreState((state) => state.profile.index);
  const user = useStoreState((state) => state.user);
  // const setIndex = useStoreActions((actions) => actions.setIndex);
  const [index, setIndex] = useState(0);

  if (!user.hasFilledCandidateDetails) {
    return (
      <Redirect
        to={{
          pathname: "/candidate/create",
          search: "?from=view_account",
          state: {
            forceRedirected: true,
            redirectReason: "Please fill details before you can view them.",
          },
        }}
      />
    );
  }

  return (
    <ViewProfileContextWrap>
      <Box>
      
        <Tabs tabIndex={index} onChange={(index) => setIndex(index)}>
        <NavBar/>
          <Flex
            justifyContent="space-evenly"
            marginTop="55.6px"
            align="center"
            backgroundColor="#293c43"
          >
            <TabBar />
          
          </Flex>
          <TabPanels>
            <TabPanel>
              <ProfileCard profile={userData} />
              <Grid display={{sm:"block",xs:"block",md:"grid"}}mt="5" mr="3" gap="1em" templateColumns="0.8fr 2fr">
                <QuickLinks />
                <ProfilePageContainer />
              </Grid>
            </TabPanel>
            <TabPanel>
              <Card>
                <Resume />
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <PersonalInfo />
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <Skills />
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <ProfessionalDetails />
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <Eligibility />
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <OtherDetails />
              </Card>
            </TabPanel>
            <TabPanel><JobSearch/></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ViewProfileContextWrap>
  );
}

export default ViewProfile;
