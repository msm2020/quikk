import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
  Stack,
  Text,
  Select,
  Flex,
  RadioButtonGroup,
  ModalFooter,
  Grid,
  SimpleGrid,
  FormHelperText,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";
import ReactSelect from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

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

function AdvancedSearch({ isOpen, onOpen, onClose }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [selectValues, setSelectedValues] = useState([]);
  // const handleSelectedValues = () => {
  //     let newSelectValues = [...selectValues,];

  //     setSelectedValues(newSelectValues);

  //   //   if(selectValues.includes(e.target.value)){
  //   //       newSelectValues = selectValues.filter(element => element !== e.target.value);
  //   //       setSelectedValues(newSelectValues);
  //   //   }

  //   }

  // console.log(selectValues);
  return (
    <div >
      {/* <Button onClick={onOpen}>Open Model</Button> */}
      <Modal  size="xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxWidth="900px" backgroundColor="white" color="black">
          <ModalHeader color="black" textAlign="center">
            Advanced Search
          </ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody>
            <Box p="4">
              <Grid
                templateColumns="repeat(auto-fit,minmax(120px, 1fr))"
                gap="1em"
              >
                <Input placeholder="Skills, Designation, Companies" />
                <Input placeholder="Location / Locality" />
              </Grid>
              <Grid
                my="5"
                templateColumns="repeat(auto-fit,minmax(120px, 1fr))"
                gap="1em"
              >
                <FormControl>
                  <FormLabel color="grey">Work Experience</FormLabel>
                  <Flex>
                    <Input type="text" list="experience" defaultValue="0-1 year" />

                    <datalist id="experience">
                      <option value="0-1 year" />
                      <option value="1-2year" />
                    </datalist>


                  </Flex>
                </FormControl>
                <FormControl style={{marginTop: window.innerWidth>368 &&  window.innerWidth<=378 ?"1.5rem":null}}>
                  <FormLabel color="grey">Expected Salary</FormLabel>
                  <Flex>

                    <Input type="text" list="salary" defaultValue="2.4LPA" />

                    <datalist id="salary">
                      <option value="2.4LPA" />
                      <option value="3.6LPA" />
                    </datalist>

                  </Flex>
                </FormControl>
              </Grid>

              <Stack my="3">
                <FormControl>
                  <FormLabel color="grey">Industry</FormLabel>
                  <ReactSelect options={options} isMulti />
                  <FormHelperText>
                    You can select upto 2 industries.
                  </FormHelperText>
                </FormControl>
                {/* <select
                //   value={selectValues}
                  placeholder="Select the industry where you want to work"
                  multiple
                  onChange={handleSelectedValues}
                >
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="chennai">Chennai</option>
                </select> */}
              </Stack>
              <SimpleGrid my="5" minChildWidth="120px" spacing="1em">
                <Stack>
                  <Text color="grey">Job Type</Text>
                  <RadioButtonGroup
                    defaultValue="rad1"
                    // onChange={(val) => console.log(val)}
                    isInline
                  >
                    <CustomRadio marginTop="1rem" value="rad1">All Jobs</CustomRadio>
                    <CustomRadio marginTop="1rem" value="rad2">Company Jobs</CustomRadio>
                    <CustomRadio marginTop="1rem" value="rad3">Agency Jobs</CustomRadio>
                  </RadioButtonGroup>
                </Stack>
                <Stack>
                  <Text color="grey">Sort By</Text>
                  <RadioButtonGroup
                    defaultValue="rad1"
                    // onChange={(val) => console.log(val)}
                    isInline
                  >
                    <CustomRadio marginTop="1rem" value="rad1">Relevance</CustomRadio>
                    <CustomRadio marginTop="1rem" value="rad2">Freshness</CustomRadio>
                  </RadioButtonGroup>
                </Stack>
              </SimpleGrid>
            </Box>
          </ModalBody>
          <ModalFooter marginX="1.05rem">
            <Button width="100%" variantColor="green">
              Search
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AdvancedSearch;
