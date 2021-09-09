import { Text } from "@chakra-ui/core";
import React from "react";

function Footer() {
  return (
    <footer style={{ padding: "0.75em", backgroundColor: "#464646" }}>
      <Text color="#eeeeee" fontSize="sm" textAlign="center">
        {" "}
        All rights reserved by Quiklyy &#169; 2020
      </Text>
    </footer>
  );
}
export default Footer;
