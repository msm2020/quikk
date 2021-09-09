import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Radio,
  RadioGroup,
} from "@chakra-ui/core";
import { validateFns } from "Functions/CreateCandidate";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { getCountriesForSelect, getStatesForCountry } from "utils/countrystate";
import countrystate from "countrycitystatejson";
import { LanguageInput } from "../../EditProfile/OtherDetails/index";
import { updateData } from "../ProfilePageContainer";

const getCountry = (short) => {
  const country = countrystate.getCountryInfoByShort(short);
  console.log("coun", country);
  return { value: short, label: country.name };
};

const getState = (short = "IN", state) => {
  const states = countrystate.getStatesByShort(short);
  const finalState = states
    ? states.filter((each) => each.toLowerCase() === state)[0]
    : null;
  return finalState
    ? { value: finalState.toLowerCase(), label: finalState }
    : finalState;
};
const modifiedLang = (lang) => {
  let newLang = [...lang];
  newLang =
    newLang.length > 0 &&
    newLang.map((each) => ({
      ...each,
      proficiency: each.proficiency.value,
    }));
  return newLang;
};

function PersonalCard({
  register,
  control,
  errors,
  onClose,
  watch,
  handleSubmit,
  user,
}) {
  //   const user = useContext(ViewProfileContext);
  const addressKeys = Object.keys(user.address).length;
  const demoDV = {
    language: "",
    proficiency: "BEGINNER",
    read: false,
    write: false,
    speak: false,
  };

  const watchPermCountry = watch("address.country", {
    value: "IN",
    label: "India",
  });
  console.log("watch", watchPermCountry);
  const [lang, setLang] = useState(user && user.languages);
  const [emptyAlert, setEmptyAlert] = useState(false);
  const addLang = () => setLang([...lang, demoDV]);
  const removeLang = () => {
    let tempLang = [...lang];
    tempLang.length >= 2 ? tempLang.pop() : setEmptyAlert(true);
    setLang(tempLang);
  };
  const handleSave = (data) => {
    const { address, languages, ...restData } = data;
    console.log(data);
    updateData(
      {
        ...user,
        ...restData,
        address: {
          ...address,
          country: address.country.value,
          state: address.state.value,
        },
        languages: languages && modifiedLang(languages),
      },
      onClose
    );
  };
  // userData = {...user, ...data}
  return (
    <Box>
      <ModalHeader>Personal Details</ModalHeader>
      <ModalCloseButton onClick={onClose} />
      <ModalBody marginBottom="1em" >
        {emptyAlert && (
          <Alert status="warning">
            <AlertIcon />
            <AlertTitle mr={2}>Minimum One Language must be there</AlertTitle>
          </Alert>
        )}
        <form onSubmit={handleSubmit(handleSave)}>
          <Grid
          display="block"
            templateColumns="repeat(auto-fit, minmax(120px, 1fr))"
            gap="1em"
            alignItems="flex-start"
          >
            <FormControl marginY="2em" isInvalid={errors.dob}>
              <FormLabel htmlFor="dob">DOB</FormLabel>
              <Controller
                name="dob"
                control={control}
                rules={{ validate: validateFns.dob }}
                defaultValue={user.dob ? new Date(user.dob) : null}
                valueName="selected"
                render={({ onChange, value, ref }) => (
                  <ReactDatePicker
                    className="date-picker"
                    ref={ref}
                    isClearable
                    selected={value}
                    dateFormat="yyyy-MM-dd"
                    onChange={onChange}
                    showYearDropdown
                  />
                )}
              />
              {errors.dob && (
                <FormErrorMessage color="#ff0000">
                  {errors.dob.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.gender}>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <RadioGroup
                display="grid"
                style={{gridGap:"1em",gridTemplateColumns: "repeat(3, minmax(120px, 1fr))"}}
                spacing={4}
                name="gender"
                defaultValue={user.gender ? user.gender : null}
              >
                <Radio
                  name="gender"
                  ref={register({ validate: validateFns.gender })}
                  value="MALE"
                >
                  Male
                </Radio>
                <Radio
                  name="gender"
                  ref={register({ validate: validateFns.gender })}
                  value="FEMALE"
                >
                  Female
                </Radio>
                <Radio
                  name="gender"
                  ref={register({ validate: validateFns.gender })}
                  value="other"
                >
                  Other
                </Radio>
              </RadioGroup>
              {errors.gender && (
                <FormErrorMessage style={{ color: "#ff0000" }}>
                  {errors.gender.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.marital_status}>
              <FormLabel htmlFor="marital_status">Marital Status</FormLabel>
              <RadioGroup
                 display="grid"
                 style={{gridGap:"1em",gridTemplateColumns: "repeat(3, minmax(120px, 1fr))"}}
                spacing={4}
                name="marital_status"
                defaultValue={user.marital_status ? user.marital_status : null}
              >
                <Radio name="marital_status" value="SINGLE" ref={register}>
                  Single
                </Radio>
                <Radio name="marital_status" value="MARRIED" ref={register}>
                  Married
                </Radio>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            marginY="2em"
            gridTemplateColumns="repeat(2,minmax(120px, 1fr))"
            gap="1em"
          >
            <FormControl>
              <FormLabel htmlFor="address.address">Address</FormLabel>
              <Input
                placeholder="#123 Avenue, SM street"
                name="address.address"
                defaultValue={addressKeys ? user.address.address : ""}
                ref={register}
              />
            </FormControl>
            <FormControl isInvalid={errors.address?.city}>
              <FormLabel htmlFor="address.city">City</FormLabel>
              <Input
                placeholder="Bangalore"
                name="address.city"
                defaultValue={addressKeys ? user.address.city : ""}
                ref={register({ validate: validateFns.city })}
              />
              {errors.address?.city && (
                <FormErrorMessage>
                  {errors.address.city.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.address?.country}>
              <FormLabel>Country</FormLabel>
              <Controller
                name="address.country"
                control={control}
                defaultValue={
                  addressKeys ? getCountry(user.address.country || "IN") : "IN"
                }
                rules={{ validate: validateFns.country }}
                render={({ onChange, value, ref }) => (
                  <ReactSelect
                    options={getCountriesForSelect()}
                    value={value}
                    isClearable
                    onChange={(val) => onChange(val)}
                    ref={ref}
                  />
                )}
              />
              {errors.address?.country && (
                <FormErrorMessage>
                  {errors.address.country.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.address?.state}>
              <FormLabel>State</FormLabel>
              <Controller
                name="address.state"
                control={control}
                rules={{ validate: validateFns.state }}
                defaultValue={
                  addressKeys
                    ? getState(watchPermCountry.value, user.address.state)
                    : ""
                }
                render={({ onChange, value, ref }) => (
                  <ReactSelect
                    options={
                      // addressKeys ?
                      watchPermCountry &&
                      getStatesForCountry(watchPermCountry.value)
                    }
                    isClearable
                    value={value}
                    onChange={(val) => onChange(val.value)}
                    ref={ref}
                  />
                )}
              />
              {errors.address?.state && (
                <FormErrorMessage>
                  {errors.address.state.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <Checkbox
                name="physically_chalngd"
                defaultIsChecked={user && user.physically_chalngd}
                ref={register}
              >
                Is Physically Challenged
              </Checkbox>
            </FormControl>
          </Grid>
          {lang.length > 0 &&
            lang.map((each, index) => (
              <LanguageInput
                key={each.language_id}
                defaultValues={each}
                index={index}
                control={control}
                register={register}
              />
            ))}
          <ButtonGroup>
            <Button
              leftIcon="delete"
              variant="ghost"
              variantColor="red"
              onClick={removeLang}
            >
              Remove Language
            </Button>
            <Button leftIcon="add" onClick={addLang}>
              Add Language
            </Button>
            <Button type="submit" variantColor="teal" rightIcon="arrow-right">
              Submit
            </Button>
          </ButtonGroup>
        </form>
      </ModalBody>
    </Box>
  );
}

export default PersonalCard;
