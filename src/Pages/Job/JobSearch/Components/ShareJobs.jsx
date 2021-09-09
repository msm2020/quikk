import { Flex, Image, Link } from "@chakra-ui/core";
import React from "react";
import facebook from "../../../../static/assets/icons/facebook.png";
import linkedIn from "../../../../static/assets/icons/LI-In-Bug.png";
import mail from "../../../../static/assets/icons/mail.png";
import whatsapp from "../../../../static/assets/icons/whatsapp.png";

const LinkIconFetch = {
  mail: mail,
  linkedIn: linkedIn,
  facebook: facebook,
  whatsapp: whatsapp,
};

// TODO: Figure out which link to share.
const ShareJobs = ({ links }) => (
  <Flex flexWrap="wrap">
    {links.map((each) => (
      <Link style={{ margin: "0 0.5em" }} to={each.value} key={each.value}>
        <Image src={LinkIconFetch[each.name]} size="24px" />
      </Link>
    ))}
  </Flex>
);

export default ShareJobs;
