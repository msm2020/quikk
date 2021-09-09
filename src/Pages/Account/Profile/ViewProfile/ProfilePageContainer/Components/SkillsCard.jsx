import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import { SkillChip } from "../../../EditProfile/Skills/index";
import React, { useContext, useState } from "react";
import { ViewProfileContext } from "../../ViewProfile.context";

const SkillsCard = ({
  title,
  primarySkills,
  suggestedSkills,
  onUpdate,
  children,
}) => {
  const [secSkill, setSecSkill] = useState(suggestedSkills);
  const user = useContext(ViewProfileContext);
  const [skillInp, setSkillInp] = useState("");
  const [helperText, setHT] = useState("");
  const deleteSkill = (index) => {
    setSecSkill(secSkill.filter((each) => each !== secSkill[index]));
  };
  console.log(primarySkills, suggestedSkills);
  const handleSkill = (value) => {
    if (!secSkill.includes(value) && value) {
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      //   id={id}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`Edit ${title}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody marginBottom="1em">
            <Stack>
              <FormControl>
                <FormLabel>Primary Skills</FormLabel>
                <Input placeholder="Web Designing" isDisabled />
                <SimpleGrid minChildWidth="130px" spacing="0.5em">
                  <Box>
                    {primarySkills.map((each) => (
                      <SkillChip label={each} key={each} />
                    ))}
                  </Box>
                </SimpleGrid>
              </FormControl>
              <FormControl isInvalid={helperText}>
                <FormLabel>Suggested Skills</FormLabel>
                <FormHelperText margin="0.25em 0.75em 0.35em 0.25em">
                  Skills which have been missed out in Primary Skills
                </FormHelperText>
                <Stack isInline>
                  <Input
                    value={skillInp}
                    onChange={(e) => setSkillInp(e.target.value)}
                    placeholder="Web Designing"
                  />
                  <Button onClick={() => handleSkill(skillInp)}>
                    <Icon name="add" />
                  </Button>
                </Stack>

                {helperText && (
                  <FormErrorMessage>{helperText}</FormErrorMessage>
                )}

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
            <ModalFooter>
              <Button
                variantColor="teal"
                rightIcon="arrow-right"
                onClick={() =>
                  onUpdate(
                    {
                      ...user,
                      primary_skills: primarySkills,
                      suggested_skills: secSkill,
                    },
                    onClose
                  )
                }
              >
                Save
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SkillsCard;
