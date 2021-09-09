import { Flex, Image, Tab, TabList, Text } from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Approvals from "../../../static/assets/icons/Recruiter/Approvals.png";
import Dashboard from "../../../static/assets/icons/Recruiter/Dashboard.png";
import Emails from "../../../static/assets/icons/Recruiter/Emails.png";
import Interviews from "../../../static/assets/icons/Recruiter/Interviews.png";
import Jobs from "../../../static/assets/icons/Recruiter/Jobs.png";
import Search from "../../../static/assets/icons/Recruiter/Search.png";
import Settings from "../../../static/assets/icons/Recruiter/Settings.png";

import "./style.scss";

const IconsData = [
  {
    title: "Dashboard",
    icon: Dashboard,
    tag: "dashboard",
  },
  {
    title: "Approvals",
    icon: Approvals,
    tag: "approvals",
  },
  {
    title: "Jobs",
    icon: Jobs,
    tag: "jobs",
  },
  {
    title: "Message",
    icon: Emails,
    tag: "mail",
  },
  {
    title: "Search",
    icon: Search,
    tag: "search",
  },
  {
    title: "Settings",
    icon: Settings,
    tag: "settings",
  },
  {
    title: "Interviews",
    icon: Interviews,
    tag: "interviews",
  },
];
const IconsDataWC = [
  {
    title: "Dashboard",
    icon: Dashboard,
    tag: "dashboard",
  },
  {
    title: "Approvals",
    icon: Approvals,
    tag: "approvals",
  },
  {
    title: "Clients",
    icon: Jobs,
    tag: "clients/create",
  },
  {
    title: "Message",
    icon: Emails,
    tag: "mail",
  },
  {
    title: "Search",
    icon: Search,
    tag: "search",
  },
  {
    title: "Settings",
    icon: Settings,
    tag: "settings",
  },
  {
    title: "Interviews",
    icon: Interviews,
    tag: "interviews",
  },
];

function SubNavBar({ isClient }) {
  let history = useHistory();
  return (
    <TabList
      alignItems="center"
      backgroundColor="#293c43"
      className="tab-bar"
      align="center"
      justifyContent="space-around"
    >
      {isClient
        ? IconsDataWC.map((each) => (
            <Tab
              key={each.title}
              onClick={() => history.push("/recruiter/" + each.tag)}
            >
              <Flex direction="column" align="center" padding="5">
                <Image src={each.icon} />
                <Text fontSize="sm" color="#eeeeee">
                  {each.title}
                </Text>
              </Flex>
            </Tab>
          ))
        : IconsData.map((each) => (
            <Tab
              key={each.title}
              onClick={() => history.push("/recruiter/" + each.tag)}
            >
              <Flex direction="column" align="center" padding="5">
                <Image src={each.icon} />
                <Text fontSize="sm" color="#eeeeee">
                  {each.title}
                </Text>
              </Flex>
            </Tab>
          ))}
    </TabList>
  );
}

export default SubNavBar;
