import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/core";

// https://v0.chakra-ui.com/alert#status
const severities = ["success", "error", "warning", "info"];

/**
 * A wrapper around Chakra UI's Alert.
 */
export default function Alert() {
  const { closeAlert } = useStoreActions((actions) => ({
    closeAlert: actions.alert.close,
  }));
  const { show, severity, message } = useStoreState((state) => ({
    show: state.alert.isVisible,
    severity: state.alert.severity,
    message: state.alert.message,
  }));

  if (show && (!severities.includes(severity) || !message)) {
    throw new Error("Not enough props provided!");
  }

  return (
    show && (
      <ChakraAlert
        status={severity}
        position="fixed"
        top="0"
        left="0"
        zIndex="1000"
        w="100%"
      >
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={closeAlert}
        />
      </ChakraAlert>
    )
  );
}
