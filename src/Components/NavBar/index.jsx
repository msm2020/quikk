// TODO: Remove the redundant NavBar component.

import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/core";
import { useStoreState } from "easy-peasy";
import { Link, useHistory } from "react-router-dom";
import QuiklyyLogo from "../../static/assets/icons/quiklyy.png";
import "./style.scss";

const NavBarArray = [
  {
    title: "Blog",
    linkTo: "/blog",
  },
  {
    title: "Contact",
    linkTo: "/contact",
  },
  {
    title: "Terms & Condition",
    linkTo: "/terms",
  },
  {
    title: "Privacy",
    linkTo: "/privacy",
  },
  {
    title: "SiteMap",
    linkTo: "/sitemap",
  },
];

const NavBarLink = ({ linkTo, value }) => {
  return (
    <Link to={linkTo}>
      <Text
        mt={{ base: 4, md: 0 }}
        color="white"
        mr={6}
        fontSize="sm"
        marginX="0.75em"
      >
        {value}
      </Text>
    </Link>
  );
};

function NavBar() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const { user } = useStoreState((state) => ({
    user: state.user,
  }));

  const handleToggle = () => setShow(!show);

  return (
    <Flex
      boxShadow="lg"
      wrap={{ lg: "nowrap", base: "wrap" }}
      as="nav"
      alignItems="center"
      className="navbar-global"
      // color="white"
      padding="0.75em"
    >
      <Box>
        <Link to="/">
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
            key={each.linkTo}
            linkTo={each.linkTo}
            value={each.title}
          />
        ))}
        {user.isLoggedIn ? (
          <>
           
            <Button
              color="green"
              mt={{ base: 4, md: 0 }}
              ml={3}
              size="xs"
              onClick={() => (window.location.href = "/logout")}
              style={{ backgroundColor: "white", color: "#41bb93" }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Flex>
            <Button
              color="green"
              mt={{ base: 4, md: 0 }}
              ml={3}
              size="xs"
              onClick={() => history.push("/auth")}
              style={{ backgroundColor: "white", color: "#41bb93" }}
            >
              Login / SignUp
            </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}

/** <Button
              color="green"
              mt={{ base: 4, md: 0 }}
              ml={3}
              size="xs"
              onClick={() => history.push("/account/profile/view")}
              style={{ backgroundColor: "white", color: "#41bb93" }}
            >
              Profile
            </Button> */
export default NavBar;
