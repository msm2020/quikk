import React from "react";
import { Box, Text, Link, Flex } from "@chakra-ui/core";

import {
  Facebook,
  WhatsApp,
  Email,
  Linkedin,
} from "../../../../../../Components/Core/Icons";

import { useCurrentLocation } from "../../../../../../hooks";

import { generateSocialLinks } from "../../../../../../utils";

import styles from "./ShareJob.module.scss";

const socialBrandIcons = {
  mail: <Email />,
  linkedin: <Linkedin />,
  facebook: <Facebook />,
  whatsapp: <WhatsApp />,
};

const ShareJob = ({ jobTitle }) => {
  const [locating, currentLocation] = useCurrentLocation();

  const socialLinks =
    !locating &&
    generateSocialLinks({
      text: jobTitle,
      url: currentLocation,
    });

  return (
    <Box>
      <Text my="5">Share Job</Text>
      <Flex
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {socialLinks &&
          Object.keys(socialLinks).map((link, idx) => (
            <Link
              className={styles.icon}
              href={socialLinks[link]}
              key={`${link}-${idx}`}
            >
              {socialBrandIcons[link]}
            </Link>
          ))}
      </Flex>
    </Box>
  );
};

export default ShareJob;
