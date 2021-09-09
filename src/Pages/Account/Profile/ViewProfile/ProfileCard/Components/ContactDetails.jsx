import React from "react";
import {
  SimpleGrid,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  useToast,
} from "@chakra-ui/core";

export default function ContactDetails({ mobile, email, email_verified }) {
  const toast = useToast();

  return (
    <SimpleGrid display={{sm:"block",xs:"block",md:"block",lg:"-webkit-inline-box"}} minChildWidth="100px" spacing="1em" my="5">
      {mobile && (
        <Flex  align="center" data-test-id="candidate-mobile-number">
          <Icon name="phone" />
          <Link href={`tel:${mobile}`}>
            <Text mx="2">{mobile}</Text>
          </Link>
        </Flex>
      )}

      {email && (
        <Flex align="center" data-test-id="candidate-email-id">
          <Icon name="email" />
          <Link href={`mailto:${email}`}>
            <Text mx="2">{email}</Text>
          </Link>
        </Flex>
      )}

      {/*
       * //! BUG: In Chakra UI v0, there is no way of
       * //! preventing duplication of toasts.
       * //! As a workaround, we can use Alert.
       */}
      {!email_verified && (
        <Button
          data-test-id="send-email-verification"
          variant="outline"
          marginTop={{sm:"1rem",xs:"1rem",md:""}}
          _hover={{ color: "black", backgroundColor: "white" }}
          onClick={() =>
            toast({
              title: "Email sent.",
              description: "A verification link has been sent to your email.",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "bottom-left",
            })
          }
        >
          Verify Email
        </Button>
      )}
    </SimpleGrid>
  );
}
