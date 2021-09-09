import { Box, Flex, Stack, Text } from "@chakra-ui/core";
import React from "react";

const RoleIcon = ({ name }) => {
  const nameArray = name.split(" ");
  const initials = nameArray.map((each) => each.charAt(0)).join("");
  return (
    <Box
      mx="1"
      backgroundColor="#f0f4f7"
      color="#41bb93"
      py="2"
      px={initials.length > 1 ? "2" : "3"}
      borderRadius="50%"
    >
      <Text fontSize="xs">{initials}</Text>
    </Box>
  );
};
const activityTrack = [
  {
    date: "25 December 2020",
    activities: [
      {
        id: 123,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Applied",
        to: "Rejected",
      },
      {
        id: 124,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Rejected",
        to: "Applied",
      },
      {
        id: 125,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Applied",
        to: "Rejected",
      },
      {
        id: 126,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Rejected",
        to: "Applied",
      },
      {
        id: 127,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Applied",
        to: "Rejected",
      },
    ],
  },
  {
    date: "24 December 2020",
    activities: [
      {
        id: 123,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Applied",
        to: "Rejected",
      },
      {
        id: 124,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Rejected",
        to: "Applied",
      },
      {
        id: 125,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Applied",
        to: "Rejected",
      },
      {
        id: 126,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Rejected",
        to: "Applied",
      },
      {
        id: 127,
        candidate: "Yudhbir Singh",
        recruiter: "A V",
        from: "Applied",
        to: "Rejected",
      },
    ],
  },
];

function ActivityTabWrapper() {
  return (
    <Box
      p="5"
      m="3"
      backgroundColor="#eeeeee"
      borderRadius="1em"
      boxShadow="md"
    >
      <Box maxWidth="800px" mx="auto">
        {activityTrack.map((eachDay) => (
          <Box key={eachDay.date}>
            <Text color="grey" my="2">
              {eachDay.date}
            </Text>
            <Stack align="start">
              {eachDay.activities.map((eachActivity) => (
                <Box
                  width="auto"
                  m="2"
                  borderRadius="0.45em"
                  backgroundColor="white"
                  p="3"
                  key={eachActivity.id}
                >
                  <Flex align="center">
                    <RoleIcon name={eachActivity.recruiter} />
                    <Text ml="3">
                      <b>{eachActivity.recruiter}</b> moved candidate{" "}
                      <b>{eachActivity.candidate}</b> from the stage{" "}
                      <b>{eachActivity.from}</b> to the stage{" "}
                      <b>{eachActivity.to}</b>
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ActivityTabWrapper;
