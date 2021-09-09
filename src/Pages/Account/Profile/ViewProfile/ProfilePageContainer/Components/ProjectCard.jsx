import React from "react";
import { Box } from "@chakra-ui/core";
import { QuiText } from ".";
import { formatDate } from "utils";

var utils = window._quiklyyUtils;

export default function ProjectCard({
  data: {
    project_title,
    client,
    project_employer,
    project_status,
    project_details,
    employment_nature,
    project_location,
    site,
    teamsize,
    role,
    role_description,
    skills,
    start_date,
    end_date,
  },
}) {
  //   const _projectStatus = {
  //     FINISHED: "Completed",
  //     INPROGRESS: "In Progress",
  //   };
  console.log(site);
  return (
    <Box marginTop="3" marginBottom="5">
      <QuiText.SecondaryTitle fontWeight="bold">
        {project_title}
      </QuiText.SecondaryTitle>
      <QuiText.Secondary>{role}</QuiText.Secondary>
      <QuiText.Secondary fontSize="sm">
        Organization: {client}
      </QuiText.Secondary>
      <QuiText.Secondary fontSize="sm">Site: {site}</QuiText.Secondary>
      <QuiText.Secondary fontSize="sm">{`Duration: ${utils.formatDate(
        start_date
      )} - ${
        end_date === "present" ? "Present" : formatDate(end_date)
      }`}</QuiText.Secondary>
      <QuiText.Secondary fontSize="sm">
        Description: {project_details}
      </QuiText.Secondary>
    </Box>
  );
}
