import { FormControl, FormLabel } from "@chakra-ui/core";
import ReactSelect from "react-select";
import React from "react";
import { options } from "Data/Jobs";

function CurrencyInput() {
  return (
    <FormControl>
      <FormLabel>Currency</FormLabel>
      <ReactSelect options={options.currency} />
    </FormControl>
  );
}

export default CurrencyInput;
