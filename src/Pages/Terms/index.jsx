import { Box, Link, Text } from "@chakra-ui/core";
import React from "react";
import TnPLayout from "../../Components/TnPLayout";

const Data = [
  {
    id: "tnc",
    title: "PURPOSE",
    value:
      'Quiklyy is intended only to serve as a preliminary medium of contact and exchange of information for its users / members / visitors who have a bona fide intention to contact and/or be contacted for the purposes related to genuine existing job vacancies.'
  },
  {
    id: "dpa",
    title: "USE TO BE IN CONFORMITY WITH THE PURPOSE",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sunt doloremque optio consequatur perspiciatis cum earum totam ab quas ex eaque illo illum iure quasi possimus numquam suscipit odio nesciunt animi tenetur repudiandae perferendis voluptate. Non harum aspernatur facilis autem quibusdam molestiae labore! Hic itaque minus, repellat ducimus a earum officia, saepe accusantium, alias harum dolorum quas debitis! Praesentium qui vel doloremque autem eos laborum. Quisquam nisi accusantium minima optio dolorem velit ex, similique distinctio illo quibusdam debitis mollitia blanditiis iusto autem quasi animi obcaecati reiciendis ratione consequatur dolore quia officiis a sequi corporis? Fuga, ipsa maiores? Saepe, blanditiis quas.",
  },
  
];

function Terms() {
  return (
   
    <TnPLayout >
      
      <Text fontWeight="bold" fontSize="2.2rem" textAlign="center" margin= "0 0 2.8rem 0">
        Terms & Conditions
      </Text>
      <Box
        padding={{ lg: "2em", sm: "0.5em" }}
        margin="1em auto"
        textAlign="justify"
        marginBottom="-0.8rem"
      >
        <Text fontWeight= "600" fontSize="2xl">Table of Contents</Text>
        <ul >
          {Data.map((each) => (
            <li key={each.id} style={{ margin: "1em" }}>
              <Link style={{color:"#0BB5FF",fontWeight:"500"}}  href={`#${each.id}`}>{each.title}</Link>
            </li>
          ))}
        </ul>
      </Box>
      <Box >
        {Data.map((each) => (
          <Box
            p={{ lg: "5", sm: "0" }}
            marginY="1em"
            key={each.id}
            id={each.id}
          >
            <Text  fontWeight="600" fontSize="2xl">{each.title}</Text>
            <Text marginY="1em">{each.value}</Text>
          </Box>
        ))}
      </Box>
    </TnPLayout>
  );
}

export default Terms;
