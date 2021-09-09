import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Icon,
  Text,
  Grid,
} from "@chakra-ui/core";
import ReactSelect from "react-select";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CardFooter from "../CardFooter";
import DatePicker from "react-datepicker";
import { options } from "Data/Jobs";
import "../PersonalInfo/style.scss";
import { useStoreActions } from "easy-peasy";
import { useHistory } from "react-router";
import { compareAsc } from "date-fns";

export const OptionbasedOnValue = (value) => {
  // console.log(options.course_type.filter(each => each.value === value)[0])
  return options.course_type.filter((each) => each.value === value)[0];
};

export const CourseDetails = ({
  control,
  register,
  index,
  watch,
  defaultValues,
  q
}) => {
  const start_date = watch(`courses.${index}.start_date`);
  return (
    <>
      <Grid templateColumns={{sm:"none",xs:"none", md:"repeat(2,minmax(120px,1fr))" }}gap="1em">
        <FormControl>
          <FormLabel htmlFor={`courses.${index}.course`}>Course</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            placeholder="Bachelor of Engineering"
            defaultValue={defaultValues ? defaultValues.course : ""}
            name={`courses.${index}.course`}
            ref={register}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`courses.${index}.specialization`}>
            Specialization
          </FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            placeholder="Computer Science"
            defaultValue={defaultValues ? defaultValues.specialization : ""}
            name={`courses.${index}.specialization`}
            ref={register}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`courses.${index}.coursetype`}>
            Course Type
          </FormLabel>
          <Controller
            name={`courses.${index}.coursetype`}
            defaultValue={
              defaultValues
                ? OptionbasedOnValue(defaultValues.coursetype)
                : options.course_type[0]
            }
            control={control}
            render={({ onChange, value, ref }) => (
              <ReactSelect
                options={options.course_type}
                onChange={(val) => onChange(val)}
                value={value}
                ref={ref}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`courses.${index}.cgpa`}>CGPA</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            name={`courses.${index}.cgpa`}
            defaultValue={defaultValues ? defaultValues.cgpa : ""}
            placeholder="3.4"
            ref={register}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`courses.${index}.college_name`}>
            College Name
          </FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            name={`courses.${index}.college_name`}
            defaultValue={defaultValues ? defaultValues.college_name : ""}
            placeholder="IIT Bangalore"
            ref={register}
          />
        </FormControl>
        <FormControl my={{lg: q?0:6,md:0,xs:0}}>
          <FormLabel htmlFor={`courses.${index}.passing_year`}>
            Year of Passing
          </FormLabel>
          <Controller
            name={`courses.${index}.passing_year`}
            defaultValue={
              defaultValues
                ? new Date(defaultValues.passing_year.toString())
                : new Date()
            }
            render={({ onChange, value, ref }) => (
              <DatePicker
                className="date-picker"
                dateFormat="yyyy"
                isClearable
                ref={ref}
                onChange={onChange}
                selected={value}
                showYearPicker
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`courses.${index}.start_date`}>
            Course Start Date
          </FormLabel>
          <Controller
            defaultValue={
              defaultValues ? new Date(defaultValues.start_date) : null
            }
            control={control}
            name={`courses.${index}.start_date`}
            render={({ onChange, value, ref }) => (
              <DatePicker
                required
                className="date-picker"
                isClearable
                selected={value}
                onChange={onChange}
                ref={ref}
                showYearDropdown
              />
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`courses.${index}.end_date`}>
            Course End Date
          </FormLabel>
          <Controller
            name={`courses.${index}.end_date`}
            control={control}
            defaultValue={
              defaultValues ? new Date(defaultValues.end_date) : null
            }
            render={({ onChange, value, ref }) => (
              <DatePicker
                required
                className="date-picker"
                isClearable
                filterDate={(date) => compareAsc(date, start_date) === 1}
                selected={value}
                onChange={onChange}
                ref={ref}
                showYearDropdown
              />
            )}
          />
        </FormControl>
      </Grid>
      <Divider width="80px" margin="2em auto" />
    </>
  );
};

function Eligibility() {
  const courseObject = {
    course: "",
    cgpa: "",
    specialization: "",
    coursetype: "FULLTIME",
    college_name: "",
    passing_year: new Date(),
    start_date: null,
    end_date: null,
  };
  const [courseCards, setCC] = useState([courseObject]);
  const history = useHistory();
  // const userDetails = useStoreState(state => state.userDetails);
  const setCourses = useStoreActions((actions) => actions.setCourses);
  const { register, control, handleSubmit, watch } = useForm();
  const handleCC = () => {
    setCC([...courseCards, courseObject]);
  };

  const handleSave = (data) => {
    if (data) {
      setCourses(data.courses);
      history.push("/candidate/create/other-details");
      // console.log(data)
      // console.log(data)
    }
  };
  // useEffect(() => {
  //   console.log(userDetails);
  // },[userDetails])
  const deleteCard=(i)=>{
    setCC(courseCards.slice(0,-1))
      }
  return (
    <Box p="10">
      <Text style={{color:"gray"}} fontSize="2xl">Course Details</Text>
      <Divider marginBottom="2em" style={{borderColor:"darkgray",border:"1px solid"}} />
      <form onSubmit={handleSubmit(handleSave)}>
        {courseCards.map((CC, index) => (
          <>
          {index !==0&&
            <Button  my={6} padding="0" boxShadow="lg" rounded="full" onClick={(i)=>{deleteCard(i)}}>
            <Icon name="delete" />
          </Button>}
          <CourseDetails
            key={`abc${index + 1}`}
            register={register}
            index={index}
            control={control}
            watch={watch}
          />
          </>
        ))}
        <Button
          rounded="full"
          marginTop="1em"
          padding="0"
          boxShadow="lg"
          onClick={handleCC}
        >
          <Icon name="add" />
        </Button>
        <CardFooter snHandler={handleSubmit(handleSave)} />
      </form>
    </Box>
  );
}

export default Eligibility;
