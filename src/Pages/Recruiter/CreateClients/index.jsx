import { Box, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";
import React, { useState } from "react";
import NavBar from "../../../Components/Recruiter/NavBar";
import SubNavBar from "../../../Components/Recruiter/SubNavBar";
import ClientsCard from "./ClientCard";

function CreateClients() {
  const [index, setIndex] = useState(0);
  return (
    <Box>
      <NavBar />
      <Tabs index={index} onChange={(index) => setIndex(index)}>
        <SubNavBar isClient />
        <TabPanels>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>
            <ClientsCard />
          </TabPanel>
          <TabPanel>4</TabPanel>
          <TabPanel>5</TabPanel>
          <TabPanel>6</TabPanel>
          <TabPanel>7</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default CreateClients;
