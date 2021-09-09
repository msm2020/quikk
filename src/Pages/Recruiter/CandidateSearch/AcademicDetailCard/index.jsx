import { Text } from "@chakra-ui/core";
import {
  Box,
  Button,
  FormLabel,
  Grid,
  IconButton,
  Input,
  RadioButtonGroup,
  Select,
  Stack,
} from "@chakra-ui/core";
// import { AddIcon } from '@chakra-ui/icons';
import React from "react";

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;

  return (
    <Button
      ref={ref}
      variantColor={isChecked ? "green" : "gray"}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  );
});

function AcademicDetailCard() {
  return (
    <Box padding="1em">
      <Grid templateColumns="0.5fr 2fr" gap="1em">
        <FormLabel>UG Qualification</FormLabel>
        <RadioButtonGroup
          isInline
          // onChange={(val) => console.log(val)}
          defaultValue="rad1"
        >
          <CustomRadio value="rad1">Any UG Qualification</CustomRadio>
          <CustomRadio value="rad2">Specific UG Qualification</CustomRadio>
          <CustomRadio value="rad3">UG Not Compulsory</CustomRadio>
        </RadioButtonGroup>
        <FormLabel>Institute Name</FormLabel>
        <Stack isInline>
          <Input placeholder="Type here or select" />
          {/* React Select here */}
        </Stack>
        <FormLabel>Education Type</FormLabel>
        <Stack isInline>
          <Input placeholder="Type here or select" />
          {/* React Select here */}
        </Stack>
        <FormLabel>Specialization Type</FormLabel>
        <Stack isInline>
          <Input placeholder="Type here or select" />
          {/* React Select here */}
        </Stack>
        <FormLabel>Year of Graduation</FormLabel>
        <Stack isInline>
          <Select placeholder="From">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </Select>
          <Select placeholder="To">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </Select>
          {/* React Select here */}
        </Stack>
      </Grid>
      <Stack isInline align="center">
        <IconButton rounded="full" boxShadow="lg" icon="add" />
        <Text>Add PG Qualifications</Text>
      </Stack>
      <Stack isInline align="center">
        <IconButton rounded="full" boxShadow="lg" icon="add" />
        <Text>Add Doctorate</Text>
      </Stack>
    </Box>
  );
}

export default AcademicDetailCard;
