import { Flex, Grid, Text } from "@chakra-ui/core";
import React from "react";
import "./Clients.scss";
import Netflix from "../../../static/assets/other/netflix.png";

function Clients() {

  return (
    <Flex
      id="clients"
      p={{ lg: 20, md: 10, sm: 5 }}
      className="clients"
      paddingTop="5em"
      direction="column"
      justify="center"
      marginTop="10%"
    >
      <Flex
        marginTop="60px"
        className="clients-content"
        direction="column"
        align="center"
        justify="center"
      >
        <Text color="#3cb878" fontSize="4xl">
        Trusted by over 10,000 Users globally
        </Text>
        <Text marginY="20px" fontSize="md" paddingY="1em">
        The world’s leading companies trust Quiklyy with their manpower planning.
        </Text>
      </Flex>

      <Grid
        marginY="60px"
        templateColumns="repeat(auto-fit,minmax(100px, 1fr))"
        justifyItems="center"
      >
        <img src={Netflix} alt="netflix" width="150" height="150" />
        <img src={Netflix} alt="netflix" width="150" height="150" />
        <img src={Netflix} alt="netflix" width="150" height="150" />
        <img src={Netflix} alt="netflix" width="150" height="150" />
        <img src={Netflix} alt="netflix" width="150" height="150" />
      </Grid>
    </Flex>
  );
}

export default Clients;
