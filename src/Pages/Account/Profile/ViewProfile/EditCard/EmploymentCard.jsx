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
import { CompanyDetails } from "../../EditProfile/ProfessionalDetails";
import { format } from "date-fns";
import { updateData } from "../ProfilePageContainer";
import { ViewProfileContext } from "../ViewProfile.context";
import { useStoreActions } from "easy-peasy";

const modifiedPD = (professional_details) => {
  let temp_professional_details = [...professional_details];
  temp_professional_details =
    professional_details.length > 0 &&
    professional_details.map((each) => ({
      ...each,
      start_date: each.start_date && format(each.start_date, "yyyy-MM-dd"),
      end_date: each.end_date && format(each.end_date, "yyyy-MM-dd"),
    }));
  return temp_professional_details;
};

const EmploymentCard = ({
  professionaldetails,
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
    const professional_details = data.professional_details
      ? modifiedPD(data.professional_details)
      : [];
    const userData = { ...user, professional_details: professional_details };
    const status = await updateData(userData, onClose);
    setUpdateStatus(status);
  };
  const [tempPD, setTempPD] = useState(professionaldetails);
  const demoCompanyInfo = {
    org_name: "",
    designation: "",
    responsibilities: "",
    start_date: "",
    end_date: "",
  };
  const addPD = () => setTempPD([...tempPD, demoCompanyInfo]);
  const removePD = () => {
    let newTempPD = [...tempPD];
    newTempPD.length >= 2 ? newTempPD.pop() : setEmptyAlert(true);
    setTempPD(newTempPD);
  };
  return (
    <>
      <ModalHeader>Edit Professional Details</ModalHeader>
      <ModalCloseButton onClick={onClose} />
      <ModalBody marginBottom="1em">
        {emptyAlert && (
          <Alert status="warning">
            <AlertIcon />
            <AlertTitle mr={2}>Minimum One Company must be there</AlertTitle>
          </Alert>
        )}
        <form onSubmit={handleSubmit(handleSave)} style={{ padding: "1em" }}>
          {tempPD.map((each, index) => (
            <CompanyDetails
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
              onClick={removePD}
              variant="ghost"
              variantColor="red"
            >
              Remove Company
            </Button>
            <Button leftIcon="add" onClick={addPD}>
              Add Company
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

export default EmploymentCard;
