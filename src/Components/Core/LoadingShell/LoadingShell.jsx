import React, { useEffect } from "react";
import { Flex, Image, Spinner } from "@chakra-ui/core";
import quiklyyLogo from "../../../static/assets/other/quiklyy_logo.png";

const LoadingShell = () => {
  useEffect(() => {
    const { LOADING_CLASSNAME } = window._quiklyyConstants;
    document.body.classList.add(LOADING_CLASSNAME);
    document.body.setAttribute("data-loaded", false);

    return () => {
      document.body.classList.remove(LOADING_CLASSNAME);
      document.body.setAttribute("data-loaded", true);
    };
  }, []);

  return (
    <Flex
      height="100vh"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      position="fixed"
      top="0"
      left="0"
      zIndex="12"
    >
      <Image src={quiklyyLogo} alt="Quiklyy Logo" objectFit="cover" mb="5" />
      <Spinner thickness="3px" size="lg" speed="1s" />
    </Flex>
  );
};

export default LoadingShell;
