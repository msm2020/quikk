import { action } from "easy-peasy";

import userModel from "./store/models/user.model";
import { format, getYear } from "date-fns";
import alertModel from "./store/models/alert.model";

export default {
  user: userModel,
  alert: alertModel,
  isUpdated: null,
  setUpdateStatus: action((state, status) => {
    state.isUpdated = status;
  }),
  recruiter: {
    scheduleState: {
      type: "",
      interviewer: null,
      companyName: "",
      designation: "",
      date: null,
      duration: null,
      userDetails: "",
      candidateMail: "",
      candidatePhone: "",
      note: "",
    },
  },
  setScheduleDate: action((state, date) => {
    state.recruiter.scheduleState.date = date;
  }),
  setSchedule: action((state, scheduleStateObj) => {
    state.recruiter.scheduleState.type = scheduleStateObj.type;
    state.recruiter.scheduleState.interviewer = scheduleStateObj.interviewer;
    state.recruiter.scheduleState.companyName = scheduleStateObj.companyName;
    state.recruiter.scheduleState.designation = scheduleStateObj.designation;
    state.recruiter.scheduleState.duration = scheduleStateObj.duration;
    state.recruiter.scheduleState.userDetails = scheduleStateObj.userDetails;
    state.recruiter.scheduleState.candidateMail =
      scheduleStateObj.candidateMail;
    state.recruiter.scheduleState.candidatePhone =
      scheduleStateObj.candidatePhone;
    state.recruiter.scheduleState.note = scheduleStateObj.note;
  }),

  userDetails: {
    profile_photo: "",
    resume: "",
    first_name: "",
    last_name: "",
    gender: "",
    marital_status: "",
    dob: "",
    address: {
      address: "",
      city: "",
      country: "",
      state: "null",
    },
    mobiles: ["8448217808"],
    job_type: "",
    emp_type: "",
    currency: "",
    current_salary: null,
    expected_salary: null,
    salary_negotiable: false,
    notice_period: "FIFTEENDAYS",
    notice_period_fixed: false,
    how_long: 2,
    already_serving: false,
    last_working_day: null,
    primary_skills: [],
    suggested_skills: ["Animating", "Photoshop"],
    languages: [
      {
        language: "",
        proficiency: "",
        speak: true,
        write: false,
        read: false,
      },
    ],
    courses: [
      {
        cgpa: "null",
        course: "null",
        coursetype: "DISTANCELEARNING",
        specialization: "null",
        college_name: "null",
        passing_year: null,
        start_date: "",
        end_date: "",
      },
    ],
    professionaldetails: [
      {
        org_name: "null",
        designation: "null",
        responsibilities: "null",
        start_date: "null",
        end_date: "null",
      },
    ],
    physically_chalngd: false,
    physically_chalngd_desc: "null",
    website_urls: [],
    resume_headline: "null",
    profile_summary: "null",
    projects: [
      {
        project_title: "",
        client: "",
        project_employer: "",
        project_status: "INPROGRESS",
        project_details: "",
        employment_nature: "CONTRACTUAL",
        project_location: "ONSITE",
        site: "",
        teamsize: 0,
        role: "",
        role_description: "",
        skills: [],
        start_date: "",
        end_date: "",
      },
    ],
  },
  // setCurrency: action((state, value) => {
  //   state.userDetails.currency = value.value;
  // }),
  setResume: action((state, data) => {
    state.userDetails.profile_photo = data.profilePhoto;
    state.userDetails.resume = data.resume;
  }),
  setPersonalDetails: action((state, data) => {
    state.userDetails.first_name = data.first_name;
    state.userDetails.last_name = data.last_name;
    state.userDetails.gender = data.gender;
    state.userDetails.marital_status = data.marital_status;
    state.userDetails.dob = format(data.dob, "yyyy-MM-dd");
    state.userDetails.address = data.address;
    state.userDetails.address.country = data.address.country.value;
    state.userDetails.mobiles = data.mobiles;
    state.userDetails.salary_negotiable = data.salary_negotiable;
    state.userDetails.notice_period = data.notice_period;
    state.userDetails.notice_period_fixed = data.notice_period_fixed;
    state.userDetails.how_long = Number(data.how_long);
    state.userDetails.already_serving = data.already_serving;
    state.userDetails.last_working_day =
      data.last_working_day && format(data.last_working_day, "yyyy-MM-dd");
    state.userDetails.currency = data.currency.value;
    state.userDetails.current_salary = Number(data.current_salary);
    state.userDetails.expected_salary = Number(data.expected_salary);
  }),
  // setSalary: action((state, salaryObj) => {
  //   state.userDetails.current_salary = salaryObj.current_salary;
  //   state.userDetails.expected_salary = salaryObj.expected_salary;
  // }),
  setSkills: action((state, skillsObj) => {
    state.userDetails.primary_skills = skillsObj.primary_skills;
    state.userDetails.suggested_skills = skillsObj.suggested_skills;
  }),
  setProfessionalInfo: action((state, data) => {
    state.userDetails.professionaldetails = [...data];
    state.userDetails.professionaldetails =
      data.length > 0 &&
      data.map((each) => ({
        ...each,
        start_date: each.start_date && format(each.start_date, "yyyy-MM-dd"),
        end_date: each.end_date && format(each.end_date, "yyyy-MM-dd"),
      }));
  }),
  setProject: action((state, data) => {
    state.userDetails.projects = [...data];
    state.userDetails.projects =
      data.length > 0 &&
      data.map((each) => ({
        ...each,
        start_date: each.start_date && format(each.start_date, "yyyy-MM-dd"),
        end_date: each.end_date && format(each.end_date, "yyyy-MM-dd"),
        skills: each.skills && each.skills.replace(/\s+/g, "").split(","),
      }));
  }),
  setCourses: action((state, data) => {
    state.userDetails.courses = [...data];
    state.userDetails.courses =
      data.length > 0 &&
      data.map((each) => ({
        ...each,
        start_date: each.start_date && format(each.start_date, "yyyy-MM-dd"),
        end_date: each.end_date && format(each.end_date, "yyyy-MM-dd"),
        coursetype: each.coursetype.value,
        passing_year: each.passing_year && getYear(each.passing_year),
      }));
  }),
  setOtherDetails: action((state, data) => {
    state.userDetails.job_type = data.job_type;
    state.userDetails.emp_type = data.emp_type;
    state.userDetails.languages = [...data.languages];
    state.userDetails.physically_chalngd = data.physically_chalngd;
    state.userDetails.physically_chalngd_desc = data.physically_chalngd_desc;
    state.userDetails.website_urls = [...data.website_urls];
  }),
};
