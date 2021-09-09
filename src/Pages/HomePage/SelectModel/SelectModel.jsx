import { Box, Button, Flex, Grid, Text } from "@chakra-ui/core";
import React from "react";
import "./SelectModel.scss";
import { Divider } from "@chakra-ui/core";

const SubscriptionModels = [
  {
    title: "Monthly",
    subtitle: "Individual",
    features: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
    additional: ["Recurring Billing"],
  },
  {
    title: "Yearly",
    ribbon: true,
    uppHalf: "#636363",
    ribbonVal: "MOST POPULAR",
    subtitle: "Individual",
    features: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
    additional: ["Recurring Billing", "10-days money back guarantee"],
  },
  {
    title: "Two Year",
    subtitle: "Individual",
    features: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
    additional: ["Recurring Billing", "30-days money back guarantee"],
  },
  {
    title: "Life Time",
    subtitle: "Individual",
    features: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
    additional: ["30-days money back guarantee"],
  },
  {
    title: "Yearly Family",
    uppHalf: "#636363",
    subtitle: "Upto 5 team members",
    features: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
    additional: ["Recurring Billing", "30-days money back guarantee"],
  },
];

const ModelCard = ({
  ribbon,
  ribbonVal,
  title,
  subtitle,
  features,
  additional,
  uppHalf,
}) => {
  return (
    <Box
      position="relative"
      backgroundColor="white"
      p="0"
      maxW="sm"
      borderWidth="0px"
      rounded="lg"
    >
      <Flex
        direction="column"
        p="4"
        borderWidth="0px"
        roundedTop="lg"
        textAlign="center"
        justify="center"
        color={uppHalf ? "white" : "black"}
        backgroundColor={uppHalf ? uppHalf : ""}
      >
        <Text fontSize="2xl" fontWeight="500">
          {title}
        </Text>
        <Text fontSize="md">{subtitle}</Text>
      </Flex>
      {ribbon && (
        <Box className="ribbon ribbon-top-right">
          <span>{ribbonVal}</span>
        </Box>
      )}
      <Divider marginTop="0" borderColor="black.200" />
      <Flex direction="column" p="4" textAlign="center">
        {features.map((each, i) => (
          <Text fontSize="md" key={each + i}>
            {`${i + 1}. ${each}`}
          </Text>
        ))}
        <Button variantColor="orange" marginY="1em" size="md">
          Select
        </Button>
        <Flex direction="column" marginY="0.5em">
          {additional.map((each) => (
            <Text fontSize="xs" key={each}>
              {each}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

function SelectModel() {
  return (
    <Box id="pricing" className="selModel" p={{ lg: 20, md: 10, sm: 5, xs: 5 }}>
      <Flex direction="column" align="center" justify="center">
        <Text color="#ffffff" fontSize="4xl">
          Select your Subscription
        </Text>
        <Text>Choose the appropriate one that matches your Business</Text>
      </Flex>
      <Divider />
      <Grid
        marginY="2em"
        gap="1em"
        templateColumns="repeat(auto-fit, minmax(140px, 1fr))"
      >
        {SubscriptionModels.map((each) => (
          <ModelCard
            key={each.title}
            ribbon={each.ribbon}
            ribbonVal={each.ribbonVal}
            uppHalf={each.uppHalf}
            title={each.title}
            subtitle={each.subtitle}
            features={each.features}
            additional={each.additional}
          />
        ))}
      </Grid>
      <Divider />
    </Box>
  );
}

export default SelectModel;
