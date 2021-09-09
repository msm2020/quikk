import {
  Box,
  Button,
  Grid,
  Link as ChakraLink,
  Input,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";
import LinkedIn from "../../../static/assets/icons/LI-In-Bug.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      id="contact"
      p={{ lg: "20", md: "15", sm: "20", xs: "10" }}
      paddingBottom="5"
      backgroundColor="#464646"
    >
      <Grid className="footerTerms"
        alignItems="center"
        gap="1em"
        templateColumns="repeat(auto-fit,minmax(150px, 1fr))"
      >
        <Stack>
          <Text fontSize="3xl" color="#eeeeee">
            Get in touch!
          </Text>
          <Text color="grey" paddingY="1em">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            natus?
          </Text>

          <ChakraLink color="#eeeeee" href="">
            hello@quiklyy.com
          </ChakraLink>
          <ChakraLink color="#eeeeee" href="tel:124567890">
             +919953254229
          </ChakraLink>

          <Grid
            paddingY="1em"
            templateColumns="repeat(auto-fit,minmax(100px, 1fr))"
          >
            <ChakraLink href="">
              <img src={LinkedIn} alt="linkedin" width="25" height="25" />
            </ChakraLink>
          </Grid>
        </Stack>
        <Stack color="grey">
          <Link to="/terms">Terms and Condition</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/sitemap">SiteMap</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </Stack>
        
      </Grid>
      <footer style={{ paddingTop: "1em" }}>
        <Text
          style={{ display: "flex", justifyContent: "center" }}
          fontSize="sm"
          color="#eeeeee"
        >
          Copyright , all rights reserved by Quiklyy.com @2020
        </Text>
      </footer>
    </Box>
  );
}
/**
 * <Stack>
          <Grid gap="1em" templateColumns="repeat(auto-fit,minmax(100px, 1fr))">
            <Input variant="flushed" placeholder="Name" />
            <Input variant="flushed" placeholder="Email" />
          </Grid>
          <Input variant="flushed" placeholder="Subject" />
          <Input variant="flushed" placeholder="Message" />
          <Button color="#3cb878" variant="ghost">
            Submit
          </Button>
        </Stack>
 */
export default Footer;
