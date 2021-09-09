import { Flex, Image, Tab, TabList, Text } from "@chakra-ui/core";
import React, { useState } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useHistory } from "react-router";
import Eligibility from "../../../../../static/assets/icons/Profile/Eligibility.png";
import OtherDetails from "../../../../../static/assets/icons/Profile/Other Details.png";
import PersonalInfo from "../../../../../static/assets/icons/Profile/Personal Info.png";
import ProfessionalInfo from "../../../../../static/assets/icons/Profile/Professional Info.png";
import Resume from "../../../../../static/assets/icons/Profile/Resume.png";
import Skills from "../../../../../static/assets/icons/Profile/Skills.png";
import "./style.scss";
import { useEffect } from "react";

const IconsData = [
  {
    title: "Resume",
    icon: Resume,
    tag: "resume",
  },
  {
    title: "Personal Info",
    icon: PersonalInfo,
    tag: "personal-info",
  },
  {
    title: "Skills",
    icon: Skills,
    tag: "skills",
  },
  {
    title: "Professional Info",
    icon: ProfessionalInfo,
    tag: "professional-info",
  },
  {
    title: "Eligibility",
    icon: Eligibility,
    tag: "eligibility",
  },
  {
    title: "Other Details",
    icon: OtherDetails,
    tag: "other-details",
  },
];

function SubNavBar() {
  const history = useHistory();
  const userDetails = useStoreState((state) => state.userDetails);
  console.log(userDetails);
 let disbaleTAB = [false,true,true,true,true,true];

 useEffect(()=>{

  if (window.location.pathname.includes('personal-info')===true)
  {
    disbaleTAB[1] = false;
    disbaleTAB[0] = true
  }
if (window.location.pathname.includes('skills')===true)
  {
    disbaleTAB[2] = false;
    disbaleTAB[0] = true;
  }
  //professionaldetails
  if (window.location.pathname.includes('professional-info')===true)
  {
    disbaleTAB[3] = false ;
    disbaleTAB[0] = true;
  }

  if (window.location.pathname.includes('eligibility')===true)
  {
    disbaleTAB[4] = false;
    disbaleTAB[0] = true;
  }
  if( window.location.pathname.includes('other-details')===true)
  {
    disbaleTAB[5] = false;
    disbaleTAB[0] = true;
  }
},[])
  const [tabdisable, setDateDisable] = useState(disbaleTAB);
  console.log(disbaleTAB);
  return (
    <TabList
      backgroundColor="#293c43"
      className="tab-bar"
      align="center"
      justifyContent="space-around"
    >
      {IconsData.map(( each, index) => (
        <Tab
          key={each.title}
          onClick={() => history.push("/candidate/create/" + each.tag)}
          isDisabled={ tabdisable[index]}
        >
          <Flex direction="column" align="center" padding="5">
            <Image src={each.icon} />
            <Text color="#eeeeee">{each.title}</Text>
          </Flex>
        </Tab>
      ))}
    </TabList>
  );
}

export default SubNavBar;
