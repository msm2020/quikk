import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Text,
  Divider,
  SimpleGrid,
  RadioGroup,
  Radio,
  Checkbox,
  Stack,
  Grid,
  FormErrorMessage,
} from "@chakra-ui/core";
import React from "react";
import CardFooter from "../CardFooter";
import { useForm, Controller } from "react-hook-form";
import { useStoreActions, useStoreState } from "easy-peasy";
import { validateFns } from "../../../../../Functions/CreateCandidate/index";
import ReactSelect from "react-select";
import { getCountriesForSelect, getStatesForCountry } from "utils/countrystate";
import { options, tagIndex } from "../../../../../Data/Jobs/index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import { useHistory } from "react-router";
import { getKey } from "utils/getkey";
import user from "store/models/user.model";

function PersonalInfo() {
  const userState = useStoreState( state => state.userDetails);
  const [value, setValue] = React.useState()
  const [value1, setValue1] = React.useState()
  const [value2, setValue2] = React.useState()
  const [value3, setValue3] = React.useState()
  const { register, errors, control, watch, handleSubmit } = useForm();

  const watchPermCountry = watch("address.country");

  // const userState = useStoreState( state => state.userDetails);
  const { setPersonalDetails } = useStoreActions((actions) => ({
    setPersonalDetails: actions.setPersonalDetails,
  }));
  const history = useHistory();
  const url = "/candidate/create";
  const currentKey = tagIndex[history.location.pathname.replace(url, "")];
  const nextKey = url + getKey(currentKey, "next");

  const saveAndNext = (data) => {
    data.notice_period_fixed = data.notice_period_fixed=="fixed"?true: false;
    setPersonalDetails(data);
    console.log(data);
    history.push(nextKey);
  };
console.log(value2)
  return (
    <Box p="10">
      <Text fontSize="2xl" style={{color:"gray"}}>Info</Text>
      <Divider marginBottom="2em" style={{borderColor:"darkgray",border:"1px solid"}} />
      <form onSubmit={handleSubmit(saveAndNext)}>
        <SimpleGrid marginY="2em" minChildWidth="120px" spacing="1em">
          <FormControl isInvalid={errors.first_name}>
            <FormLabel style={{color:"gray"}} htmlFor="first_name">First Name</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
              name="first_name"
              placeholder="First Name"
              defaultValue ={userState.first_name}
              ref={register({ validate: validateFns.fName })}
            />
            {errors.first_name ? (
              <FormErrorMessage style={{ color: "#ff0000" }}>
                {errors.first_name.message}
              </FormErrorMessage>
            ) : (
              <FormHelperText>Your First Name...</FormHelperText>
            )}
          </FormControl>
          <FormControl isInvalid={errors.last_name}>
            <FormLabel style={{color:"gray"}} htmlFor="last_name">Last Name</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
              name="last_name"
              defaultValue ={userState.last_name}
              placeholder="Last Name"
              ref={register({
                validate: validateFns.lName,
              })}
            />
            {errors.last_name ? (
              <FormErrorMessage style={{ color: "#ff0000" }}>
                {errors.last_name.message}
              </FormErrorMessage>
            ) : (
              <FormHelperText>Your Last Name...</FormHelperText>
            )}
          </FormControl>
        </SimpleGrid>
        <SimpleGrid marginY="1em" minChildWidth="120px" spacing="1em">
          <FormControl isInvalid={errors.gender}>
            <FormLabel  my={2}style={{color:"gray"}} htmlFor="gender">Gender</FormLabel>
            <RadioGroup isInline spacing={4} name="gender"  onChange={e => setValue(e.target.value)} value={userState.gender?userState.gender:value}>
              <Radio
              className="radio1"
                name="gender"
                ref={register({ validate: validateFns.gender })}
                value="MALE"
              >
                Male
              </Radio>
              <Radio
              className="radio1"
                name="gender"
                ref={register({ validate: validateFns.gender })}
                value="FEMALE"
              >
                Female
              </Radio>
              <Radio
              className="radio1"
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
            <FormLabel my={2} style={{color:"gray"}} htmlFor="marital_status">Marital Status</FormLabel>
            <RadioGroup isInline spacing={4} name="marital_status"  onChange={e => setValue1(e.target.value)} value={userState.marital_status?userState.marital_status:value1}>
              <Radio className="radio1"  checked ={true} name="marital_status" value="SINGLE" ref={register} >
                Single
              </Radio>
              <Radio className="radio1"  name="marital_status" value="MARRIED" ref={register} >
                Married
              </Radio>
            </RadioGroup>
          </FormControl>
        </SimpleGrid>
        <FormControl marginY="2em" isInvalid={errors.dob}>
          <FormLabel style={{color:"gray"}} htmlFor="dob">DOB</FormLabel>
          <Controller
            name="dob"
            control={control}
            rules={{ validate: validateFns.dob }}
            // as={DatePicker}
            valueName="selected"
            // onChange={(date) => date}
            render={({ onChange, value, ref }) => (
              <DatePicker
                className="date-picker"
                ref={ref}
                isClearable
                selected={value}
                dateFormat="dd-MM-yyyy"
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
        <Text fontSize="2xl" style={{color:"gray"}}marginTop="2em">
          Contact Details
        </Text>
        <Divider marginBottom="2em" style={{borderColor:"darkgray",border:"1px solid"}} />
        
        <Grid
          marginY="2em"
          gridTemplateColumns={{sm:"none",xs:"none",md:"repeat(2,minmax(120px, 1fr))"}}
          gap="1em"
        >
          <FormControl>
            <FormLabel style={{color:"gray"}} htmlFor="address.address">Address</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
              placeholder="#123 Avenue, SM street"
              name="address.address"
              ref={register}
              defaultValue={userState.address.address}
            />
          </FormControl>
          <FormControl isInvalid={errors.address?.city}>
            <FormLabel style={{color:"gray"}} htmlFor="address.city">City</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
              placeholder="Bangalore"
              name="address.city"
              ref={register({ validate: validateFns.city })}
              defaultValue={userState.address.city}
            />
            {errors.address?.city && (
              <FormErrorMessage>{errors.address.city.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.address?.country}>
            <FormLabel style={{color:"gray"}}>Country</FormLabel>
            <Controller
              name="address.country"
              control={control}
              rules={{ validate: validateFns.country }}
              
              render={({ onChange, ref }) => (
                <ReactSelect
                
                  options={getCountriesForSelect()}
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
            <FormLabel style={{color:"gray"}}>State</FormLabel>
            <Controller
              name="address.state"
              control={control}
              rules={{ validate: validateFns.state }}
              render={({ onChange, ref }) => (
                <ReactSelect
                  options={
                    watchPermCountry &&
                    getStatesForCountry(watchPermCountry.value)
                  }
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
            <FormLabel style={{color:"gray"}} htmlFor="mobiles.0">Mobile No</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
              name="mobiles.0"
              placeholder="+91 9930203453"
              ref={register}
              defaultValue ={userState.mobiles[0]? userState.mobiles[0]:""}
            />
            <FormHelperText>Your Mobile Number...</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel style={{color:"gray"}} htmlFor="mobiles.1">Mobile No</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
              name="mobiles.1"
              placeholder="+91 9930203453"
              ref={register}
              defaultValue ={userState.mobiles[1]? userState.mobiles[1]:""}
            />
            <FormHelperText>Your Mobile Number...</FormHelperText>
          </FormControl>
        </Grid>

        <Text fontSize="2xl" style={{color:"gray"}} marginTop="2em">
          Salary Details
        </Text>
        <Divider marginBottom="2em" style={{borderColor:"darkgray",border:"1px solid"}} />
        <SimpleGrid marginY="2em" minChildWidth="120px" spacing="1em">
          <FormControl isInvalid={errors.current_salary}>
            <FormLabel style={{color:"gray"}} htmlFor="current_salary">Current Salary</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
              type="number"
              name="current_salary"
              placeholder="100000"
              ref={register({ validate: validateFns.current_salary })}
            />
            {errors.current_salary ? (
              <FormErrorMessage>
                {errors.current_salary.message}
              </FormErrorMessage>
            ) : (
              <FormHelperText>Enter your Current Salary</FormHelperText>
            )}
          </FormControl>
          <FormControl isInvalid={errors.expected_salary}>
            <FormLabel style={{color:"gray"}} htmlFor="expected_salary">Expected Salary</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
              name="expected_salary"
              placeholder="100000"
              ref={register({ validate: validateFns.current_salary })}
            />
            {errors.expected_salary ? (
              <FormErrorMessage>
                {errors.expected_salary.message}
              </FormErrorMessage>
            ) : (
              <FormHelperText>Enter your Expected Salary</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel style={{color:"gray"}}>Currency</FormLabel>
            <Controller
              name="currency"
              defaultValue={options.currency[0]}
              control={control}
              render={({ onChange, value, ref }) => (
                <ReactSelect
                  onChange={onChange}
                  className="currency"
                  options={options.currency}
                  ref={ref}
                  value={value}
                />
              )}
            />
          </FormControl>
         <FormControl style={{marginTop:"2rem"}}>
            <Checkbox className="radio1" name="salary_negotiable" ref={register} defaultIsChecked>
            Negotiable
            </Checkbox>
            </FormControl>
        </SimpleGrid>
        <Grid
          marginY="2em"
          gridTemplateColumns={{sm:"none",xs:"none",md:"repeat(4,minmax(120px, 1fr))"}}
          gap="1em"
        >
          <FormControl isInvalid={errors.notice_period}>
            <FormLabel style={{color:"gray"}}>Notice Period</FormLabel>
            <Controller
              name="notice_period"
              control={control}
              rules={{ validate: validateFns.notice_period }}
              render={({ onChange, ref }) => (
                <ReactSelect
                  options={options.notice_period}
                  onChange={(val) => onChange(val.value)}
                  ref={ref}
                />
              )}
            />
            {errors.notice_period && (
              <FormErrorMessage color="#ff0000">
                {errors.notice_period.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="notice_period_fixed"style={{color:"gray"}}>Notice Period *</FormLabel>
            <RadioGroup my={2} isInline spacing={4} name="notice_period_fixed"   onChange={e => setValue2(e.target.value=="fixed"?true:false)} value={value2}>
              <Radio className="radio1"  checked ={true} name="notice_period_fixed" ref={register}  value="fixed">
             Fixed
              </Radio>
              <Radio className="radio1"name="notice_period_fixed" ref={register}  value="Negotiable">
             Negotiable
              </Radio>
            </RadioGroup>
          </FormControl>
      {value2===false&&
          <FormControl>
            <FormLabel style={{color:"gray"}}>How Long (in Days)</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}} type="number" name="how_long" ref={register} />
          </FormControl>}
          <FormControl>
            <FormLabel htmlFor="alreadyserving"style={{color:"gray"}}>Already Serving</FormLabel>
            <RadioGroup my={2} isInline spacing={4} name="alreadyserving"   onChange={(e) => {setValue3(e.target.value)} }value={value3}>
              <Radio className="radio1"  checked ={true} name="alreadyserving" value="yes">
          Yes
              </Radio>
              <Radio className="radio1"name="alreadyserving" value="No" >
          No
              </Radio>
            </RadioGroup>
          </FormControl>
      {value3==="yes"&&
          <FormControl>
            <FormLabel style={{color:"gray"}}>Last Day of Working</FormLabel>
            <Controller
              name="last_working_day"
              control={control}
              render={({ onChange, value = new Date(), ref: innerRef }) => (
                <DatePicker
                  className="date-picker"
                  ref={innerRef}
                  isClearable
                  selected={value}
                  onChange={onChange}
                  showYearDropdown
                />
              )}
            />
          </FormControl>}
        </Grid>
        <CardFooter  />
      </form>
    </Box>
  );
}

export default PersonalInfo;
