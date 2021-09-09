import React, { useState } from "react";
import { useHistory,Link } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/core";
import { useStoreState } from "easy-peasy";
import QuiklyyLogo from "../../../static/assets/other/quiklyy_logo.png";
import "./NavBar.scss";


const NavBarArray = [
  "Home",
  "Clients",
  "Pricing",
  "About Us",
  "Blog",
  "Contact",
  "Browse Jobs",
  "Job Seekers",
  "Recruiter"
];

const NavBarLink = ({ linkTo, value }) => {
  return (
    <>
    {value==="Job Seekers"?<Link to="/signup/candidate"> <Text mt={{ base: 4, md: 0 }} mr={6} fontSize="sm" marginX="0.75em">
        {value}
      </Text></Link>: value==="Recruiter"?<Link to="/signup/recruiter"> <Text mt={{ base: 4, md: 0 }} mr={6} fontSize="sm" marginX="0.75em">
        {value}
      </Text></Link>:
    <a href={linkTo}>
      <Text mt={{ base: 4, md: 0 }} mr={6} fontSize="sm" marginX="0.75em">
        {value}
      </Text>
    </a>
}
</>
  );
};

function NavBar(pt) {
  const history = useHistory();
  const user = useStoreState((state) => state.user);
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);


  return (
    <Flex
      wrap={{ lg: "nowrap", base: "wrap" }}
      as="nav"
      alignItems="center"
      className="navbar"
      position={{sm:"fixed",md:(pt && pt.pt===true)?"absolute":"fixed",xs:"fixed"}}
      boxShadow={{sm:")px",xs:"0px",md:(pt&& pt.pt===true)?"none":"lg"}}
      color={{sm:"black",md:(pt&& pt.pt===true)?"white":"black",xs:"black"}}
      backgroundColor={{sm:"white",md:(pt&& pt.pt===true)?"transparent":"white",xs:"white"}}
      padding="0.75em"
    >
      {/* <Flex align="center">
                <img width="30" height="30" alt="Logo" src={Logo} />
                <Text fontSize="lg">Recruitify</Text>
            </Flex> */}
      <Box>
        <Link to ="/">
          <img width="100" height="200" src={QuiklyyLogo} alt="logo" />
        </Link>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="teal"
          width="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Box
        justifyItems="center"
        display={{
          xs: show ? "block" : "none",
          sm: show ? "block" : "none",
          md: "flex",
        }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
      >
        {NavBarArray.map((each) => (
          <NavBarLink
            key={each}
            linkTo={"/#" + each.toLowerCase()}
            value={each}
          />
        ))}
        {user.isLoggedIn ? (
          <>
            <Button
              mt={{ base: 4, md: 0 }}
              ml={3}
              size="xs"
              variantColor="green"
              onClick={() => history.push("/account/profile/view")}
            >
              Profile
            </Button>
            <Button
              mt={{ base: 4, md: 0 }}
              ml={3}
              size="xs"
              variantColor="green"
              onClick={() => history.push("/logout")}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            onClick={() => history.push("/login")}
            mt={{ base: 4, md: 0 }}
            ml={3}
            size="xs"
            variantColor="green"
          >
            Login 
          </Button>
        )}
      </Box>
    </Flex>
  );
}

export default NavBar;
