import {
  Box,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Grid,
  Select,
  Stack,
} from "@chakra-ui/core";
import React from "react";

function AdditionDetailCard() {
  return (
    <Box padding="1em">
      <Grid templateColumns="0.5fr 2fr" gap="1em">
        <FormLabel>Candidate Category</FormLabel>
        <CheckboxGroup>
          <Checkbox>Search Male Candidates only</Checkbox>
          <Checkbox>Search Female Candidates only</Checkbox>
          <Checkbox>Search Differently Abled Candidates only</Checkbox>
        </CheckboxGroup>
        <FormLabel>Candidate Age</FormLabel>
        <Stack isInline>
          <Select placeholder="From">
            <option value="2020">20</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </Select>
          <Select placeholder="To">
            <option value="2020">30</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </Select>
          {/* React Select here */}
        </Stack>
        <FormLabel>Work Status for</FormLabel>
        <Stack isInline>
          <Select placeholder="Country">
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
          </Select>
        </Stack>
        <FormLabel>Work Permit for</FormLabel>
        <Stack isInline>
          <Select placeholder="Select Countries">
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
          </Select>
        </Stack>
        {/* React Select here */}
      </Grid>
    </Box>
  );
}

export default AdditionDetailCard;
