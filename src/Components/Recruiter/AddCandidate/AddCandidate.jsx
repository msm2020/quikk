import React, { Suspense, lazy } from "react";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Divider,
  useDisclosure,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";

const UploadCVModal = lazy(() => import("./UploadCVModal"));
const AddManuallyModal = lazy(() => import("./AddManuallyModal"));

export default function AddCandidate() {
  const initialFocusRef = React.useRef();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: addManualModalIsOpen,
    onClose: addManualModalOnClose,
    onOpen: addManualModalOnOpen,
  } = useDisclosure();

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Popover initialFocusRef={initialFocusRef} placement="bottom" usePortal>
          <PopoverTrigger>
            <Button
              marginLeft="auto"
              mr={2}
              px="10"
              variantColor="teal"
              leftIcon="add"
              size="sm"
            >
              Add Candidate
            </Button>
          </PopoverTrigger>
          <PopoverContent zIndex={4} borderColor="teal" maxW="sm">
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              <Grid templateColumns="1fr 1fr" gap="10px">
                <Button
                  variantColor="teal"
                  leftIcon="arrow-up"
                  onClick={onOpen}
                >
                  Upload CVs
                </Button>
                <Button
                  variantColor="teal"
                  leftIcon="add"
                  onClick={addManualModalOnOpen}
                >
                  Add manually
                </Button>
              </Grid>
            </PopoverHeader>
            <Divider />
            <PopoverBody>
              Import candidates by sending CVs / resumes
              <InputGroup size="md" mt={2}>
                <Input pr="4.5rem" value="resumes@quiklyy.co" isDisabled />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm">
                    Copy
                  </Button>
                </InputRightElement>
              </InputGroup>
            </PopoverBody>
            <PopoverFooter
              border="0"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            ></PopoverFooter>
          </PopoverContent>
        </Popover>

        <UploadCVModal isOpen={isOpen} onClose={onClose} />
        <AddManuallyModal
          isOpen={addManualModalIsOpen}
          onClose={addManualModalOnClose}
        />
      </Suspense>
    </>
  );
}
