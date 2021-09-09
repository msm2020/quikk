import React from "react";
import { Image } from "@chakra-ui/core";

export default function ProfileImage({ src, fullName }) {
  return (
    <Image
      rounded="full"
      src={src}
      size="90px"
      objectFit="cover"
      alt={`${fullName}'s profile image.`}
    />
  );
}
