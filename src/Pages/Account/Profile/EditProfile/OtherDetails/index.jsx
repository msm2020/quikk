import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Icon,
  IconButton,
  Image,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/core";
import React, { useState } from "react";
import CardFooter from "../CardFooter";
import LinkedIn from "../../../../../static/assets/icons/LI-In-Bug.png";
import Behance from "../../../../../static/assets/icons/behance22.png";
import Git from"../../../../../static/assets/icons/git2.png";
import Web from"../../../../../static/assets/icons/web22.png";
import { options } from "Data/Jobs";
import ReactSelect from "react-select";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Controller, useForm } from "react-hook-form";
import api from "Http/httpService";
import ConfirmModal from "../ConfirmModal";
import { useHistory } from "react-router";
//import { findVal } from "../ProfessionalDetails";
import { BACKEND_URL } from "../../../../../constants";

export const LanguageInput = ({ index, control, register, defaultValues }) => {
  const[opacity,setOpacity] = useState()
  // console.log('defv', defaultValues)
  // const defaultValues = {
  //   language: "",
  //   proficiency: "BEGINNER",
  //   read: false,
  //   write: false,
  //   speak: false,
  // };
  let languageKeys = Object.keys(defaultValues || {}).length;
  // useEffect(() => {
  // languageKeys = Object.keys(defaultValues || {}).length;
  // },[])
  // console.log('de',defaultValues)

  return (
    <Grid
      marginY="2em"
      templateColumns="repeat(auto-fit, minmax(120px, 1fr))"
      gap="1em"
      display={opacity===index?"none":"grid"}
    >
        <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
        name={`languages.${index}.language`}
        defaultValue={languageKeys ? defaultValues.language : ""}
        ref={register}
        type="text"
        placeholder="English"
      />
      
      <Controller
        defaultValue={options.proficiency.value}
        name={`languages.${index}.proficiency`}
        control={control}
        render={({ onChange, value, ref }) => (
          <ReactSelect
            ref={ref}
            options={options.proficiency}
            onChange={(val) => onChange(val.value)}
          />
        )}
      />
      <Checkbox
        defaultIsChecked={languageKeys ? defaultValues.read : false}
        name={`languages.${index}.read`}
        ref={register}
      >
        Read
      </Checkbox>
      <Checkbox
        defaultIsChecked={languageKeys ? defaultValues.write : false}
        name={`languages.${index}.write`}
        ref={register}
      >
        Write
      </Checkbox>
      <Checkbox
        defaultIsChecked={languageKeys ? defaultValues.speak : false}
        name={`languages.${index}.speak`}
        ref={register}
      >
        Speak
      </Checkbox>
      <IconButton
      style={{boxShadow:"none",color:"green",background:"white", opacity: index===0?"0":"1"}}
              marginLeft="1em"
          
             onClick={()=>{setOpacity(index)}}
              icon="delete"
              boxShadow="lg"
              padding="0"
              isDisabled={index===0&&true}
              borderRadius="50%"
            />
    </Grid>
  );
};

function OtherDetails() {
  const toast = useToast();
  const demoLang = {
    language: "",
    proficiency: "BEGINNER",
    read: false,
    write: false,
    speak: false,
  };
  const history = useHistory();
  const [lang, setLang] = useState([demoLang]);
  const[value,setValue] = useState()
  const[value1,setValue1] = useState()
  const[value3,setValue3] = useState()
  const[n,setValueN] = useState(0)
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      languages: [demoLang],
    },
  });

  const [confirmDialogOpen, setConfirmDialog] = useState(false);

  const addLang = () => {
    setLang([...lang, demoLang]);
  };
  const userDetails = useStoreState((state) => state.userDetails);
  const setOtherDetails = useStoreActions((actions) => actions.setOtherDetails);
  // useEffect(() => {
  //   console.log(lang)
  // },[lang]);
  const removeLang = (index) => {
    var newLang = [...lang];
    newLang.pop();
    setLang(newLang);
  };
  const handleSave = (data) => {
    if (data) {
      data.physically_chalngd= data.physically_chalngd=="No"?false:true;
      setConfirmDialog(true);
      setOtherDetails(data);
    }
  };
  const onClose = () => setConfirmDialog(!confirmDialogOpen);
  const onSave = () => {
    setConfirmDialog(false);
    // console.log(userDetails);
     console.log(JSON.stringify(userDetails));
    api
      .post( BACKEND_URL + "/api/v1/create/candidate", userDetails)
      .then((response) => {
        console.log("My Response");
        console.log(response);
        
        if (response.status === 201) {
          toast({
            title: "Candidate Created Successfully",
            description: "You're Ready to Apply For Jobs",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          history.push("/account/profile/view");
        } else {
          toast({
            title: "Candidate Creation Failed",
            description:
              "Please try filling the form properly again or Try Later",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Candidate Creation Failed",
          description:
            "Please try filling the form properly again or Try Later",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        console.log(error);
      });
  };
  // console.log(lang)
  console.log(value3)
  return (
    <Box p="10">
      <Text fontSize="2xl" style={{color:"gray"}}>Language</Text>
      <Divider marginBottom="2em" style={{borderColor:"darkgray",border:"1px solid"}} />
      <form onSubmit={handleSubmit(handleSave)}>
        <SimpleGrid marginY="2em" minChildWidth="120px" spacing="1em">
          <FormControl>
            <FormLabel style={{color:"gray",marginBottom:"1rem"}} style={{color:"gray"}}>Language</FormLabel>
            {lang.map((each, i) => (
              <LanguageInput
                register={register}
                control={control}
                index={i}
                key={`abc${i}`}
              />
            ))}
            <IconButton
              onClick={addLang}
              boxShadow="lg"
              padding="0"
              icon="add"
              borderRadius="50%"
            />
            {/* <IconButton
              marginLeft="1em"
              onClick={removeLang}
              icon="minus"
              boxShadow="lg"
              
              padding="0"
              borderRadius="50%"
            /> */}
          </FormControl>
        </SimpleGrid>
        <Text mt="20"  style={{color:"gray"}}fontSize="2xl">
          Desired Job
        </Text>
        <Divider marginBottom="2em" style={{borderColor:"darkgray",border:"1px solid"}} />
        <SimpleGrid marginY="2em" minChildWidth="120px" spacing="1em">
          <FormControl my="5">
            <FormLabel style={{color:"gray",marginBottom:"1rem"}} htmlFor="job_type">Job Type</FormLabel>
           
              <RadioGroup isInline spacing={4}     name="job_type"
                ref={register}   onChange={e => setValue(e.target.value)} value={value}>
              <Radio
              className="radio1"
              name="job_type"
              ref={register}
                value="PERMANENT"
              >
               Permanent
              </Radio>
              <Radio
              className="radio1"
                name="job_type"
                ref={register}
                marginLeft={{md:6,sm:0,xs:0}}
                value="TEMPORARY"
              >
           Temporary/Contractual
              </Radio>
              </RadioGroup>
          </FormControl>
          <FormControl my="5">
            <FormLabel style={{color:"gray",marginBottom:"1rem"}} htmlFor="emp_type">Employment Type</FormLabel>
            <RadioGroup isInline spacing={4} name="emp_type" ref={register}  onChange={e => setValue1(e.target.value)} value={value1}>
              <Radio
              className="radio1"
              name="emp_type"
                value="FULLTIME"
                ref={register}
              >
               Full Time
              </Radio>
              <Radio
              className="radio1"
                name="emp_type"
                ref={register}
               marginLeft={{md:6,sm:0,xs:0}}
                value="PARTTIME"
              >
         Part Time
              </Radio>
              <Radio
              className="radio1"
              name="emp_type"
              ref={register}
                value=" WORKFROMHOME"
              >
            Work From Home
              </Radio>
              </RadioGroup>
          </FormControl>
        </SimpleGrid>
        <Text style={{color:"gray"}} mt="20" fontSize="2xl">
          Affirmative Action
        </Text>
        <Divider marginBottom="2em" style={{borderColor:"darkgray",border:"1px solid"}} />
        <SimpleGrid marginY="2em" minChildWidth="120px" spacing="1em">
          <FormControl>
          <FormLabel style={{color:"gray",marginBottom:"1rem"}} htmlFor="emp_type">Physically Challenged </FormLabel>
          <RadioGroup isInline spacing={4} name="physically_chalngd" ref={register} onChange={e => setValue3(e.target.value)} value={value3}>
              <Radio
              className="radio1"
              ref={register}
              name="physically_chalngd"
                value="yes"
              >
             Yes
              </Radio>
              <Radio
                  ref={register}
              className="radio1"
              name="physically_chalngd"
                marginLeft={{md:6,sm:0,xs:0}}
                value="No"
              >
           No
              </Radio>
              </RadioGroup>
           
          </FormControl>
          {value3==="yes"&&
          <FormControl>
            <FormLabel style={{color:"gray",marginBottom:"1rem"}} htmlFor="physically_chalngd_desc">
              Description
            </FormLabel>
            <Textarea
              name="physically_chalngd_desc"
              ref={register}
              placeholder="type something ..."
            />
          </FormControl>
}
        </SimpleGrid>
        <Text style={{color:"gray" }}fontSize="2xl">Website URL</Text>
        <Divider marginBottom="2em" style={{borderColor:"darkgray",border:"1px solid"}} />
        <Box p="5">
          <Text fontWeight="bold">Category</Text>
          <Flex direction="column">
          <Flex my="5">
              <Image mr="5" src={LinkedIn} size="40px" />
                <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
                name="website_urls.1"
                ref={register}
                placeholder="LinkedIn Profile Link"
              />
            </Flex>
            <Flex my="5">
              <Image mr="5" src={Behance} size="40px" />
                <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
                name="website_urls.0"
                ref={register}
                placeholder="Behance Profile Link"
              />
            </Flex>
            
            <Flex my="5">
              <Image mr="5" src={Git} size="40px" />
                <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
                name="website_urls.0"
                ref={register}
                placeholder="Github Profile Link"
              />
            </Flex>
           { [...Array(n)].map((e, i) => <Flex my="5">
              <Image mr="5" src={Web} size="40px" />
                <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
                name="website_urls.0"
                ref={register}
                placeholder="Your Website Link"
              />
               <IconButton
      style={{boxShadow:"none",color:"green",background:"white", }}
         marginRight={{md:"-4rem",sm:"-2.5rem",xs:"-2.5rem"}}
          
         onClick={()=>{setValueN(n-1)}}
              icon="delete"
              boxShadow="lg"
              padding="0"
            
              borderRadius="50%"
            />
            </Flex>)}
            <Button
              alignSelf="center"
              justifySelf="left"
              rounded="full"
              padding="0"
              boxShadow="lg"
              onClick={()=>{setValueN(n+1)}}
            >
              <Icon name="add" />
            </Button>
          </Flex>
        </Box>
        <ConfirmModal
          isOpen={confirmDialogOpen}
          onClose={onClose}
          onSave={onSave}
        />
        <CardFooter snHandler={handleSubmit(handleSave)} />
      </form>
    </Box>
  );
}

export default OtherDetails;
