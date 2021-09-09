import { Box, TabPanel, TabPanels, Tabs, useToast } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import NavBar from "../../../../Pages/HomePage/NavBar/NavBar";
import Resume from "./Resume";
import SubNavBar from "./SubNavBar";
import { useForm, FormProvider } from "react-hook-form";
// import { useStoreActions, useStoreState } from "easy-peasy";
import Card from "../../../../Components/Card";
import Footer from "../../../../Components/Footer";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import ProfessionalDetails from "./ProfessionalDetails";
import Eligibility from "./Eligibility";
import { tagIndex } from "../../../../Data/Jobs/index";
import OtherDetails from "./OtherDetails";

// const tagIndex = {
//   '': 0,
//   '/resume': 0,
//   '/personal-info': 1,
//   '/skills': 2,
//   '/professional-info': 3,
//   '/eligibility': 4,
//   '/other-details': 5
// };

// const findIndex = (path) => {
//   for(const index in tagIndex){
//     if(tagIndex[index] === path){
//       console.log(index)
//       return index;
//     }
//   }
// }

function EditProfile() {
  const methods = useForm();
  const location = useLocation();
  const history = useHistory();
  const toast = useToast();

  const [tabIndex, setTabIndex] = useState(0);
  const url = "/candidate/create";
  useEffect(() => {
    setTabIndex(tagIndex[history.location.pathname.replace(url, "")]);
  }, [history.location.pathname]);

  useEffect(() => {
    if (location.state?.forceRedirected) {
      toast({
        status: "info",
        position: "bottom-left",
        duration: "5000",
        isClosable: true,
        description: location.state?.redirectReason,
      });
    }
  });

  console.log(tabIndex)

  return (
    <Box>
       <NavBar />
      <Tabs marginTop="55px" index={tabIndex} onChange={(index) => setTabIndex(index)} >
        <SubNavBar />
        <FormProvider {...methods}>
          <TabPanels>
            <TabPanel >
              <Card>
                <Resume />
              </Card>
            </TabPanel>
            <TabPanel disabled>
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
          </TabPanels>
        </FormProvider>
      </Tabs>
      <Footer />
    </Box>
  );
}

export default EditProfile;
