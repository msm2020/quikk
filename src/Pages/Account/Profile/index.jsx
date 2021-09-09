import React from "react";
import { Link } from "react-router-dom";

import { Box, Stack } from "@chakra-ui/core";
import NavBar from "../../../Components/NavBar";

function Profile() {
  return (
    <Box>
      <NavBar />
      <Stack mt="65.6px">
        <Link to="/account/profile/edit">Edit Profile</Link>
        <Link to="/account/profile/view">View Profile</Link>
      </Stack>
    </Box>
  );
}

export default Profile;
