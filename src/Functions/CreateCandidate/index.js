import { isNumber } from "lodash";

function validatefName(value) {
  if (!value) {
    return "First Name is required";
  } else if (value.length < 3) {
    return "First Name must be of 3 letters";
  } else if (!/^[a-z ,.'-]+$/i.test(value)) {
    return "Format of name is incorrect";
  } else return true;
}
function validatelName(value) {
  if (!value) {
    return "Last Name is required";
  } else if (value.length < 3) {
    return "Last Name must be of 3 letters";
  } else if (!/^[a-z ,.'-]+$/i.test(value)) {
    return "Format of name is incorrect";
  } else return true;
}

function validateGender(value) {
  if (!value) {
    return "Gender is required";
  } else return true;
}
function validateDOB(value) {
  if (!value) {
    return "Date of Birth is required";
  } else return true;
}

function validateMobile(value) {
  if (value.length > 0) {
    if (value.match(/^(\+91)[' ']?[789][0-9]{9}/) === null) {
      return "Mobile Number should be of the Format +91 XXXXXXXXXX";
    }
  } else return true;
}

function validateNoticePeriod(value) {
  if (!value) {
    return "Notice Period is required";
  } else return true;
}
function validateStartEndDate(value) {
  if (!value) {
    return "Start/End Date is required";
  } else return true;
}

function validateMoney(value) {
  if (!value) {
    return "Salary is required";
  } else if (!isNumber(Number(value))) {
    return "Salary should be an Integer";
  } else return true;
}

function validateCityCountryState(value) {
  if (!value) {
    return "Country/State/City is required";
  } else return true;
}

function validateCurrency(value) {
  if (!value) {
    return "Currency is required";
  } else return true;
}
// function validateMaritalStatus(value){
//     if(!value){
//         return "Marital Status is required";
//     } else return true;
// }

const validateFns = {
  fName: validatefName,
  lName: validatelName,
  gender: validateGender,
  dob: validateDOB,
  mobile: validateMobile,
  notice_period: validateNoticePeriod,
  start_end_date: validateStartEndDate,
  current_salary: validateMoney,
  city: validateCityCountryState,
  country: validateCityCountryState,
  state: validateCityCountryState,
  currency: validateCurrency,
};

export { validateFns };
