import {
  Box,
  Button,
  Checkbox,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/core";
import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useStoreActions } from "easy-peasy";
import qs from "querystring";

import { loginCandidate, loginRecruiter } from "../../../Http/ApiService";
import LoadingButton from "Components/Core/LoadingButton";
import Logo from "../../../static/assets/other/quiklyy_logo.png";
import NavBar from "Pages/HomePage/NavBar/NavBar";

const initialState = {
  showPassword: false,
  isRequestProcessing: false,
};

const routerStyle = {
  color: "#0000b3",
  textAlign: "right",
};

function Login({ isRecruiter }) {
  const location = useLocation();
  const [state, setState] = useState(initialState);
  const { register, handleSubmit, errors, reset } = useForm();
  const { triggerAlert, closeAlert, userAction } = useStoreActions(
    (actions) => ({
      triggerAlert: actions.alert.show,
      closeAlert: actions.alert.close,
      userAction: actions.user,
    })
  );

  /**
   * Process login with the API.
   */
  const processLogin = async ({ payload }) => {
    try {
      const response = isRecruiter
        ? await loginRecruiter(payload)
        : await loginCandidate(payload);

      // resetProgress();
      console.log("Login Sucess");
      console.log(response);
      if (response.status === 200) {
        const parsedQS = qs.parse(location.search);
        const { accessToken, userType } = response.data;
        userAction.persist({ sessionToken: accessToken, userType: userType });
        userAction.initializeUser({ continueSlug: parsedQS["?continue"] });

        reset();
        window.location.href="/"
        return;
      }
    } catch (error) {
      resetProgress();
      return showAlert({
        severity: "error",
        message:
          error.response.data.message ||
          "Something went wrong, please try again later!",
      });
    }
  };

  const resetProgress = () => {
    return setState({ ...state, isRequestProcessing: false });
  };

  const handleClick = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const showAlert = ({ severity, message }) => {
    return triggerAlert({ severity, message });
  };

  const handleLogin = async (data, e) => {
    e.preventDefault();
    closeAlert();
    setState({
      ...state,
      setServerErrors: [],
      isRequestProcessing: true,
    });

    await processLogin({
      payload: data,
    });
  };

  return (
    <Box>
      <NavBar/>
  
    <Box p={{sm:"5%",md:"10%",lg:"20%",xs:"5%"}}paddingTop={{xs:"20% !important",sm:"20% !important",md:"10% !important"}}maxWidth="75%" margin="auto">
    <Image maxW="50%" margin="auto" src={Logo} />
    <Box>
      <Text fontSize="xl" fontWeight="bold">
        Login Here
      </Text>
      {state.serverErrors ? (
        <ul>
          {state.serverErrors.map((error) => (
            <li key={error.value} style={{ color: "#ff0000" }}>
              {error.value}
            </li>
          ))}
        </ul>
      ) : null}
      <form onSubmit={handleSubmit(handleLogin)}>
        {state.serverErrors ? (
          <ul>
            {state.serverErrors.map((error) => (
              <li key={error.value} style={{ color: "#ff0000" }}>
                {error.value}
              </li>
            ))}
          </ul>
        ) : null}
        <Stack marginY="1em">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            ref={register({
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "#ff0000" }}>{"*" + errors.email.message}</p>
          )}
          <InputGroup>
            <Input
              type={state.showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              ref={register({
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password should be at-least 8 characters.",
                },
              })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {state.showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.password && (
            <p style={{ color: "#ff0000" }}>{"*" + errors.password.message}</p>
          )}
        </Stack>
        <SimpleGrid minChildWidth="120px" spacing="1em">
          <LoadingButton
            type="submit"
            text="LOGIN"
            loading={state.isRequestProcessing}
          />
        </SimpleGrid>
      </form>
      <Stack marginY="1em">
        <SimpleGrid minChildWidth="80px" spacing="1em">
          <Checkbox colorScheme="green">Remember me</Checkbox>
          <RouterLink style={routerStyle} to="">
            Forgot Your Password?
          </RouterLink>
        </SimpleGrid>

        <Text fontSize="sm" textAlign="left" marginY="1em">
          Please write to us at <Link color="#0000b3">info@quiklyy.com</Link> if
          you have face any issues in posting jobs on the site
        </Text>
      </Stack>
      </Box>
    </Box>
    </Box>
  );
}
export default Login;
