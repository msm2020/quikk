import { Box, Button, SimpleGrid } from "@chakra-ui/core";
import React, { useState } from "react";
import DynoInput from "../DynoInput";

const LandlineOptions = [
  {
    value: "91",
    label: "+91 (India)",
  },
  {
    value: "44",
    label: "+44 (UK)",
  },
  {
    value: "61",
    label: "+61 (Australia)",
  },
];
function AddDynoInput() {
  const [dynInp, setDynInp] = useState([]);
  const handleDynInp = (e) => {
    e.preventDefault();
    setDynInp([...dynInp, DynoInput]);
    if (dynInp.length > 2) {
      setDynInp([]);
    }
  };
  const decreaseDynInp = (e) => {
    e.preventDefault();
    setDynInp(dynInp.slice(0, dynInp.length - 1));
  };
  return (
    <Box>
      <SimpleGrid
        marginY={dynInp.length > 0 ? "2em" : "0em"}
        minChildWidth="120px"
        spacing="1em"
      >
        {dynInp.length > 0 &&
          dynInp.length < 3 &&
          dynInp.map((Dyn, i) => (
            <Dyn
              input="tel"
              key={`addPhone${i + 1}`}
              label={`Additional Phone ${++i}`}
              inputPH="9293024532"
              optionsArr={LandlineOptions}
            />
          ))}
      </SimpleGrid>
      <Box>
        {dynInp.length > 0 && dynInp.length < 3 ? (
          <SimpleGrid marginY="1em" minChildWidth="120px" spacing="1em">
            <Button leftIcon="add" onClick={handleDynInp}>
              Add Phone
            </Button>
            <Button leftIcon="minus" onClick={decreaseDynInp}>
              Remove Phone
            </Button>
          </SimpleGrid>
        ) : (
          <Button leftIcon="add" marginY="1em" onClick={handleDynInp}>
            Add Phone
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default AddDynoInput;
