import React, { useRef } from "react";
import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Divider,
  IconButton,
} from "@chakra-ui/core";

export default function AdditionalOptions() {
  const initialFocusRef = useRef();

  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
      usePortal
    >
      <PopoverTrigger>
        <IconButton size="sm" variantColor="teal" icon="drag-handle" />
      </PopoverTrigger>
      <PopoverContent zIndex={4} borderColor="teal" maxW="sm">
        <PopoverBody>
          <Button
            justifyContent="flex-start"
            leftIcon="edit"
            variant="ghost"
            isFullWidth
          >
            Edit job
          </Button>
          <Divider />
          <Button
            justifyContent="flex-start"
            leftIcon="arrow-forward"
            variant="ghost"
            isFullWidth
          >
            Edit hiring workflow
          </Button>
          <Divider />
          <Button
            justifyContent="flex-start"
            leftIcon="at-sign"
            variant="ghost"
            isFullWidth
          >
            Edit recruiting team
          </Button>
          <Divider />
          <Button
            justifyContent="flex-start"
            leftIcon="attachment"
            variant="ghost"
            isFullWidth
          >
            Upload CVs/Resumes
          </Button>
          <Divider />
          <Button
            justifyContent="flex-start"
            leftIcon="add"
            variant="ghost"
            isFullWidth
          >
            Add candidate
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
