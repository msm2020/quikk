import { Box, Button, Flex, Grid, Image, Stack, Text } from "@chakra-ui/core";
import EditorContainer from "Components/Editor";
import React, { useState } from "react";
import NoComments from "static/assets/SVGs/NoComments";
import Profile from "../../../../static/assets/other/profile.jpg";

const commentList = [
  {
    recruiter: {
      profilePic: Profile,
      designation: "CEO",
      name: "Anurag Verma",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel malesuada risus. Sed ornare posuere nunc, ultricies aliquet turpis vehicula at. Aliquam auctor orci eget faucibus auctor. Duis nec lobortis orci. Phasellus ante tortor, aliquam sit amet mauris non, finibus vulputate ante. Vivamus vel porta nibh. Donec congue faucibus ante nec interdum. Cras ultricies sodales nibh, vel laoreet ipsum scelerisque sit amet. Pellentesque lacinia mauris sed orci tristique lacinia. Quisque eu ante libero. Vestibulum augue elit, placerat et sapien eget, aliquam ullamcorper mauris. Pellentesque pellentesque imperdiet lobortis. Cras ac pharetra odio. Suspendisse porttitor urna ac neque commodo, quis venenatis massa porta. Donec diam est, commodo vitae mattis eget, bibendum id mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    sentTime: "24 Dec 2020, 11am",
    id: 10223,
  },
  {
    recruiter: {
      profilePic: Profile,
      designation: "CEO",
      name: "Anurag Verma",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel malesuada risus. Sed ornare posuere nunc, ultricies aliquet turpis vehicula at. Aliquam auctor orci eget faucibus auctor. Duis nec lobortis orci. Phasellus ante tortor, aliquam sit amet mauris non, finibus vulputate ante. Vivamus vel porta nibh. Donec congue faucibus ante nec interdum. Cras ultricies sodales nibh, vel laoreet ipsum scelerisque sit amet. Pellentesque lacinia mauris sed orci tristique lacinia. Quisque eu ante libero. Vestibulum augue elit, placerat et sapien eget, aliquam ullamcorper mauris. Pellentesque pellentesque imperdiet lobortis. Cras ac pharetra odio. Suspendisse porttitor urna ac neque commodo, quis venenatis massa porta. Donec diam est, commodo vitae mattis eget, bibendum id mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    sentTime: "24 Dec 2020, 11am",
    id: 10224,
  },
];

const CommentsCard = ({ eachComment }) => (
  <Flex m="2">
    <Image src={eachComment.recruiter.profilePic} size="72px" rounded="full" />
    <Flex
      ml="5"
      direction="column"
      backgroundColor="white"
      p="5"
      borderRadius="1em"
      boxShadow="md"
    >
      <Flex align="center" justify="space-between">
        <Flex direction="column">
          <Text fontSize="md" fontWeight="600">
            {eachComment.recruiter.name}
          </Text>
          <Text fontSize="sm" color="grey">
            {eachComment.recruiter.designation}
          </Text>
        </Flex>
        <Text my="2" color="grey">
          {eachComment.sentTime}
        </Text>
      </Flex>
      <Text my="2">{eachComment.recruiter.comment}</Text>
    </Flex>
  </Flex>
);

function CommentsTabWrapper() {
  const [comments, setComments] = useState(commentList);
  const [isTyping, setTyping] = useState(false);
  const [eachComment, setEachComment] = useState("");
  const handleValue = (value) => setEachComment(value);
  const handleComments = () => {
    setComments([
      ...comments,
      {
        recruiter: {
          profilePic: Profile,
          designation: "CEO",
          name: "Anurag Verma",
          comment: eachComment,
        },
        sentTime: "24 Dec 2020, 11am",
        id: 10225 + Math.floor(Math.random() * 10),
      },
    ]);
    setEachComment("");
  };
  return (
    <Box
      p="5"
      m="3"
      backgroundColor="#eeeeee"
      borderRadius="1em"
      boxShadow="md"
    >
      {comments.length > 0 ? (
        <Box>
          <Grid templateColumns="repeat(auto-fit,minmax(120px, 1fr))">
            <Stack>
              {comments.map((eachComment) => (
                <CommentsCard eachComment={eachComment} key={eachComment.id} />
              ))}
            </Stack>
            {isTyping ? (
              <Box
                alignSelf="flex-start"
                p="4"
                backgroundColor="white"
                mx="2"
                borderRadius="1em"
                boxShadow="md"
              >
                <EditorContainer
                  outputFormat="plain"
                  setStoredValue={handleValue}
                />
                <Button
                  my="3"
                  variantColor="teal"
                  onClick={() => {
                    handleComments();
                    setTyping(false);
                  }}
                  width="100%"
                >
                  Save
                </Button>
              </Box>
            ) : (
              <Stack
                alignSelf="flex-start"
                align="center"
                p="4"
                backgroundColor="white"
                m="2"
                borderRadius="1em"
                boxShadow="md"
              >
                <NoComments height="30vh" width="30vw" />
                <Button
                  leftIcon="add"
                  variantColor="teal"
                  onClick={() => setTyping(true)}
                >
                  New Comment
                </Button>
              </Stack>
            )}
          </Grid>
        </Box>
      ) : (
        <Stack align="center">
          <NoComments height="30vh" width="30vw" />
          <Text fontSize="xl" my="2" fontWeight="600">
            No Comments Yet
          </Text>
          <Text fontSize="md" color="grey">
            Write your first comment
          </Text>
          <Button
            leftIcon="add"
            variantColor="teal"
            onClick={() => setTyping(true)}
          >
            New Comment
          </Button>
        </Stack>
      )}
    </Box>
  );
}

export default CommentsTabWrapper;
