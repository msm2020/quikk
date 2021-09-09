import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React, { useState } from "react";
// import FAQVector from '../../static/assets/SVGs/FAQVector'
import NavBar from "../HomePage/NavBar/NavBar";
import Accordion from "./Accordion/Accordion";
import SearchBar from "./SearchBar";
import FAQVector from "../../static/assets/SVGs/FAQ.svg";
import "./styles.scss";

function FAQ() {
  const [searchValue, setSearchVal] = useState("");

  return (
    <Box>
      <NavBar />
      <Flex
        direction="column"
        className="faq"
        marginTop={{lg:"-35px",md:"25px",sm:"66px",xs:"66px"}}
        p={{ lg: 20, md: 10, sm: 5, xs: 5 }}
      >
        <Flex direction="column" align="center">
          <Image
            size={{ lg: "300px", md: "200px", sm: "150px", xs: "100px" }}
            src={FAQVector}
            alt="FAQ"
          />
          <Text my="5" fontSize="3xl" textAlign="center" color="#41bb93">
            How can we help you?
          </Text>
        </Flex>
        <SearchBar setValue={setSearchVal} />
        <div className="commonFAQ"> <Accordion value={searchValue} /> </div>
      </Flex>
    </Box>
  );
}

export default FAQ;
