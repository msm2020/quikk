import {
  FormControl,
  FormLabel,
  Input,
  // InputGroup,
  // Select,
} from "@chakra-ui/core";
import React from "react";

function DynoInput({ label, inputType, inputPH, name, value, onChange }) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      {/* <InputGroup> */}
      {/* <Select roundedRight="0" placeholder={selectPH}>
          {optionsArr.map((opt) => (
            <option value={opt.value} key={opt.label}>
              {opt.label}
            </option>
          ))}
        </Select> */}
      <Input
        name={name}
        value={value}
        type={inputType}
        placeholder={inputPH}
        onChange={onChange}
        // {...rest}
      />
      {/* </InputGroup> */}
    </FormControl>
  );
}

export default DynoInput;
