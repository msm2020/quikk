import { Flex, Text } from "@chakra-ui/core";
import React from "react";

function About() {
  return (
    <Flex
      id="about%20us"
      p={{ lg: 20, md: 10, sm: 5, xs: 5 }}
      direction="column"
      align="center"
      justify="center"
    >
      <Text fontSize="3xl" >
        About Us
      </Text>
      <Text maxWidth="750px" marginY="1em" textAlign="justify" fontSize="md">
   <div style={{textAlign:"center"}}>  <span>You asked who we are?</span></div> <br/>

Well, we are <b>indeed</b> a job board but we don't just help you in finding just a <b>naukri</b>, in fact we are your biggest supporters in tough  <b>times</b>.

We help you slay all the <b>monsters </b>between you and your dream job. After all, we are your knight in the <b>shine-ing</b> armour.

With us, getting a job is as easy as rolling a <b>dice</b> .All you have to do is throw it and rest will be taken care of by us. 

Seems like you know us very well. <br/><br/>
<div>Okay. <b>Bayt</b></div>


      </Text>
    </Flex>
  );
}

export default About;
