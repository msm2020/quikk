import { Box, Flex, Text, useDisclosure } from "@chakra-ui/core";
import React from "react";
// import { Link } from 'react-router-dom';
import Search from "../../../Components/Search";
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";
import "./Poster.scss";

function Poster() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("ayush")
  return (
    <div >
    <Box id="home" marginTop={{ lg: "0px", md: "0px" ,sm: "66px",xs:"66px" }} p={{ lg: 20, md: 10, sm: 5 }} className="poster">
      <div className="poster-container">
        <Flex
          justify="space-between"
          align="center"
          color="white"
          direction="column"
          padding="1em"
          marginBottom="12rem"
        >
          <p style={{fontSize:"1.8rem"}}fontWeight="400">
          "Discover the world's top talent Quiklyy"
          </p>
          <Text style={{fontSize:"1rem",marginTop:"20px",color:"#d3d3d3",fontWeight:"400"}}>
          Quiklyy is the leading job marketplace to discover the world's best talented professionals.
          </Text>
       
        </Flex>
        </div>
    </Box>
        {/* <Grid gap="0.5em" alignItems="flex-end" templateColumns="repeat(auto-fit, minmax(130px, 1fr))"> */}
        <Search onClickModal={onOpen} />
        <AdvancedSearch onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        {/* <Stack>
                        <Link to="/account/profile">Get Started</Link>
                        <Link style={{ color: "white"}} to="/auth">SignUP</Link>
                    </Stack> */}
        {/* </Grid> */}
      
    </div>
  );
}

export default Poster;
