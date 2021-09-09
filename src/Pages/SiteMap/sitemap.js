import React from 'react'
import { Box, Text } from "@chakra-ui/core";
import TnPLayout from 'Components/TnPLayout';
function SiteMap(){
    
const Data = [
    {
      id: "tnc",
      title:["Terms & Conditions","Lorem & Ipsum"],
    heading: "title1"
    },
    {
      id: "dpa",
      title: ["Terms & Conditions","Lorem & Ipsum"],
    heading: "title2"
    },
    {
      id: "dpa1",
      title: ["Terms & Conditions","Lorem & Ipsum"],
    heading: "title3"
    },
    {
      id: "dpa2",
      title: ["Terms & Conditions","Lorem & Ipsum"],
    heading: "title4"
    },
    {
      id: "dpa3",
      title: ["Terms & Conditions","Lorem & Ipsum"],
    heading: "title5"
    },
  ];
  
return(
    <TnPLayout sitemap={true}>
      <Text fontWeight="600" fontSize="3xl" textAlign="center">
        Quiklyy SiteMap
      </Text>
      <Box
        padding={{ lg: "2em", sm: "0.5em" }}
        margin="1em auto"
        textAlign="justify"
      >
      <Text  paddingBottom="5px" width="100%" borderBottom="1px solid" fontWeight="bold" fontSize="2xl" textAlign="left"  marginBottom="1rem">
        About Quiklyy
      </Text>
        <ul style={{columns:"3",listStyle:"none"}}>
          {Data.map((each) => (
              <div  style={{marginBottom:"1rem"}}>
                <h3 style={{fontWeight:"bold"}}>{each.heading}</h3>
            <li key={each.id} style={{ marginTop: "0.5rem",display:"inline-block" }}>
                {each.title.map((i)=>
              <Text fontSize="14px"  style={{color:"#0BB5FF",marginBottom:"1rem"}}>{i}</Text>)}
            </li>
         
        </div>
          ))}
        </ul>
      </Box>
      <Box
        padding={{ lg: "2em", sm: "0.5em" }}
        margin="1em auto"
        textAlign="justify"
      >
      <Text paddingBottom="5px" width="100%" borderBottom="1px solid"  fontWeight="bold" fontSize="2xl" textAlign="left"  marginBottom="1rem">
        Products
      </Text>
        <ul style={{columns:"3",listStyle:"none"}}>
          {Data.map((each) => (
              <div  style={{marginBottom:"1rem"}}>
                <h3 style={{fontWeight:"bold"}}>{each.heading}</h3>
            <li key={each.id} style={{ marginTop: "0.5rem",display:"inline-block" }}>
                {each.title.map((i)=>
              <Text fontSize="14px" style={{color:"#0BB5FF",marginBottom:"1rem"}}>{i}</Text>)}
            </li>
         
        </div>
          ))}
        </ul>
      </Box>
      <Box
        padding={{ lg: "2em", sm: "0.5em" }}
        margin="1em auto"
        textAlign="justify"
      >
      <Text paddingBottom="5px"  width="100%" borderBottom="1px solid"  fontWeight="bold" fontSize="2xl" textAlign="left"  marginBottom="1rem">
        Candidate
      </Text>
        <ul style={{columns:"3",listStyle:"none"}}>
          {Data.map((each) => (
              <div  style={{marginBottom:"1rem"}}>
                <h3 style={{fontWeight:"bold"}}>{each.heading}</h3>
            <li key={each.id} style={{ marginTop: "0.5rem",display:"inline-block" }}>
                {each.title.map((i)=>
              <Text fontSize="14px"  style={{color:"#0BB5FF",marginBottom:"1rem"}}>{i}</Text>)}
            </li>
         
        </div>
          ))}
        </ul>
      </Box>
    
    </TnPLayout>
);
}

export default  SiteMap;