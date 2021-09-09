import React, { useState } from "react";
import { Button, Flex, Icon, Image, Input, InputGroup } from "@chakra-ui/core";
// import "./style.scss";
import QuiklyyLogo from "../../../static/assets/icons/quiklyy.png";
import { Link } from "react-router-dom";
import Profile from "../../../static/assets/other/profile.jpg";

// const NavBarLink = ({ linkTo, value }) => {
//   return (
//     <Link to={linkTo}>
//       <Text mt={{ base: 4, md: 0 }} mr={6} fontSize="sm" marginX="0.75em">
//         {value}
//       </Text>
//     </Link>
//   );
// };

function NavBar() {
  // const [show, setShow] = useState(false);
  // const handleToggle = () => setShow(!show);
  // const NavBarArray = [
  //   {
  //     title: "Blog",
  //     linkTo: "/blog",
  //   },
  //   {
  //     title: "Contact",
  //     linkTo: "/contact",
  //   },
  //   {
  //     title: "Terms & Condition",
  //     linkTo: "/terms",
  //   },
  //   {
  //     title: "Privacy",
  //     linkTo: "/privacy",
  //   },
  // ];

  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);
  return (
    <Flex
      boxShadow="lg"
      wrap={{ lg: "nowrap", base: "wrap" }}
      as="nav"
      alignItems="center"
      className="navbar-global"
      color="white"
      padding="0.75em"
    >
      {/* <Flex align="center">
                <img width="30" height="30" alt="Logo" src={Logo} />
                <Text fontSize="lg">Recruitify</Text>
            </Flex> */}
      <Flex>
        <Link to="/">
          <img width="100" height="200" src={QuiklyyLogo} alt="logo" />
        </Link>
        <InputGroup ml="5" rounded="2em" color="black">
          <Button
            // onClick={() => console.log(search)}
            roundedLeft="50%"
            backgroundColor="#eeeeee"
            roundedRight="0"
          >
            <Icon name="search" />
          </Button>
          <Input
            value={search}
            onChange={handleSearch}
            roundedLeft="0"
            roundedRight="2em"
            backgroundColor="#eeeeee"
            placeholder="Search Anything..."
          />
        </InputGroup>
      </Flex>
      <Image src={Profile} borderRadius="50%" size="40px" />
      {/* <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
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
        <Button
          color="green"
          mt={{ base: 4, md: 0 }}
          ml={3}
          size="xs"
          style={{ backgroundColor: "white", color: "#41bb93" }}
        >
          Login / SignUp
        </Button>
      </Box> */}
    </Flex>
  );
}

export default NavBar;
