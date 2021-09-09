import React from "react";
import { Button } from "@chakra-ui/core";

const ButtonLink = ({ text, ...rest }) => (
  <Button
    className="button-link"
    color="var(--primary-green)"
    marginRight="2"
    variant="link"
    {...rest}
  >
    {text}
  </Button>
);

export default ButtonLink;
