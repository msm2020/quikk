import { Box } from "@chakra-ui/core";
import React from "react";
import Poster from "./Poster/Poster";
import SelectModel from "./SelectModel/SelectModel";
import About from "./About/About";
import Clients from "./Clients/Clients";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import JobsByCategory from "./JobsByCategory";

// import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <Box width="full">
      <Box width="full">
      <NavBar pt={true} />
   
      <Poster />
      <Clients />
      <SelectModel />
      <About />
      <JobsByCategory />
      <Footer />
      </Box>
    </Box>
  </div>
  );
}

export default HomePage;
