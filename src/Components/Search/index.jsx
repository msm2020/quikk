import { Button, Grid, Input, Select, Stack, Text } from "@chakra-ui/core";
import React from "react";

function Search({ onClickModal }) {
  return (
    <Grid
     marginTop="-16rem"
     gap="0.3em"
      alignItems="flex-end"
      templateColumns="repeat(auto-fit, minmax(130px, 1fr))"
      marginLeft="1%"
      marginRight="1%"
      padding="2rem"
    >
      <Stack width={{md:"150%",
      sm:"100%",
      xs:"100%"}}>
        <Text color="white" fontSize="md">
          Search
        </Text>
        <Input borderRadius="0px" fontSize="0.8rem"  color="gray" placeholder="Skills, Designation, Companies" />
      </Stack>
      <Stack width={{md:"90%",
      sm:"100%",
      xs:"100%"}} marginLeft={{md:"50%",
      sm:"0%",
      xs:"0%"}}>
        <Text color="white" fontSize="md">
          Location
        </Text>
        <Select borderRadius="0px" fontSize="0.8rem"  color="gray"placeholder="Location">
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="chennai">Chennai</option>
        </Select>
      </Stack>
      <Stack width={{md:"75%",
      sm:"100%",
      xs:"100%"}} marginLeft={{md:"40%",
      sm:"0%",
      xs:"0%"}}>
        <Text color="white" fontSize="md">
          Experience{" "}
        </Text>
        <Select borderRadius="0px" fontSize="0.8rem"  color="gray"placeholder="Experience (Years)">
          <option value="mumbai">0-2 Years</option>
          <option value="delhi">2-5 Years</option>
          <option value="chennai">5+ Years</option>
        </Select>
      </Stack>
      <Stack marginLeft={{md:"15%",
      sm:"0%",
      xs:"0%"}}>
        <Text color="white" fontSize="md">
          Expected Salary
        </Text>
        

        <Select borderRadius="0px" fontSize="0.8rem"  color="gray"placeholder="ISO" maxWidth="80px">
          <option value="dollar">USD</option>
          <option value="pound">EGP</option>
          <option value="J-dollar">JMD</option>
        </Select>
      </Stack>
      <Stack>
      <Select borderRadius="0px" fontSize="0.8rem"  color="gray"placeholder="Salary (Lakhs)" >
          <option value="mumbai">Less than 5 LPA</option>
          <option value="delhi">5-10 LPA</option>
          <option value="chennai">10-15 LPA</option>
          <option value="morethan15">15-20 LPA</option>
        </Select>
      </Stack>

      <Stack className="poster-button">
        <Button borderRadius="0px" fontSize="0.8rem"  color="gray"style={{marginBottom:"-1rem",background:"#09ae36"}}variantColor="green">Search</Button>
        <Button style={{position:"relative",top:"1.5rem", color:"white"}}size="sm" variant="link" onClick={onClickModal}>
          Advanced Search
        </Button>
        {/* <Text fontSize="md">Advanced Search</Text> */}
      </Stack>
    </Grid>
  );
}

export default Search;
