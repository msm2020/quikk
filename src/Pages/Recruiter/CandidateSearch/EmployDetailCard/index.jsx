import { Box, FormLabel, Grid, Input, Select, Stack } from "@chakra-ui/core";
import React from "react";

function EmployDetailCard() {
  return (
    <Box padding="1em">
      <Grid templateColumns="0.5fr 2fr" gap="1em">
        <FormLabel>Industry</FormLabel>
        <Box>
          <Input placeholder="Select Industry or start typing" />
          {/* React select */}
        </Box>
        <FormLabel>Employers</FormLabel>
        <Stack isInline>
          <Input placeholder="Company Name" />
          <Select maxW="160px" defaultValue="current">
            <option value="current">Current Employer</option>
            <option value="previous">Previous Employer</option>
            <option value="any">Any Employer</option>
          </Select>
        </Stack>
        <FormLabel>Exclude Employers</FormLabel>
        <Stack isInline>
          <Input placeholder="Company Name" />
          <Select maxW="160px" defaultValue="current">
            <option value="current">Current Employer</option>
            <option value="previous">Previous Employer</option>
            <option value="any">Any Employer</option>
          </Select>
        </Stack>
        <FormLabel>Designation</FormLabel>
        <Stack isInline>
          <Input placeholder="Designation" />
          <Select maxW="160px" defaultValue="current">
            <option value="current">Current Designation</option>
            <option value="previous">Previous Designation</option>
            <option value="any">Any Designation</option>
          </Select>
        </Stack>
        <FormLabel>Notice Period</FormLabel>
        <Stack isInline>
          <Input placeholder="Type here or select" />
          {/* React select */}
          <Select maxW="160px" defaultValue="negotiable">
            <option value="negotiable">Negotiable</option>
            <option value="fixed">Fixed</option>
          </Select>
        </Stack>
      </Grid>
    </Box>
  );
}

export default EmployDetailCard;
