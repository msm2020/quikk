import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Flex,
  Grid,
  Icon,
  IconButton,
  Input,
  NumberInput,
  Text,
  Stack,
  Textarea,
} from "@chakra-ui/core";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useForm, Controller } from "react-hook-form";
import CardFooter from "../CardFooter";
import ReactSelect from "react-select";
import { options } from "Data/Jobs";
import { compareAsc } from "date-fns";
import { useHistory } from "react-router";

export const findVal = (optionsArr, prop) => {
  // let tempOpt = [...options[optProp]];
  // console.log(optionsArr.filter((each) => each.value === prop)[0]);
  return optionsArr.find((each) => each.value === prop);
};

export const CompanyDetails = ({
  register,
  index,
  errors,
  watch,
  defaultValues,
  ...rest
}) => {
  
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  const defaultKeys = Object.keys(defaultValues || {}).length;
  const start_date = watch(`professional_details.${index}.start_date`);
  return (
    <>
      <Grid
        marginY="2em"
        display={{sm:"block",md:"grid",xs:"block"}}
        templateColumns="repeat(2, minmax(120px,1fr))"
        gap="1em"
      >
        <FormControl>
          <FormLabel htmlFor={`professional_details.${index}.org_name`}>
            Organisation
          </FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            defaultValue={defaultKeys ? defaultValues.org_name : ""}
            isRequired
            name={`professional_details.${index}.org_name`}
            ref={register}
            placeholder="Company Name"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`professional_details.${index}.designation`}>
            Designation
          </FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            defaultValue={defaultKeys ? defaultValues.designation : ""}
            isRequired
            name={`professional_details.${index}.designation`}
            ref={register}
            placeholder="App Developer"
          />
        </FormControl>
        <FormControl gridColumn="1 / span 2">
          <FormLabel htmlFor={`professional_details.${index}.responsibilities`}>
            Responsibilities
          </FormLabel>
          <Box style={{padding: '2px', border: "1px solid rgb(169, 169, 169)",
    background: "rgb(240, 244, 247)",
    fontWeight: "500" }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          placeholder="Tell us about your work"
          name={`professional_details.${index}.responsibilities`}
          ref={register}
          defaultValue={defaultKeys ? defaultValues.responsibilities : ""}
        />
      </Box>
       
        </FormControl>
        <Stack isInline>
        <FormControl>
          <FormLabel htmlFor={`professional_details.${index}.start_date`}>
            Start Date
          </FormLabel>
          <Controller
            name={`professional_details.${index}.start_date`}
            defaultValue={
              defaultKeys && defaultValues.start_date !== ""
                ? new Date(defaultValues.start_date)
                : ""
            }
            {...rest}
            render={({ onChange, value, ref }) => (
              <DatePicker
                required
                className="date-picker"
                ref={ref}
                isClearable
                selected={value}
                onChange={onChange}
                showYearDropdown
              />
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`professional_details.${index}.end_date`}>
            End Date
          </FormLabel>
          <Controller
            name={`professional_details.${index}.end_date`}
            defaultValue={
              defaultKeys && defaultValues.end_date !== ""
                ? new Date(defaultValues.end_date)
                : ""
            }
            // rules={{ required: "End Date is required" }}
            {...rest}
            render={({ onChange, value, ref }) => (
              <DatePicker
                className="date-picker"
                ref={ref}
                required
                // includeDate={addDays(start_date,1)}
                filterDate={(date) => compareAsc(date, start_date) === 1}
                isClearable
                selected={value}
                onChange={onChange}
                showYearDropdown
              />
            )}
          />
        </FormControl>
        </Stack>
      </Grid>
      <Divider width="80px" margin="2em auto" />
    </>
  );
};

export const ProjectInfo = ({
  register,
  index,
  control,
  watch,
  defaultValues,
}) => {
  const start_date = watch(`projects.${index}.start_date`);
  const defaultKeys = Object.keys(defaultValues || {}).length;
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <>
      <Grid
        marginY="2em"
        templateColumns="repeat(1, minmax(120px,1fr))"
        gap="1em"
      >
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.project_title`}>
            Project Title
          </FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            isRequired
            defaultValue={defaultValues ? defaultValues.project_title : ""}
            name={`projects.${index}.project_title`}
            ref={register}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.client`}>
            Client Name (if any)
          </FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            isRequired
            defaultValue={defaultValues ? defaultValues.client : ""}
            name={`projects.${index}.client`}
            ref={register}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.project_employer`}>
            Project Employer
          </FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            isRequired
            defaultValue={defaultValues ? defaultValues.project_employer : ""}
            name={`projects.${index}.project_employer`}
            ref={register}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.project_status`}>
            Project Status
          </FormLabel>
          <Controller
              name={`projects.${index}.project_status`}
              defaultValue={options.project_status[0].value}
              control={control}
              render={({ onChange, ref }) => (
                <ReactSelect
                  ref={ref}
                  options={options.project_status}
                  onChange={(val) => onChange(val.value)}
                />
              )}
            />
          {/* <Controller
            name={`projects.${index}.project_status`}
            defaultValue={
              defaultKeys
                ? findVal(options.project_status[0].value, defaultValues.project_status)
                : options.project_status[0]
            }
            control={control}
            render={({ onChange, value, ref: innerRef }) => (
              <ReactSelect
                options={options.project_status}
                value={value}
                ref={innerRef}
                onChange={(val) => onChange(val.value)}
              />
            )}
          /> */}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.project_details`}>
            Project Details
          </FormLabel>
          {/* <Textarea
            defaultValue={defaultValues ? defaultValues.project_details : null}
            name={`projects.${index}.project_details`}
            ref={register}
          /> */}
             <Box style={{padding: '2px', border: "1px solid rgb(169, 169, 169)",
    background: "rgb(240, 244, 247)",
    fontWeight: "500" }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          placeholder="Tell us about your work"
          name={`professional_details.${index}.responsibilities`}
          ref={register}
          defaultValue={defaultKeys ? defaultValues.responsibilities : ""}
        />
      </Box>
       
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.employment_nature`}>
            Employment Nature
          </FormLabel>
          <Controller
              name={`projects.${index}.employment_nature`}
              defaultValue={options.employment_nature[0].value}
              control={control}
              render={({ onChange, ref }) => (
                <ReactSelect
                  ref={ref}
                  options={options.employment_nature}
                  onChange={(val) => onChange(val.value)}
                />
              )}
            />

          {/* <Controller
            name={`projects.${index}.employment_nature`}
            control={control}
            defaultValue={
              defaultKeys
                ? findVal(
                    options.employment_nature[0].value,
                    defaultValues.employment_nature
                  )
                : { value: "FULLTIME", label: "Full Time" }
            }
            render={({ onChange, value, ref }) => (
              <ReactSelect
                options={options.employment_nature}
                value={value}
                ref={ref}
                onChange={(val) => onChange(val.value)}
              />
            )}
          /> */}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.project_location`}>
            Project Location
          </FormLabel>

          <Controller
              name={`projects.${index}.project_location`}
              defaultValue={options.project_location[0].value}
              control={control}
              render={({ onChange, ref }) => (
                <ReactSelect
                  ref={ref}
                  options={options.project_location}
                  onChange={(val) => onChange(val.value)}
                />
              )}
            />

          {/* <Controller
            name={`projects.${index}.project_location`}
            control={control}
            defaultValue={
              defaultKeys
                ? findVal(
                    options.project_location.value,
                    defaultValues.project_location
                  )
                : { value: "ONSITE", label: "On Site" }
            }
            render={({ onChange, value, ref }) => (
              <ReactSelect
                options={options.project_location}
                value={value}
                ref={ref}
                onChange={(val) => onChange(val.value)}
              />
            )}
          /> */}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.site`}>Site</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            defaultValue={defaultValues ? defaultValues.site : ""}
            name={`projects.${index}.site`}
            ref={register}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.teamsize`}>
            Team Size
          </FormLabel>
          <NumberInput
            defaultValue={defaultValues ? defaultValues.teamsize : 0}
            name={`projects.${index}.teamsize`}
            ref={register}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.role`}>Role</FormLabel>
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            defaultValue={defaultValues ? defaultValues.role : ""}
            name={`projects.${index}.role`}
            ref={register}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.role_description`}>
            Role Description
          </FormLabel>
          <Box style={{padding: '2px', border: "1px solid rgb(169, 169, 169)",
    background: "rgb(240, 244, 247)",
    fontWeight: "500" }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          placeholder="Tell us about your work"
          name={`professional_details.${index}.responsibilities`}
          ref={register}
          defaultValue={defaultKeys ? defaultValues.responsibilities : ""}
        />
      </Box>
       
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.skills`}>Skills</FormLabel>
          {/* <Controller
        name={`projects.${index}.[skills]`}
        defaultValue={""}
        render={({onChange, ref}) => (
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}} ref={ref} onChange={val => onChange(typeof val === 'string' ? val.split(','): val)} />
        )}
      /> */}
            <Input style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
            name={`projects.${index}.skills`}
            defaultValue={defaultValues ? defaultValues.skills : ""}
            placeholder="App, Web, ML"
            ref={register}
          />
          <FormHelperText>Add Skills separated by comma </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.start_date`}>
            Start Date
          </FormLabel>
          <Controller
            control={control}
            defaultValue={
              defaultValues && defaultValues.start_date !== ""
                ? new Date(defaultValues.start_date)
                : null
            }
            name={`projects.${index}.start_date`}
            render={({ onChange, value, ref }) => (
              <DatePicker
                required
                className="date-picker"
                ref={ref}
                isClearable
                selected={value}
                onChange={onChange}
                showYearDropdown
              />
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`projects.${index}.end_date`}>End Date</FormLabel>
          <Controller
            name={`projects.${index}.end_date`}
            control={control}
            defaultValue={
              defaultValues && defaultValues.end_date !== ""
                ? new Date(defaultValues.end_date)
                : null
            }
            rules={{ required: "End Date is required" }}
            render={({ onChange, value, ref }) => (
              <DatePicker
                className="date-picker"
                filterDate={(date) => compareAsc(date, start_date) === 1}
                ref={ref}
                required
                isClearable
                selected={value}
                onChange={onChange}
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

function ProfessionalDetails() {
  const demoCompanyInfo = {
    org_name: "",
    designation: "",
    responsibilities: "",
    start_date: "",
    end_date: "",
  };
  const project = {
    project_title: "",
    client: "",
    project_employer: "",
    project_status: "INPROGRESS",
    project_details: "",
    employment_nature: "CONTRACTUAL",
    project_location: "OFFSITE",
    site: "",
    teamsize: 0,
    role: "",
    role_description: "",
    skills: [""],
    start_date: "",
    end_date: "",
  };
  const [projects, setProjects] = useState([project]);
  const [companyInfo, setCompanyInfo] = useState([demoCompanyInfo]);
  const { register, errors, control, watch, handleSubmit } = useForm();
  const addProject = () => {
    setProjects([...projects, project]);
  };
  const history = useHistory();
  const addCompany = () => {
    setCompanyInfo([...companyInfo, demoCompanyInfo]);
  };
  const deleteCard=(i)=>{
setCompanyInfo(companyInfo.slice(0,-1))
  }

  const userDetails = useStoreState((state) => state.userDetails);

  const { setProfessionalInfo, setProject } = useStoreActions((actions) => ({
    setProject: actions.setProject,
    setProfessionalInfo: actions.setProfessionalInfo,
  }));
  const handleSave = (data) => {
    if (data) {
      console.log(data.professional_details);
       setProfessionalInfo(data.professional_details);
       history.push("/candidate/create/eligibility");
    }
  };
  useEffect(() => console.log(userDetails), [userDetails]);
  
  return (
    <Box p="10">
   

  

      <Text fontSize="2xl">Professional Details</Text>
     
        
      <Divider />
      
      <form >
    
        {companyInfo.map((each, i) => (
          <>{i !==0&&
           <Button  my={6}  padding="0" boxShadow="lg" rounded="full" onClick={(i)=>{deleteCard(i)}}>
           <Icon name="delete" />
         </Button>}
          <CompanyDetails
            errors={errors}
            register={register}
            key={(i + 1).toString()}
            index={i}
            control={control}
            watch={watch}
            defaultValue=""
          />
          </>
        ))}
        <Button padding="0" boxShadow="lg" rounded="full" onClick={addCompany}>
          <Icon name="add" />
        </Button>
       
        
        <CardFooter snHandler={handleSubmit(handleSave)} />
      
      </form>
    </Box>
  );
}

export default ProfessionalDetails;
