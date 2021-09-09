import { Box } from "@chakra-ui/core";
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function FormDatePicker({
  // date, setDate,
  ...rest
}) {
  return (
    <Box>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        // selected={date}
        // onChange={(d) => setDate(d)}
        {...rest}
      />
    </Box>
  );
}

export default FormDatePicker;
