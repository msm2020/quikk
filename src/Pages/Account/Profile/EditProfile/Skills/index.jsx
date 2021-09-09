import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/core";
import React, { useState } from "react";
import {
  useStoreActions,
  // useStoreState
} from "easy-peasy";
import { useForm } from "react-hook-form";
import CardFooter from "../CardFooter";
import { useHistory } from "react-router";

const primSkillData = ["UX UI"];
const secSkillData = ["App Design"];
// const skillObj = {
//   primSkillData,
//   secSkillData,
// };

export const SkillChip = ({ label, isClosable, index, deleteSkill }) => (
  <>
  {!(label===null)&&
  <Tag
    margin="1em"
    size="lg"
    rounded="full"
    variant="solid"
    color="white"
    style={{ backgroundColor: "#41bb93" }}
  >
    <TagLabel>{label}</TagLabel>
    {isClosable && <TagCloseButton onClick={() => deleteSkill(index)} />}
  </Tag>}
  </>
);
// export default SkillChip;

function Skills() {
  const history = useHistory();
 const [primSkill, setPrimSkill] = useState(primSkillData);
  const [secSkill, setSecSkill] = useState(secSkillData);
  const [skillInp, setSkillInp] = useState("");
  const [helperText, setHT] = useState("");
  const [skillInp1, setSkillInp1] = useState("");
  const [helperText1, setHT1] = useState("");
  const deleteSkill = (index) => {
    setSecSkill(secSkill.filter((each) => each !== secSkill[index]));
  };

  const deleteSkill1 = (index) => {
    console.log(index)
    setPrimSkill(primSkill.filter((each) => each !== primSkill[index]));
  };
  const handleSkill = (value) => {
    if (!secSkill.includes(value) && value) {
      secSkillData[0]=null;
      setSecSkill([...secSkill, value]);
      setSkillInp("");
      setHT("");
    } else if (!value) {
      setHT("Value can't be empty");
    } else {
      setHT(`${value} already exists`);
      setSkillInp("");
    }
  };

  const handleSkillP = (value) => {
    if (!primSkill.includes(value) && value) {
      primSkillData[0]=null;
      setPrimSkill([...primSkill, value]);
      setSkillInp1("");
      setHT1("");
    } else if (!value) {
      setHT1("Value can't be empty");
    } else {
      setHT1(`${value} already exists`);
      setSkillInp1("");
    }
  };
  const { handleSubmit } = useForm();
  // const userDetails = useStoreState((state) => state.userDetails);
  const { setSkills } = useStoreActions((actions) => ({
    setSkills: actions.setSkills,
  }));
  const handleSave = () => {
    const skills = {
      primary_skills: primSkill,
      suggested_skills: secSkill,
    };
    setSkills(skills);
    history.push("/candidate/create/professional-info");
    // console.log(userDetails);
  };

  return (
    <Box p="10">
      <Text fontSize="2xl" style={{color:"gray"}}>Add Skills</Text>
      <Divider marginBottom="2em" style={{borderColor:"darkgray",border:"1px solid"}} />
      <form onSubmit={handleSubmit(handleSave)}>
        <Stack>
          <FormControl isInvalid={helperText1}>
            <FormLabel style={{color:"gray"}}>Primary Skills</FormLabel>
            <Stack isInline>
            <Input
             style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
                value={skillInp1}
                onChange={(e) => setSkillInp1(e.target.value)}
                placeholder="Web Designing"
              />
              <Button style={{borderRadius:"25px"}} onClick={() => handleSkillP(skillInp1)}>
                <Icon name="add" />
              </Button>
              </Stack>
            <SimpleGrid minChildWidth="130px" spacing="0.5em">
              <Box>
              {helperText1 && <FormErrorMessage>{helperText1}</FormErrorMessage>}
                {primSkill.map((each,index) => (
                    <SkillChip
                    index={index}
                    deleteSkill={deleteSkill1}
                    isClosable
                    label={each}
                    key={each}
                  />
                ))}
              </Box>
            </SimpleGrid>
          </FormControl>
          <FormControl isInvalid={helperText}>
            <FormLabel style={{color:"gray"}}>Suggested Skills</FormLabel>
            <FormHelperText style={{color:"gray"}} margin="0.25em 0.75em 0.35em 0.25em">
              Skills which have been missed out in Primary Skills
            </FormHelperText>
            <Stack isInline>
              <Input
               style={{border:"1px solid #a9a9a9", background:"#f0f4f7",fontWeight:"500"}}
                value={skillInp}
                onChange={(e) => setSkillInp(e.target.value)}
                placeholder="Web Designing"
              />
              <Button style={{borderRadius:"25px"}} onClick={() => handleSkill(skillInp)}>
                <Icon name="add" />
              </Button>
            </Stack>

            {helperText && <FormErrorMessage>{helperText}</FormErrorMessage>}

            {secSkill.map((each, index) => (
              <SkillChip
                index={index}
                deleteSkill={deleteSkill}
                isClosable
                label={each}
                key={each}
              />
            ))}
          </FormControl>
        </Stack>
        <CardFooter snHandler={handleSave} />
      </form>
    </Box>
  );
}

export default Skills;
