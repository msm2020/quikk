import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

export const InvisibleInput = styled.input`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const FileStatusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 500px;
  text-align: left;
`;

export const FileName = styled.p`
  margin-right: 0.5rem;
`;

export const Progress = styled.div`
  position: relative;
  height: 4px;
  display: block;
  width: 100%;
  background-color: #acece6;
  background-color: teal.600;
  border-radius: 2px;
  background-clip: padding-box;
  margin: 0.5rem 0 1rem 0;
  overflow: hidden;
`;

export const Determinate = styled.div`
  position: absolute;
  background-color: inherit;
  top: 0;
  bottom: 0;
  background-color: #26a69a;
  background-color: teal.300;
  transition: width 0.3s ease;
`;
