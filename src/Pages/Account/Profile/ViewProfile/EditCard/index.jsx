import {
  Box,
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/core";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ViewProfileContext } from "../ViewProfile.context";
import { format, getYear } from "date-fns";
import { OptionbasedOnValue } from "../../EditProfile/Eligibility";
import EducationCard from "./EducationCard";
import EmploymentCard from "./EmploymentCard";
import { updateData } from "../ProfilePageContainer";
import { useStoreActions } from "easy-peasy";
import ProjectsCard from "./ProjectCard";
import PersonalCard from "./PersonalCard";
import ResumeCard from "./ResumeCard";

export const modifiedCourses = (courses) => {
  let newCourse = courses.length > 0 ? [...courses] : [];
  newCourse =
    courses &&
    courses.length > 0 &&
    courses.map((each) => ({
      ...each,
      start_date: each.start_date && format(each.start_date, "yyyy-MM-dd"),
      end_date: each.end_date && format(each.end_date, "yyyy-MM-dd"),
      coursetype:
        typeof each.coursetype === "object"
          ? each.coursetype.value
          : OptionbasedOnValue(each.coursetype),
      passing_year: each.passing_year && getYear(each.passing_year),
    }));
  return newCourse;
};

function EditableControls({ isEditing, onSubmit, onCancel, onRequestEdit }) {
  return isEditing ? (
    <ButtonGroup  style={{float:"right",marginTop:"1rem"}} size="sm">
      <Button leftIcon="check" onClick={onSubmit}>
        Submit
      </Button>
      <IconButton icon="close" onClick={onCancel} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="flex-end">
      <Button  style={{justifyContent:"flex-end",marginTop:"1rem"}} size="sm" leftIcon="edit" onClick={onRequestEdit}>
        Edit
      </Button>
    </Flex>
  );
}

const BasicModal = ({ onClose, title, defaultValue, name, user }) => {
  const setUpdateStatus = useStoreActions((actions) => actions.setUpdateStatus);
  return (
    <>
      <ModalHeader style={{padding:"30px 78px 15px 77px"}}>{`Edit ${title}`}</ModalHeader>
      <ModalCloseButton onClick={onClose} />
      <ModalBody style={{padding:"30px 78px 15px 77px"}} marginBottom="1em">
        <Editable
          width="100%"
          startWithEditView
          onSubmit={async (val) => {
            let status = await updateData({ ...user, [name]: val }, onClose);
            setUpdateStatus(status);
          }}
        >
          {(props) => (
            <Box minChildWidth="120px" spacing="1em">
              <Textarea  defaultValue={defaultValue}/>
              <EditableControls {...props} />
            </Box>
          )}
        </Editable>
      </ModalBody>
    </>
  );
};
const ModalLogic = ({
  category,
  errors,
  user,
  onClose,
  title,
  defaultValue,
  onUpdate,
  name,
  register,
  watch,
  handleSubmit,
  control,
}) => {
  switch (category) {
    case "basic":
      return (
        <BasicModal
          user={user}
          onClose={onClose}
          title={title}
          defaultValue={defaultValue}
          name={name}
        />
      );
    case "education":
      return (
        <EducationCard
          onClose={onClose}
          handleSubmit={handleSubmit}
          courses={user.courses}
          user={user}
          register={register}
          control={control}
          onUpdate={() => onUpdate}
          watch={watch}
        />
      );
    case "employment":
      return (
        <EmploymentCard
          register={register}
          onClose={onClose}
          handleSubmit={handleSubmit}
          control={control}
          professionaldetails={user.professional_details}
          watch={watch}
        />
      );
    case "project":
      return (
        <ProjectsCard
          register={register}
          onClose={onClose}
          handleSubmit={handleSubmit}
          control={control}
          projects={user.projects}
          watch={watch}
        />
      );
    case "personal":
      return (
        <PersonalCard
          errors={errors}
          user={user}
          watch={watch}
          register={register}
          onClose={onClose}
          handleSubmit={handleSubmit}
          control={control}
        />
      );
    case "resume":
      return <ResumeCard user={user} onClose={onClose} />;
    default:
      return (
        <BasicModal
          user={user}
          onClose={onClose}
          title={title}
          defaultValue={defaultValue}
          onUpdate={() => onUpdate}
          name={name}
        />
      );
  }
};

function EditCard({ title, children, id, defaultValue, name, category }) {
  const { register, watch, control, handleSubmit, errors } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useContext(ViewProfileContext);
  return (
    <Box
      id={id}
      my="5"
      padding="1.5em"
      backgroundColor="#eeeeee"
      rounded="0.25em"
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Button variant="ghost" onClick={onOpen} color="#41bb93">
          <Icon name="edit" />
        </Button>
      </Flex>
      {children}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalLogic
            category={category}
            errors={errors}
            user={user}
            name={name}
            watch={watch}
            register={register}
            handleSubmit={handleSubmit}
            onClose={onClose}
            title={title}
            control={control}
            defaultValue={defaultValue}
          />
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EditCard;
