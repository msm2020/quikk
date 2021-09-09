import React from "react";
import { Flex, Image, Link, Text } from "@chakra-ui/core";

import { stringifyAddress } from "../../utils";
import locationIcon from "static/assets/icons/Job/Location.png";

export default function Address({ address }) {
  const stringifiedAddress = stringifyAddress(address);

  return (
    <Flex data-test-id="candidate-address" align="center" mr="3">
      <Image src={locationIcon} />
      <Text mx="2" fontSize="sm">
        <Link
          href={`http://maps.google.com?q=${stringifiedAddress}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {stringifiedAddress}
        </Link>
      </Text>
    </Flex>
  );
}
