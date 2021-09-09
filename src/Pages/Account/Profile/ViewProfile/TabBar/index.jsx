import { Badge, Flex, Image, Tab, TabList, Text,Box } from "@chakra-ui/core";
import React from "react";
import { TabBarIcons } from "../../../../../Data/Profile";
import "./style.scss";
import Account from "static/assets/icons/Profile/Account.png";
import Notification from "static/assets/icons/Profile/Notification.png";
function TabBar() {
  return (
    <TabList  backgroundColor="#293c43"
    className="tab-bar"
    align="center"
    justifyContent="space-around"
  >
      {TabBarIcons.map((each) => (
        <Tab key={each.title} isDisabled={each.isDisabled}>
          <Flex direction="column" align="center" padding="5">
            <Image src={each.icon} />
            <Text color="#eeeeee">{each.title}</Text>
          </Flex>
        </Tab>
      ))}

<Flex marginBottom={{sm:"1rem",xs:"1rem",md:"0rem"}} style={{justifyContent:"center"}}>
              <Image size="20px" mr="5" src={Account} />
              <Box>
                <Image size="20px" src={Notification} />
                <Badge rounded="full" variantColor="green">
                  12
                </Badge>
              </Box>
            </Flex>
    </TabList>
  );
}

export default TabBar;
