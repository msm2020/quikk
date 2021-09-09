import { Button, Grid, Input, InputGroup,
   InputLeftElement, IconButton,
   InputRightElement,

} from "@chakra-ui/core";

import { SearchIcon, CloseIcon } from '@chakra-ui/icons'


import React, { useState } from "react";

function SearchBar({ setValue }) {
  const [search, setSearch] = useState("");
  const [IsClosed, setIsClosed] = useState(true);
  const handleClick = (e, searchBtn) => {

    if (e.key === 'Enter' || searchBtn === 'SEARCH')
      setValue(search.toLowerCase());
  };

  const resetSearch = () => {
    
    setSearch("");
    setValue("");
    setIsClosed(true);
  };

  // const handleSearch = (value) => {
  //     if(value.length === 0){
  //         setSearch('');
  //         setValue('');
  //     } else {
  //         setSearch(value);
  //         setValue(search.toLowerCase());

  //     }
  // }
  return (
    <Grid className="searchBar"
      margin="0 auto"
      width={{ lg: "32.5rem", md: "70%", sm: "100%" }}
      padding={{ lg: "0", md: "0", sm: "0" }}
      templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
      marginY="10"
      marginTop="0px"
      gap="0.5em"
    >
     

      <InputGroup>
          <InputLeftElement
            children={<IconButton aria-label="Search" icon={SearchIcon } onClick={ e=> handleClick(e, "SEARCH")} />}
          />
          <Input type="text" 
            boxShadow="lg"
            gridColumn={{ lg: "1 / span 2", md: "1 / span 2", sm: "1" }}
            variant="outline"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value !== "") setIsClosed(false);
              else setIsClosed(true);
            }}
            placeholder="Describe your issue"
            onKeyDown = {e => handleClick(e, null)}/>
            
          <InputRightElement className="closeBtn" children={<IconButton aria-label="close"  hidden={IsClosed}
                              icon={CloseIcon } onClick={resetSearch} />} />

        </InputGroup>
      
    </Grid>
  );
}
/**
 *  <Input
        boxShadow="lg"
        gridColumn={{ lg: "1 / span 2", md: "1 / span 2", sm: "1" }}
        variant="outline"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Describe your issue"
        onKeyDown = {handleClick}
        
      />
 *  <Button
        boxShadow="md"
        variantColor="green"
        onClick={handleClick}
        leftIcon="search"
        paddingX="2em"
      >
        Search
      </Button> */

export default SearchBar;
