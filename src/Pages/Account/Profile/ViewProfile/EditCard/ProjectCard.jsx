import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  ButtonGroup,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/core";
import React, { useContext, useState } from "react";
// import { CompanyDetails } from "../../EditProfile/ProfessionalDetails";
import { format } from "date-fns";
import { updateData } from "../ProfilePageContainer";
import { ViewProfileContext } from "../ViewProfile.context";
import { useStoreActions } from "easy-peasy";
import { ProjectInfo } from "../../EditProfile/ProfessionalDetails";

const modifiedProject = (projects) => {
  let temp_projects = [...projects];
  temp_projects =
    projects.length > 0 &&
    projects.map((each) => ({
      ...each,
      start_date: each.start_date && format(each.start_date, "yyyy-MM-dd"),
      end_date: each.end_date && format(each.end_date, "yyyy-MM-dd"),
      skills: each.skills && each.skills.replace(/\s+/g, "").split(","),
    }));
  return temp_projects;
};

const ProjectsCard = ({
  projects,
  register,
  control,
  watch,
  handleSubmit,
  onClose,
}) => {
  const user = useContext(ViewProfileContext);
  const setUpdateStatus = useStoreActions((actions) => actions.setUpdateStatus);
  const [emptyAlert, setEmptyAlert] = useState(false);
  const handleSave = async (data) => {
    const projects = data.projects ? modifiedProject(data.projects) : [];
    const userData = { ...user, projects: projects };
    const status = await updateData(userData, onClose);
    setUpdateStatus(status);
  };
  const [tempProjects, setTempProjects] = useState(projects);
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
  const addProject = () => setTempProjects([...tempProjects, project]);
  const removeProjects = () => {
    let newTempProjects = [...tempProjects];
    newTempProjects.length >= 2 ? newTempProjects.pop() : setEmptyAlert(true);
    setTempProjects(newTempProjects);
  };
  return (
    <>
      <ModalHeader>Edit Projects</ModalHeader>
      <ModalCloseButton onClick={onClose} />
      <ModalBody marginBottom="1em">
        {emptyAlert && (
          <Alert status="warning">
            <AlertIcon />
            <AlertTitle mr={2}>Minimum One Project must be there</AlertTitle>
          </Alert>
        )}
        <form onSubmit={handleSubmit(handleSave)} style={{ padding: "1em" }}>
          {tempProjects.map((each, index) => (
            <ProjectInfo
              key={`abc${index}`}
              defaultValues={each}
              index={index}
              register={register}
              control={control}
              watch={watch}
            />
          ))}
          <ButtonGroup>
            <Button
              leftIcon="delete"
              onClick={removeProjects}
              variant="ghost"
              variantColor="red"
            >
              Remove Project
            </Button>
            <Button leftIcon="add" onClick={addProject}>
              Add Project
            </Button>
            <Button type="submit" variantColor="teal" rightIcon="arrow-right">
              Save
            </Button>
          </ButtonGroup>
        </form>
      </ModalBody>
    </>
  );
};

export default ProjectsCard;
