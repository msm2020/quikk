import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/core";
import React from "react";
import EditorContainer from "../../../../../Components/Editor";

import DetailCard from "../DetailCard";

function JobPosting() {
  return (
    <Box py="5">
      <DetailCard>
        <SimpleGrid minChildWidth="120px" spacing="1em">
          <FormControl isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input placeholder="Type job title" />
          </FormControl>
          <FormControl>
            <FormLabel>Department</FormLabel>
            <Select placeholder="Select Department">
              <option value="it">IT</option>
              <option value="comps">Comps</option>
              <option value="ece">ECE</option>
              <option value="arts">Arts</option>
            </Select>
          </FormControl>
        </SimpleGrid>
      </DetailCard>
      <DetailCard>
        <FormControl isRequired>
          <FormLabel>Job Description</FormLabel>
          <EditorContainer />
        </FormControl>
        <FormControl isRequired py="5">
          <FormLabel>Job Requirements</FormLabel>
          <EditorContainer />
        </FormControl>
      </DetailCard>
      <DetailCard>
        <Text fontSize="lg" fontWeight="700" mb="2">
          Job Location
        </Text>
        <SimpleGrid minChildWidth="120px" spacing="1em">
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select Country">
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="china">China</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>State / Region</FormLabel>
            <Select placeholder="Select Country">
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="china">China</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input placeholder="Type City" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Zip Code</FormLabel>
            <Input placeholder="Type Zip Code" />
          </FormControl>
        </SimpleGrid>
      </DetailCard>
      <DetailCard>
        <Text fontSize="lg" fontWeight="700" mb="2">
          Job Details
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap="1em" alignItems="center">
          <FormControl isRequired>
            <FormLabel>Employment Type</FormLabel>
            <Select placeholder="Select Type">
              <option value="india">Part-Time</option>
              <option value="usa">Full-Time</option>
              <option value="uk">Temporary</option>
              <option value="china">Contract</option>
              <option value="internship">Internship</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Experience Required</FormLabel>
            <Select placeholder="Select Experience">
              <option value="india">0-2 Years</option>
              <option value="usa">2-4 Years</option>
              <option value="uk">4-6 Years</option>
              <option value="china">6+ Years</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Required Education</FormLabel>
            <Select placeholder="Select Education">
              <option value="india">High School Course Work</option>
              <option value="usa">High School or Equivalent</option>
              <option value="uk">Vocational</option>
              <option value="china">Bachelor's Degree</option>
              <option value="china">Master's Degree</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="with-specialisation">
              With Specialisation
            </FormLabel>
            <Stack>
              <Switch id="with-specialisation" />
            </Stack>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Skills Required</FormLabel>
            <Input placeholder="Add Skills separated by comma" />
          </FormControl>
          <FormControl>
            <FormLabel>Working Hours per Week</FormLabel>
            <Flex align="center">
              <Input type="number" placeholder="30" />
              <Text as="i" m="2">
                {" "}
                To{" "}
              </Text>
              <Input type="number" placeholder="40" />
              <Text as="i" m="2">
                {" "}
                Hours{" "}
              </Text>
            </Flex>
          </FormControl>
          <FormControl>
            <FormLabel>Salary Offered</FormLabel>
            <Stack isInline>
              <Select placeholder="Select Currency">
                <option value="india">INR</option>
                <option value="usa">USD</option>
              </Select>
              <Flex>
                <Input placeholder="in Lakhs" />
                <Input placeholder="in Thousands" />
              </Flex>
              <Flex>
                <Input placeholder="in Lakhs" />
                <Input placeholder="in Thousands" />
              </Flex>
            </Stack>
          </FormControl>
        </Grid>
      </DetailCard>
    </Box>
  );
}

export default JobPosting;
