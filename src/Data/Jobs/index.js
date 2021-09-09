import dp from "../../static/assets/other/profile.jpg";
import location from "../../static/assets/icons/Job/Location.png";
import salary from "../../static/assets/icons/Job/Salary.png";
import experience from "../../static/assets/icons/Job/Experience.png";

const filterCategories = [
  {
    title: "Freshness",
    options: [
      {
        value: "today",
        name: "Today",
      },
      {
        value: "yesterday",
        name: "Yesterday",
      },
      {
        value: "week",
        name: "Within a Week",
      },
    ],
    defaultValues: [],
  },
  {
    title: "Location",
    options: [
      {
        value: "mumbai",
        name: "Mumbai",
      },
      {
        value: "delhi",
        name: "Delhi",
      },
      {
        value: "chennai",
        name: "Chennai",
      },
    ],
    defaultValues: [],
  },
  {
    title: "Industry",
    options: [
      {
        value: "accounts",
        name: "Accounts",
      },
      {
        value: "engineering",
        name: "Engineering",
      },
      {
        value: "software",
        name: "Software Engineering",
      },
    ],
    defaultValues: [],
  },
  {
    title: "Education",
    options: [
      {
        value: "undergraduate",
        name: "Under Graduate",
      },
      {
        value: "postgraduate",
        name: "Post Graduate",
      },
      // {
      //     value: '',
      //     name: 'Software Engineering'
      // },
    ],
    defaultValues: [],
  },
  {
    title: "Job Type",
    options: [
      {
        value: "internship",
        name: "Internship",
      },
      {
        value: "walkIn",
        name: "Walk In",
      },
      // {
      //     value: '',
      //     name: 'Software Engineering'
      // },
    ],
    defaultValues: [],
  },
];
const demoProfile = [
  {
    name: "John Doe",
    headline: "UI/UX Designer at Apple Inc.",
    strength: 91,
    comment: "Great",
    img: dp,
    jobs: {
      recommended: {
        count: 45,
      },
      applied: {
        count: 10,
      },
    },
  },
];

const recommendedJobs = [
  {
    id: "102234",
    designation: "UI Designer",
    company: "Fujifilm Pvt Ltd",
    fromNow: "3 hours ago",
    locationIcon: location,
    expIcon: experience,
    salaryIcon: salary,
    location: "Gurgaon, India",
    experience: "6-8 Years",
    salary: [25000, 35000],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. ",
    desired:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. ",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl.",
    attachment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl.",
    keywords: [
      "Adobe Photoshop",
      "Adobe XD",
      "Illustrator",
      "Sketch",
      "Wireframing",
    ],
    type: "walkIn",
    inTime: "11am",
    inDate: "24 April",
    venue: "Connaught Place, Sansad Marg, New Delhi, Delhi 110001",
    fromTime: "11:00AM",
    toTime: "04:00PM",
    contact: ["Brajender Singh", "Gaurav Jain"],
    posted: {
      name: "Not Provided",
      role: "Company Recruiter",
      img: dp,
      location: "Bengaluru",
    },
    job: {
      salary: "Not disclosed by member",
      industry: "IT Software/ Software Services",
      functional: ["Design", " Creative", "User Experience"],
      category: "Creative",
      role: "User Experience Designer",
      type: ["Permanent Jobs", "Full Time"],
    },
    links: [
      {
        name: "mail",
        value: "www.google.com",
      },
      {
        name: "linkedIn",
        value: "www.google.com",
      },
      {
        name: "facebook",
        value: "www.google.com",
      },
      {
        name: "whatsapp",
        value: "www.google.com",
      },
    ],
    skills: [
      "Photoshop",
      "Illustrator",
      "Wireframes",
      "Mockups",
      "UX Design",
      "High Fidelity Wireframe",
      "Design",
      "Software",
    ],
  },
  {
    id: "102235",
    designation: "App Designer",
    company: "Fujifilm Pvt Ltd",
    fromNow: "3 hours ago",
    location: "Gurgaon, India",
    experience: "6-8 Years",
    salary: [25000, 35000],
    locationIcon: location,
    expIcon: experience,
    salaryIcon: salary,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. ",
    desired:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. ",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl.",
    attachment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl.",
    keywords: [
      "Adobe Photoshop",
      "Adobe XD",
      "Illustrator",
      "Sketch",
      "Wireframing",
    ],
    type: "walkIn",
    inTime: "11am",
    inDate: "24 April",
    venue: "Connaught Place, Sansad Marg, New Delhi, Delhi 110001",
    fromTime: "11:00AM",
    toTime: "04:00PM",
    contact: ["Brajender Singh", "Gaurav Jain"],
    posted: {
      name: "Not Provided",
      role: "Company Recruiter",
      img: dp,
      location: "Bengaluru",
    },
    job: {
      salary: "Not disclosed by member",
      industry: "IT Software/ Software Services",
      functional: ["Design", " Creative", "User Experience"],
      category: "Creative",
      role: "User Experience Designer",
      type: ["Permanent Jobs", "Full Time"],
    },
    links: [
      {
        name: "mail",
        value: "www.google.com",
      },
      {
        name: "linkedIn",
        value: "www.google.com",
      },
      {
        name: "facebook",
        value: "www.google.com",
      },
      {
        name: "whatsapp",
        value: "www.google.com",
      },
    ],
    skills: [
      "Photoshop",
      "Illustrator",
      "Wireframes",
      "Mockups",
      "UX Design",
      "High Fidelity Wireframe",
      "Design",
      "Software",
    ],
  },
  {
    id: "102236",
    designation: "Web Designer",
    company: "Fujifilm Pvt Ltd",
    fromNow: "3 hours ago",
    location: "Gurgaon, India",
    experience: "6-8 Years",
    salary: [25000, 35000],
    locationIcon: location,
    expIcon: experience,
    salaryIcon: salary,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. ",
    desired:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. ",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl.",
    attachment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl.",
    keywords: [
      "Adobe Photoshop",
      "Adobe XD",
      "Illustrator",
      "Sketch",
      "Wireframing",
    ],
    type: "job",

    posted: {
      name: "Not Provided",
      role: "Company Recruiter",
      img: dp,
      location: "Bengaluru",
    },
    job: {
      salary: "Not disclosed by member",
      industry: "IT Software/ Software Services",
      functional: ["Design", " Creative", "User Experience"],
      category: "Creative",
      role: "User Experience Designer",
      type: ["Permanent Jobs", "Full Time"],
    },
    links: [
      {
        name: "mail",
        value: "www.google.com",
      },
      {
        name: "linkedIn",
        value: "www.google.com",
      },
      {
        name: "facebook",
        value: "www.google.com",
      },
      {
        name: "whatsapp",
        value: "www.google.com",
      },
    ],
    skills: [
      "Photoshop",
      "Illustrator",
      "Wireframes",
      "Mockups",
      "UX Design",
      "High Fidelity Wireframe",
      "Design",
      "Software",
    ],
  },
  {
    id: "102237",
    designation: "Flutter Designer",
    company: "Fujifilm Pvt Ltd",
    fromNow: "3 hours ago",
    location: "Gurgaon, India",
    experience: "6-8 Years",
    salary: [25000, 35000],
    locationIcon: location,
    expIcon: experience,
    salaryIcon: salary,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. ",
    desired:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl. ",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl.",
    attachment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque odio. Integer dapibus nibh a ligula consectetur ullamcorper. Curabitur eget dapibus quam. Cras volutpat ullamcorper velit, in suscipit mauris tempus et. Sed tortor arcu, suscipit eget arcu ut, consectetur vestibulum ante. Pellentesque luctus convallis elit. Praesent lacinia enim nec eros maximus, eu efficitur nisi condimentum. Duis efficitur, dui nec sollicitudin imperdiet, ligula urna condimentum odio, sodales eleifend elit diam sit amet enim. Ut vel mollis nisl.",
    keywords: [
      "Adobe Photoshop",
      "Adobe XD",
      "Illustrator",
      "Sketch",
      "Wireframing",
    ],
    type: "job",
    posted: {
      name: "Not Provided",
      role: "Company Recruiter",
      img: dp,
      location: "Bengaluru",
    },
    job: {
      salary: "Not disclosed by member",
      industry: "IT Software/ Software Services",
      functional: ["Design", " Creative", "User Experience"],
      category: "Creative",
      role: "User Experience Designer",
      type: ["Permanent Jobs", "Full Time"],
    },
    links: [
      {
        name: "mail",
        value: "www.google.com",
      },
      {
        name: "linkedIn",
        value: "www.google.com",
      },
      {
        name: "facebook",
        value: "www.google.com",
      },
      {
        name: "whatsapp",
        value: "www.google.com",
      },
    ],
    skills: [
      "Photoshop",
      "Illustrator",
      "Wireframes",
      "Mockups",
      "UX Design",
      "High Fidelity Wireframe",
      "Design",
      "Software",
    ],
  },
];

const options = {
  notice_period: [
    { value: "FIFTEENDAYS", label: "15 Days" },
    { value: "ONEMONTH", label: "1 Month" },
    { value: "TWOMONTH", label: "2 Months" },
    { value: "THREEMONTH", label: "3 Months" },
    { value: "ALREADYSERVED", label: "Already Served" },
  ],
  currency: [
    { value: "INR", label: "Indian Rupee" },
    { value: "USD", label: "US Dollar" },
  ],
  course_type: [
    { value: "FULLTIME", label: "Full Time" },
    { value: "PARTIME", label: "Part Time" },
    { value: "DISTANCELEARNING", label: "Distance Learning" },
  ],
  proficiency: [
    { value: "BEGINNER", label: "Beginner" },
    { value: "PROFICIENT", label: "Proficient" },
    { value: "EXPERT", label: "Expert" },
  ],
  job_type: [
    { value: "PERMANENT", label: "Permanent" },
    { value: "TEMPORARY", label: "Temporary" },
  ],
  emp_type: [
    { value: "FULLTIME", label: "Full Time" },
    { value: "PARTTIME", label: "Part Time" },
    { value: "WORKFROMHOME", label: "Work From Home" },
  ],
  project_status: [
    { value: "INPROGRESS", label: "In Progress" },
    { value: "FINISHED", label: "Finished" },
  ],
  employment_nature: [
    { value: "FULLTIME", label: "Full Time" },
    { value: "PARTTIME", label: "Part Time" },
    { value: "CONTRACTUAL", label: "Contractual" },
  ],
  project_location: [
    { value: "ONSITE", label: "On Site" },
    { value: "OFFSITE", label: "Off Site" },
  ],
};

const tagIndex = {
  "": 0,
  "/resume": 0,
  "/personal-info": 1,
  "/skills": 2,
  "/professional-info": 3,
  "/eligibility": 4,
  "/other-details": 5,
};

export { filterCategories, tagIndex, demoProfile, recommendedJobs, options };
