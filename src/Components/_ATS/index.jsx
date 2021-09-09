import React from "react";
import styled from "@emotion/styled";
import DragDrop from "Components/DragDrop";
import AddCandidate from "Components/Recruiter/AddCandidate";

const ATSContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0.5rem;
`;

export default function ATS() {
  return (
    <ATSContainer>
      <AddCandidate />
      <DragDrop />
    </ATSContainer>
  );
}
