import {
  Box,
  Grid,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Button,
  useDisclosure,
} from "@chakra-ui/core";
import React, { useContext } from "react";
import CreatableSelect from "react-select/creatable";
import { JobSearchCtx as Ctx } from "../JobSearch.Context";
import LoadingButton from "Components/Core/LoadingButton";
import AdvancedSearch from "Pages/HomePage/AdvancedSearch/AdvancedSearch";
import { onSelectChange } from "utils/filters";

function CreateableInput(props) {
  const components = {
    DropdownIndicator: () => null,
    Menu: () => null,
    MenuList: () => null,
  };

  return <CreatableSelect components={components} {...props} />;
}

function SearchInputs({yes}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    handlers: { postSearchQuery, setFilters },
    state: { processing },
  } = useContext(Ctx);

  return (
    <>
    <Box
      data-test-id="job-search-input-container"
      p="10"
      backgroundColor="#293c43"
      display={{sm:"block",xs:"block",md:"none",lg:"none"}}
    >
      <form  onSubmit={handleSubmit(postSearchQuery)}>
        <Grid
          gap="0.5em"
          alignItems="flex-end"
          templateColumns="repeat(auto-fit, minmax(130px, 1fr))"
        >
          <FormControl style={{ fontSize:"14px"}} isRequired>
            <FormLabel htmlFor="skills" color="white" fontSize="md">
              Search
            </FormLabel>
            <CreateableInput
            style={{fontSize:"12px"}}
              name="skills"
              placeholder="Skills, Designation, Companies"
              onChange={onSelectChange(setFilters)}
              isClearable
              isMulti
            />
          </FormControl>
          <FormControl style={{ fontSize:"14px"}} isRequired>
            <FormLabel htmlFor="location" color="white" fontSize="md">
              Location
            </FormLabel>
            <CreateableInput
            style={{fontSize:"12px"}}
              isMulti
              isRequired
              isClearable
              name="location"
              placeholder="Location"
              onChange={onSelectChange(setFilters)}
            />
          </FormControl>
          <FormControl style={{ fontSize:"14px"}}>
            <FormLabel htmlFor="experience" color="white" fontSize="md">
              Experience
            </FormLabel>
            <Input style={{fontSize:"12px"}}
              name="experience"
              placeholder="Experience (Years)"
              ref={register}
            />
          </FormControl>
          <FormControl style={{ fontSize:"14px"}}>
            <FormLabel htmlFor="salary" color="white" fontSize="md">
              Salary
            </FormLabel>
            <Input style={{fontSize:"12px"}} ref={register} name="salary" placeholder="Salary (Lakhs)" />
          </FormControl>
          <Stack className="submit-section">
            <LoadingButton
              type="submit"
              text="Search"
              variantColor="green"
              data-test-id="initiate-job-search"
              loading={processing}
            />
            {/* // TODO: Gradually enable advanced search. */}
            <Button size="sm" variant="link" onClick={onOpen}>
              Advanced Search
            </Button>
            {/* <Text fontSize="md">Advanced Search</Text> */}
          </Stack>
        </Grid>
        <AdvancedSearch isOpen={isOpen} onClose={onClose} />
      </form>
    </Box>

    <Box
    display={{sm:"none",xs:"none",md:"block",lg:"block"}}
    style={{ marginTop: yes?"52px":"none"
      }}
      data-test-id="job-search-input-container"
      p="10"
      backgroundColor="#293c43"
    >
      <form onSubmit={handleSubmit(postSearchQuery)}>
        <Grid
          gap="0.5em"
          alignItems="flex-end"
          templateColumns="repeat(auto-fit, minmax(130px, 1fr))"
        >
          <FormControl  style={{ fontSize:"14px",width:"150%"}}isRequired>
            <FormLabel htmlFor="skills" color="white" fontSize="md">
              Search
            </FormLabel>
            <CreateableInput
            style={{fontSize:"12px"}}
              name="skills"
              placeholder="Skills, Designation, Companies"
              onChange={onSelectChange(setFilters)}
              isClearable
              isMulti
            />
          </FormControl>
          <FormControl  style={{ fontSize:"14px",width:"100%",marginLeft:"50%"}} isRequired>
            <FormLabel htmlFor="location" color="white" fontSize="md">
              Location
            </FormLabel>
            <CreateableInput
            style={{fontSize:"12px"}}
              isMulti
              isRequired
              isClearable
              name="location"
              placeholder="Location"
              onChange={onSelectChange(setFilters)}
            />
          </FormControl>
          <FormControl  style={{ fontSize:"14px",width:"95%",marginLeft:"50%"}}>
            <FormLabel htmlFor="experience" color="white" fontSize="md">
              Experience
            </FormLabel>
            <Input style={{fontSize:"12px"}}
              name="experience"
              placeholder="Experience (Years)"
              ref={register}
            />
          </FormControl>
          <FormControl  style={{ fontSize:"14px",width:"95%",marginLeft:"45%"}}>
            <FormLabel htmlFor="salary" color="white" fontSize="md">
              Salary
            </FormLabel>
            <Input style={{fontSize:"12px"}} ref={register} name="salary" placeholder="Salary (Lakhs)" />
          </FormControl>
          <Stack style={{width:"70%",marginLeft:"40%",position:"relative",top:"24px"}} className="submit-section">
            <LoadingButton
            style={{background:"#09ae36"}}
              type="submit"
              text="Search"
              variantColor="green"
              data-test-id="initiate-job-search"
              loading={processing}
            />
            {/* // TODO: Gradually enable advanced search. */}
            <Button size="sm" variant="link" onClick={onOpen}>
              Advanced Search
            </Button>
            {/* <Text fontSize="md">Advanced Search</Text> */}
          </Stack>
        </Grid>
        <AdvancedSearch isOpen={isOpen} onClose={onClose} />
      </form>
    </Box>
    </>
  );
}

export default SearchInputs;
