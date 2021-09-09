import React from "react";
import { Spinner, Button } from "@chakra-ui/core";

const LoadingButton = ({ text, loading, ...rest }) => (
  <Button isDisabled={Boolean(loading)} {...rest}>
    {loading ? <Spinner size="md" speed="0.8s" /> : text}
  </Button>
);

export default LoadingButton;
