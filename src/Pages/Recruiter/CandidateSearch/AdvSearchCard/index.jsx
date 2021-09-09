import {
  Box,
  Checkbox,
  FormLabel,
  Grid,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";

function AdvSearchCard() {
  return (
    <Box padding="1em">
      <Grid templateColumns="0.5fr 2fr" gap="1em">
        <FormLabel>Primary Skills (must have)</FormLabel>
        <Box>
          <Input placeholder="Mandatory Skills, Designation role separated by comma" />
        </Box>
        <FormLabel>Secondary Skills (optional)</FormLabel>
        <Box>
          <Input placeholder="Optional Skills, Designation role separated by comma" />
        </Box>
        <FormLabel>Excluding Keywords</FormLabel>
        <Stack isInline>
          <Input
            maxW="400px"
            placeholder="Skills, Designation separated by comma"
          />
          <Select variant="flushed" maxW="160px" defaultValue="entire">
            <option value="entire">Search in the Entire resume</option>
            <option value="start">Search in the Start of resume</option>
            <option value="end">Search in the End of resume</option>
          </Select>
        </Stack>
        <FormLabel>Total Experience</FormLabel>
        <Stack isInline>
          <Stack>
            <Text>Minimum</Text>
            <Stack isInline>
              <Input maxW="140px" placeholder="in Years" />
              <Input maxW="140px" placeholder="in Months" />
            </Stack>
          </Stack>
          <Stack>
            <Text>Maximum</Text>
            <Stack isInline>
              <Input maxW="140px" placeholder="in Years" />
              <Input maxW="140px" placeholder="in Months" />
            </Stack>
          </Stack>
        </Stack>
        <FormLabel>Current Salary</FormLabel>
        <Stack isInline align="center">
          <NumberInput>
            <NumberInputField placeholder="in lakhs" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput>
            <NumberInputField placeholder="in thousands" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text>To </Text>
          <NumberInput>
            <NumberInputField placeholder="in lakhs" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput>
            <NumberInputField placeholder="in thousands" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select maxW="160px" defaultValue="rupee">
            <option value="rupee">Rs (INR)</option>
            <option value="dollar">Dollars (USD)</option>
            <option value="pound">Pounds (UK)</option>
          </Select>
        </Stack>
        <FormLabel>Expected Salary</FormLabel>
        <Stack isInline align="center">
          <NumberInput>
            <NumberInputField placeholder="in lakhs" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput>
            <NumberInputField placeholder="in thousands" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text>To </Text>
          <NumberInput>
            <NumberInputField placeholder="in lakhs" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput>
            <NumberInputField placeholder="in thousands" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select maxW="160px" defaultValue="rupee">
            <option value="rupee">Rs (INR)</option>
            <option value="dollar">Dollars (USD)</option>
            <option value="pound">Pounds (UK)</option>
          </Select>
        </Stack>
        <FormLabel>Current Location</FormLabel>
        <Stack isInline>
          <Input placeholder="Type or select location from list" />
          <Checkbox>Preferred location is same as Current</Checkbox>
        </Stack>
      </Grid>
    </Box>
  );
}

export default AdvSearchCard;
