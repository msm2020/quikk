import {
  Box,
  Divider,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/core";
import React from "react";
import { Redirect } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import SEO from "Components/SEO";
import Login from "./Login";
import SignUp from "./SignUp";
import Logo from "../../static/assets/icons/quiklyy.png";
import "./style.scss";

function AuthPage() {
  const user = useStoreState((state) => state.user);

  if (user.isLoggedIn) {
    return <Redirect to={user.postLoginRedirectSlug} />;
  }

  return (
    <>
      <SEO title="Auth" />
      <Box p="12%" maxWidth="90%" margin="auto">
        <Image maxW="15%" margin="auto" src={Logo} />
        <Tabs isFitted variant="solid-rounded">
          <TabList>
            <Tab _selected={{ backgroundColor: "#42bb95", color: "white" }}>
              Job Seekers
            </Tab>
            <Tab _selected={{ backgroundColor: "#42bb95", color: "white" }}>
              Recruiters
            </Tab>
          </TabList>
          <TabPanels marginY="1em">
            <TabPanel>
              <SimpleGrid
                gridTemplateColumns="1fr auto 1fr"
                className="auth-grid"
                minChildWidth="120px"
                spacing="0.5em"
              >
                <Login isRecruiter={false} />
                <Divider
                  className="auth-grid-div"
                  orientation="vertical"
                  borderColor="black"
                />
                <SignUp isRecruiter={false} />
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                gridTemplateColumns="1fr auto 1fr"
                className="auth-grid"
                minChildWidth="120px"
                spacing="0.5em"
              >
                <Login isRecruiter />
                <Divider
                  className="auth-grid-div"
                  orientation="vertical"
                  borderColor="black"
                />
                <SignUp isRecruiter />
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default AuthPage;
