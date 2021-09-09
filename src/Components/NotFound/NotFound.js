import React from "react";
import { Flex, Text, Link } from "@chakra-ui/core";

export default function NotFound() {
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {/* <img src="https://error404.fun/img/illustrations/05.png" alt="404" /> */}
      <img src="https://error404.fun/img/illustrations/32.png" alt="404" />
      <Text
        fontSize="4xl"
        style={{ fontWeight: "600", letterSpacing: "-0.05em" }}
      >
        Heads up! Can't find what you're looking for.
      </Text>
      <Link
        mt="5"
        href="/"
        style={{ fontWeight: "500", letterSpacing: "-0.05em" }}
      >
        <Text fontSize="lg">Get back to homepage.</Text>
      </Link>
    </Flex>
  );
}
