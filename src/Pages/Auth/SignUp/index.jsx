import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { registerCandidate, registerRecruiter } from "../../../Http/ApiService";
import LoadingButton from "Components/Core/LoadingButton";
import log from "../../../utils/logger";
import MuiAlert from "@material-ui/lab/Alert";
import Logo from "../../../static/assets/other/quiklyy_logo.png";
import NavBar from "Pages/HomePage/NavBar/NavBar";
import { useEffect } from "react";

const initialState = {
  isRequestProcessing: false,
  showPassword: false,
  serverErrors: [],
};

const processRegistration = async ({
  isRecruiter,
  payload,
  resetProgress,
  resetForm,
  displayAlert,
}) => {
  try {
    const response = isRecruiter
      ? await registerRecruiter(payload)
      : await registerCandidate(payload);

    resetProgress();
    log(response);

    const message = response.data?.message;

    // After a successful registration, recruiter has to login
    // after which a onboarding process will begin.
    if (response.status === 200) {
      resetForm();
      resetProgress();
      return displayAlert({
        severity: "success",
        message:
          "Registration successful! Please verify your email to continue.",
      });
    }

    resetProgress();

    return displayAlert({ severity: "error", message });
  } catch (error) {
    log(error);
    resetProgress();
    return displayAlert({
      severity: "error",
      message: "Something went wrong, please try again!",
    });
  }
};

function SignUp() {
  const[isRecruiter,setRecruiter] = useState(false)
  const [state, setState] = useState(initialState);
  const { register, handleSubmit, errors, reset } = useForm();
  const { showPassword, serverErrors, isRequestProcessing } = state;
  const [severity, setSeverity] = useState();
  const [msg, setMsg] = useState();
  const [styled, setStyled] = useState({display:"none"});

  useEffect(()=>{
   const path = window.location.pathname;
   if(path.includes('recruiter')){
     setRecruiter(true)
   }
  },[])

  // Update state without mutating it.
  const _setState = (key, value) => {
    return setState({ ...state, [key]: value });
  };

  const handleClick = () => {
    return _setState("showPassword", !state.showPassword);
  };

  const resetProgress = () => {
    return _setState("isRequestProcessing", false);
  };

  const displayAlert = ({ message, severity }) => {
    setMsg(message);
    setSeverity(severity);
    setStyled({display:"flex"});
    return true;
  };

  const handleSave = (data, e) => {
    log(data);
    e.preventDefault();
    setState({
      ...state,
      serverErrors: [],
      isRequestProcessing: true,
    });

    processRegistration({
      isRecruiter,
      displayAlert,
      resetProgress,
      resetForm: reset,
      payload: data,
    });
  };

  return (
    <Box>
    <NavBar/>

  <Box p={{sm:"5%",md:"10%",lg:"20%",xs:"5%"}} paddingTop={{xs:"20% !important",sm:"20% !important",md:"10% !important"}} maxWidth="75%" margin="auto">
  <Image maxW="50%" margin="auto" src={Logo} />
  <Box>
      <Text fontSize="xl" fontWeight="bold">
        New Registration
      </Text>
      <Alert severity={severity} style={styled}>{msg}</Alert>
      <form onSubmit={handleSubmit(handleSave)}>
        {serverErrors ? (
          <ul>
            {serverErrors.map((error) => (
              <li key={error.value} style={{ color: "#ff0000" }}>
                {error.value}
              </li>
            ))}
          </ul>
        ) : null}
        <Stack marginY="1em">
          <Input
            placeholder="First Name"
            type="text"
            name="firstname"
            ref={register({
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name should be at least 2 characters",
              },
              maxLength: {
                value: 20,
                message: "First name should be at most 20 characters",
              },
            })}
          />
          {errors.firstname && (
            <p style={{ color: "#ff0000" }}>{"*" + errors.firstname.message}</p>
          )}
          <Input
            placeholder="Last Name"
            type="text"
            name="lastname"
            ref={register({
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Last name should be at least 2 characters",
              },
              maxLength: {
                value: 20,
                message: "Last name should be at most 20 characters",
              },
            })}
          />
          {errors.lastname && (
            <p style={{ color: "#ff0000" }}>{"*" + errors.lastname.message}</p>
          )}
          <Input
            type="email"
            placeholder="Email Address"
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
              type={showPassword ? "text" : "password"}
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
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.password && (
            <p style={{ color: "#ff0000" }}>{"*" + errors.password.message}</p>
          )}
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmpassword"
              ref={register({
                required: "Confirm password is required.",
                minLength: {
                  value: 8,
                  message: "Confirm Password should be at-least 8 characters.",
                },
              })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.confirmpassword && (
            <p style={{ color: "#ff0000" }}>
              {"*" + errors.confirmpassword.message}
            </p>
          )}
          <Input
            type="number"
            placeholder="Phone Number"
            name="phone"
            ref={register({
              required: "Phone number is required.",
              minLength: {
                value: 10,
                message: "Phone number should be at-least 10 digits.",
              },
              maxLength: {
                value: 20,
                message: "Phone number should be at-most 20 digits.",
              },
            })}
          />
          {errors.phone && (
            <p style={{ color: "#ff0000" }}>{"*" + errors.phone.message}</p>
          )}
          {isRecruiter && (
            <>
              <Select
                placeholder="Select Type of Business"
                name="companytype"
                ref={register({
                  required: "Please select the type of business",
                })}
              >
                <option value="AGENCY">Agency</option>
                <option value="CORPORATE">Corporate</option>
              </Select>
              {errors.businessType && (
                <p style={{ color: "#ff0000" }}>
                  {"*" + errors.businessType.message}
                </p>
              )}
              <Input
                marginY="0.5em"
                placeholder="Company Name"
                name="companyname"
                ref={register({
                  required: "Company name is required",
                  minLength: {
                    value: 2,
                    message: "Company name should be at-least 2 characters.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Company name should be at-most 20 characters.",
                  },
                })}
              />
              {errors.companyName && (
                <p style={{ color: "#ff0000" }}>
                  {"*" + errors.companyName.message}
                </p>
              )}
            </>
          )}
        </Stack>

        <Stack>
          <LoadingButton
            type="submit"
            text="REGISTER"
            loading={isRequestProcessing}
          />
        </Stack>
      </form>
      </Box>
      </Box>
    </Box>
  );
}

export default SignUp;

function Alert(props) {
  return <MuiAlert elevation={6} 
                   variant="filled" {...props} />;
}
