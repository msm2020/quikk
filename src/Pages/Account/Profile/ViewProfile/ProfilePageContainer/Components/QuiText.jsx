import React, { Fragment } from "react";
import { Text } from "@chakra-ui/core";

const QuiText = ({ children }) => <Fragment>{children}</Fragment>;

QuiText.SecondaryTitle = ({ children, ...rest }) => (
  <Text my="2" fontSize="lg" className="qui-secondary-title" {...rest}>
    {children}
  </Text>
);

QuiText.Secondary = ({ children, ...rest }) => (
  <Text
    mt="3"
    fontSize="md"
    color="grey"
    className="qui-secondary-text"
    {...rest}
  >
    {children}
  </Text>
);

export default QuiText;
