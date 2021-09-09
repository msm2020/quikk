import React, { Component } from "react";
import { Text, Flex, Image, Link } from "@chakra-ui/core";

import log from "utils/logger";

export default class GlobalErrorBoundary extends Component {
  state = { error: "", errorInfo: "", hasError: false };

  static getDerviedStateFromError(err) {
    return { hasError: true, error: err };
  }

  componentDidCatch(error, errorInfo) {
    log(error, errorInfo);
    this.setState({ errorInfo });
  }

  componentDidMount() {
    log(`Global error boundary mounted.`);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex
          height="100vh"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            textAlign="center"
            fontSize="clamp(2rem, -0.875rem + 8.33333vw, 4rem)"
            margin="3"
            fontFamily="inherit"
            fontWeight="bold"
            letterSpacing="-0.06em"
          >
            Something went wrong!
          </Text>
          {/*
           * // TODO: Self host this image.
           */}
          <Image
            src="https://mixkit.imgix.net/art/preview/mixkit-exhausted-man-in-front-of-a-computer-with-his-head-69-original-large.png?q=100"
            alt="Something went wrong!"
            // margin="5"
            height="100%"
            width="100%"
            objectFit="cover"
            position="fixed"
            top="0"
            zIndex="-100"
            opacity="0.3"
          />
          <Text fontFamily="inherit" fontSize="1.3rem">
            Try{" "}
            <Link
              onClick={() => window.location.reload()}
              textDecoration="underline"
            >
              reloading this page
            </Link>
            .
          </Text>
        </Flex>
      );
    }

    return this.props.children;
  }
}
