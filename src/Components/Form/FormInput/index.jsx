import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/core";
import React from "react";
// import {useFormContext } from "react-hook-form";

const FormInput = ({ label, name, helperText, placeholder }) => {
  // const { register } = useFormContext();
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        type="text"
        // id={name}
        aria-describedby={`${name}-helper-text`}
        name={name}
        // ref={inputRef}
      />
      <FormHelperText id={`${name}-helper-text`}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default FormInput;
