import Eligibility from "../../static/assets/icons/Profile/Eligibility.png";
import OtherDetails from "../../static/assets/icons/Profile/Other Details.png";
import PersonalInfo from "../../static/assets/icons/Profile/Personal Info.png";
import ProfessionalInfo from "../../static/assets/icons/Profile/Professional Info.png";
import Resume from "../../static/assets/icons/Profile/Resume.png";
import Skills from "../../static/assets/icons/Profile/Skills.png";
import Jobs from "../../static/assets/icons/Profile/Jobs.png";
import Profile from "../../static/assets/icons/Profile/Account.png";
import dp from "../../static/assets/other/profile.jpg";
import location from "../../static/assets/icons/Job/Location.png";
import salary from "../../static/assets/icons/Job/Salary.png";
import experience from "../../static/assets/icons/Job/Experience.png";

const userData = {
  name: "John Doe",
  designation: "UI/UX Designer at Apple, Inc",
  location: "Gurgaon, India",
  experience: "3 years(s) 11 month(s)",
  locationIcon: location,
  expIcon: experience,
  salaryIcon: salary,
  desiredSalary: "5 Lakh(s) 70 Thousand",
  expectedSalary: "10 Lakh(s) 60 Thousand",
  profilePic: dp,
  phone: "+123(456) 789 101",
  mail: "contact@johndoe.com",
  strength: 91,
  strengthComment: "Great",
  suggestion: {
    add: ["Employment", "Education", "IT Skills", "Projects"],
  },
  headline: "User Interface Designer (Web & Mobile)",
  profileSummary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere non lorem varius ultrices. Duis eu odio eleifend, pharetra sapien vitae, placerat elit. Mauris in lobortis magna, nec luctus justo. Quisque commodo, nisi sit amet condimentum consequat, enim purus aliquam urna, sed porttitor magna urna eu nibh. Maecenas vitae tellus facilisis, tempor orci rutrum, blandit elit. Proin sed consequat mi. Nam convallis nisi aliquam turpis posuere, nec fermentum sem pellentesque. Aliquam tempus egestas ex. Suspendisse pellentesque eleifend metus nec finibus. Nunc ante nunc, iaculis vel libero ut, ullamcorper volutpat elit. Quisque pulvinar dapibus enim, a tempus orci malesuada ut. In pretium et ante vitae mollis. Donec bibendum vestibulum felis, vel efficitur ante aliquet at. Sed aliquet semper vulputate. Maecenas nibh eros, pellentesque volutpat nisl a, vestibulum rutrum risus. Curabitur non vestibulum erat. ",
  skills: {
    primary: [
      "Photoshop",
      "Illustrator",
      "Logo Design",
      "Broucher Design",
      "Poster",
    ],
    secondary: [
      "Photoshop",
      "Illustrator",
      "Logo Design",
      "Broucher Design",
      "Poster",
    ],
  },
  employment: [
    {
      title: "UI Designer",
      company: "Fujifilm Pvt Ltd",
      duration: "April 2018 to Present (7 months)",
    },
    {
      title: "UI/ UX Designer",
      company: "Fujifilm Pvt Ltd",
      duration: "April 2018 to Present (7 months)",
    },
  ],
  education: [
    {
      degree: "B.Tech Engineering",
      organisation: "IIM Ahmedabad",
      completed: "2016",
      type: "Full Time",
    },
    {
      degree: "Diploma in MBA",
      organisation: "Delhi University",
      completed: "April 2018",
      type: "Full Time",
    },
  ],
  itSkills: {
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere non lorem varius ultrices. Duis eu odio eleifend, pharetra sapien vitae, placerat elit. Mauris in lobortis magna, nec luctus justo. Quisque commodo, nisi sit amet condimentum consequat, enim purus aliquam urna, sed porttitor magna urna eu nibh. Maecenas vitae tellus facilisis, tempor orci rutrum, blandit elit. Proin sed consequat mi. Nam convallis nisi aliquam turpis posuere, nec fermentum sem pellentesque. Aliquam tempus egestas ex. Suspendisse pellentesque eleifend metus nec finibus. Nunc ante nunc, iaculis vel libero ut, ullamcorper volutpat elit. Quisque pulvinar dapibus enim, a tempus orci malesuada ut. In pretium et ante vitae mollis. Donec bibendum vestibulum felis, vel efficitur ante aliquet at. Sed aliquet semper vulputate. Maecenas nibh eros, pellentesque volutpat nisl a, vestibulum rutrum risus. Curabitur non vestibulum erat. ",
  },
  projects: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere non lorem varius ultrices. Duis eu odio eleifend, pharetra sapien vitae, placerat elit. Mauris in lobortis magna, nec luctus justo. Quisque commodo, nisi sit amet condimentum consequat, enim purus aliquam urna, sed porttitor magna urna eu nibh. Maecenas vitae tellus facilisis, tempor orci rutrum, blandit elit. Proin sed consequat mi. Nam convallis nisi aliquam turpis posuere,",
    " nec fermentum sem pellentesque. Aliquam tempus egestas ex. Suspendisse pellentesque eleifend metus nec finibus. Nunc ante nunc, iaculis vel libero ut, ullamcorper volutpat elit. Quisque pulvinar dapibus enim, a tempus orci malesuada ut. In pretium et ante vitae mollis. Donec bibendum vestibulum felis, vel efficitur ante aliquet at. Sed aliquet semper vulputate. Maecenas nibh eros, pellentesque volutpat nisl a, vestibulum rutrum risus. Curabitur non vestibulum erat. ",
  ],
  accomplishments: [
    {
      title: "Online Profile",
      subTitle: "Add in Online Profile ",
    },
    {
      title: "Work Sample",
      subTitle: "Add in Online Profile ",
    },
    {
      title: "White Paper / Research Publication / Journal Entry",
      subTitle: "Add in Online Profile ",
    },
    {
      title: "Presentation",
      subTitle: "Add in Online Profile ",
    },
    {
      title: "Patent",
      subTitle: "Add in Online Profile ",
    },
    {
      title: "Certification",
      subTitle: "Add in Online Profile ",
    },
  ],
  desired: {
    industry: "IT Software / Software Services",
    functional: "Web / Graphic Design / Visualiser",
    role: "User Experience Designer",
    jobType: "Permanent",
    employType: "Full Time",
    shift: null,
    expectedSalary: null,
    location: "Noida",
    desiredIndustry: null,
  },
  personal: {
    dob: "30 Mar 1989",
    perAdd: null,
    gender: "Male",
    areaPin: "110007",
    maritalStatus: "Single / Unmarried",
    homeTown: "Delhi",
    passportNo: null,
    category: "General",
    permitUSA: null,
    permitOtherCountry: null,
    diffAbled: "None",
    languages: [
      {
        name: "Hindi",
        proficiency: "Expert",
        read: true,
        write: true,
        speak: true,
      },
      {
        name: "English",
        proficiency: "Proficient",
        read: true,
        write: true,
        speak: true,
      },
    ],
  },
};

const TabBarIcons = [
  {
    title: "Profile",
    icon: Profile,
    isDisabled: false,
  },

  {
    title: "Resume",
    icon: Resume,
    isDisabled: false,
  },
  {
    title: "Personal Info",
    icon: PersonalInfo,
    isDisabled: false,
  },
  {
    title: "Skills",
    icon: Skills,
    isDisabled: false,
  },
  {
    title: "Professional Info",
    icon: ProfessionalInfo,
    isDisabled: false,
  },
  {
    title: "Eligibility",
    icon: Eligibility,
    isDisabled: false,
  },
  {
    title: "Other Details",
    icon: OtherDetails,
    isDisabled: false,
  },
  {
    title: "Jobs",
    icon: Jobs,
    isDisabled: false,
  },
];

export { TabBarIcons, userData };
