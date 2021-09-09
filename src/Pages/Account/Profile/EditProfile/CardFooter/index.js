import React from "react";
import { Button, Grid } from "@chakra-ui/core";
import { tagIndex } from "Data/Jobs";
import { useHistory } from "react-router";
import { getKey } from "utils/getkey";

function CardFooter({ snHandler }) {
  // const index = useStoreState((state) => state.profile.index);
  // const { setIndex, decreaseIndex } = useStoreActions((actions) => ({
  //   setIndex: actions.setIndex,
  //   decreaseIndex: actions.decreaseIndex,
  // }));
  const history = useHistory();
  const url = "/candidate/create";
  const currentKey = tagIndex[history.location.pathname.replace(url, "")];
  const nextKey = url + getKey(currentKey, "next");
  const previousKey = url + getKey(currentKey, "previous");

  //   const nextKey = getNextKey();
  //   history.push('/candidate/create'+nextKey)
  //   // setIndex(index + 1);
  // };

  return (
    <Grid
      marginTop="2em"
      paddingTop="2em"
      gap="1em"
      templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
      alignItems="center"
      justifyItems="center"
    >
      <Button
        isDisabled={currentKey === 0 ? true : false}
        onClick={() => history.push(previousKey)}
        variant="link"
      >
        Back
      </Button>
      <Button
        type="submit"
        onClick={snHandler}
        variantColor="green"
        gridColumn={{ lg: "2/ span 2" }}
        style={{ width: "100%" }}
      >
        Save & Next
      </Button>
      <Button
        // isDisabled={currentKey === 5 ? true : false}
        isDisabled={true}
        variant="link"
        onClick={() => history.push(nextKey)}
      >
        Skip
      </Button>
    </Grid>
  );
}

export default CardFooter;
