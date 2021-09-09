import { Box } from "@chakra-ui/core";
import React from "react";
import Card from "../Card";
import Footer from "../Footer";
import NavBar from "../../Pages/HomePage/NavBar/NavBar";
import "./style.scss";

function TnPLayout({ children,sitemap }) {
  return (
    <Box>
      <NavBar/>
      <section class="colorHeader"></section>

      <Box className={sitemap?"TnP-containerS":"TnP-container"}>
        <Card className="TnP-card">
          <Box p={{ lg: 10, sm: 5 }}>{children}</Box>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
}

export default TnPLayout;
