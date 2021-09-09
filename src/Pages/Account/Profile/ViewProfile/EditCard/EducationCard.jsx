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
import { CourseDetails } from "../../EditProfile/Eligibility";
import { modifiedCourses } from ".";
import { updateData } from "../ProfilePageContainer";
import { ViewProfileContext } from "../ViewProfile.context";
import { useStoreActions } from "easy-peasy";

const EducationCard = ({
  courses,
  register,
  control,
  watch,
  handleSubmit,
  onClose,
}) => {
  const [emptyAlert, setEmptyAlert] = useState(false);
  const user = useContext(ViewProfileContext);
  const setUpdateStatus = useStoreActions((actions) => actions.setUpdateStatus);
  const handleSave = async (data) => {
    const courses = data.courses ? modifiedCourses(data.courses) : [];
    const userData = { ...user, courses: courses };
    const status = await updateData(userData, onClose);
    setUpdateStatus(status);
  };
  const [tempCourses, setTempCourses] = useState(courses);
  const courseObject = {
    course: "",
    cgpa: "",
    specialization: "",
    coursetype: null,
    college_name: "",
    passing_year: new Date(),
    start_date: null,
    end_date: null,
  };
  const addCourse = () => setTempCourses([...courses, courseObject]);
  const removeCourse = () => {
    let newTempCourse = [...tempCourses];
    newTempCourse.length > 2 ? newTempCourse.pop() : setEmptyAlert(true);
    setTempCourses(newTempCourse);
  };
  return (
    <>
      <ModalHeader >Edit Courses</ModalHeader>
      <ModalCloseButton onClick={onClose} />
      <ModalBody  marginBottom="1em">
        {emptyAlert && (
          <Alert status="warning">
            <AlertIcon />
            <AlertTitle mr={2}>Minimum One Course must be there</AlertTitle>
          </Alert>
        )}
        <form onSubmit={handleSubmit(handleSave)} style={{ padding: "1em" }}>
          {tempCourses.map((each, index) => (
            <CourseDetails
              key={each.eduId}
              defaultValues={each}
              index={index}
              register={register}
              control={control}
              watch={watch}
              q={true}
            />
          ))}
          <ButtonGroup>
            <Button
              leftIcon="delete"
              onClick={removeCourse}
              variant="ghost"
              variantColor="red"
            >
              Remove Course
            </Button>
            <Button leftIcon="add" onClick={addCourse}>
              Add Course
            </Button>
            <Button type="submit" rightIcon="arrow-right" variantColor="teal">
              Save
            </Button>
          </ButtonGroup>
        </form>
      </ModalBody>
    </>
  );
};

export default EducationCard;
