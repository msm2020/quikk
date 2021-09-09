import { Box, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import CandidateSearch from "./CandidateSearch";
import NavBar from "../../Components/NavBar";
import SubNavBar from "../../Components/Recruiter/SubNavBar";
import JobsWrapper from "./Jobs";
import MailBox from "./Mail";
// import { useHistory } from 'react-router-dom';
import { indexRoutePair } from "Data/Recruiter/CreateJob";
import ApprovalsWrapper from "./Approvals";
import SettingsWrapper from "../Recruiter/Settings";

function RecruiterWrapper({ location }) {
  const [index, setIndex] = useState(0);
  const url = "/recruiter";
  useEffect(() => {
    let ChangedPath = location.pathname.replace(url, "");
    if (ChangedPath !== "") {
      let removedSlash = ChangedPath.replace("/", "");
      for (var prop in indexRoutePair) {
        if (indexRoutePair.hasOwnProperty(prop)) {
          if (indexRoutePair[prop] === removedSlash) {
            setIndex(Number(prop));
          }
        }
      }
      if (removedSlash.slice(0, 4) === "jobs") {
        setIndex(2);
      }
      if (removedSlash.slice(0, 6) === "search") {
        setIndex(4);
      }
    }
    // if(location.pathname === url){
    //   setIndex(0);
    // }
  }, [location.pathname, url]);
  // let history = useHistory();
  // console.log(index);

  return (
    <Box>
      <NavBar />
      <Tabs index={index} onChange={(index) => setIndex(index)}>
        <SubNavBar />
        <TabPanels>
          <TabPanel>1</TabPanel>
          <TabPanel>
            <ApprovalsWrapper />
          </TabPanel>
          <TabPanel>
            <JobsWrapper />
          </TabPanel>
          <TabPanel>
            <MailBox />
          </TabPanel>
          <TabPanel>
            <CandidateSearch />
          </TabPanel>
          <TabPanel>
            <SettingsWrapper />
          </TabPanel>
          <TabPanel>7</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default RecruiterWrapper;
