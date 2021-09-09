import Profile from "../../../static/assets/other/profile.jpg";
import QuiklyyMail from "../../../static/assets/icons/quiklyy.png";
import OtherMail from "../../../static/assets/icons/Recruiter/Emails.png";
import Gmail from "../../../static/assets/icons/Recruiter/gmail.png";

const roleDetails = [
  {
    role: "Administrator",
    roleValue: "admin",
    isEditable: false,
    description:
      "Administrators have access to all candidates, jobs, and settings, and can fully manage the company's account and members. Only users with this role can delete other administrators, have high-level data access permission enabled, and be granted access to all data with a level-protected status.",
    roleDetails: {
      General: {
        core: [{ value: "highLevel", label: "High-level data access" }],
        candidates: [{ value: "viewCandidate", label: "View Candidates" }],
        jobs: [{ value: "viewJobs", label: "View Jobs" }],
      },
      Workflow: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      Features: {
        mailbox: [{ value: "highLevel", label: "High-level data access" }],
        calendar: [{ value: "highLevel", label: "High-level data access" }],
        promote: [{ value: "highLevel", label: "High-level data access" }],
        reports: [{ value: "highLevel", label: "High-level data access" }],
        reportDashboards: [
          { value: "highLevel", label: "High-level data access" },
        ],
      },
      Company: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      AddOns: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
    },
    roleSettings: {
      General: {
        Candidates: {
          "View Candidate": true,
          "Manage Candidate": true,
          "Delete Candidate": true,
          "Add Candidates": true,
          "Source Profile": true,
          "Add Profile to ATS": true,
          "Share Candidate": true,
        },
        Jobs: {
          "Create Jobs": true,
          "View Jobs": true,
          "View All existing jobs data": true,
          "Manage Jobs": true,
          "Manage Automated Actions": true,
          "Manage Team": true,
          "Publish Jobs": true,
        },
        Clients: {
          "Create Clients": true,
          "View Clients": true,
          "View all existing clients data": true,
          "Manage Clients": true,
          "Publish Clients": true,
        },
      },
      Workflow: {
        core: {
          "Manage Template": true,
          "Manage Disqualify Reason": true,
          "Manage Screening Questions": true,
          "Upload Resume": true,
        },
      },
      Features: {
        Mailbox: {
          "View Mailbox": true,
          "Send Emails": true,
          "Manage Email Integrations": true,
        },
      },
      Company: {
        core: {
          "Manage Company": true,
          "Manage Subscription & Billing": true,
          "Manage Members & Roles": true,
        },
      },
    },
  },
  {
    role: "Corporate recruiter",
    roleValue: "corpRecruit",
    isEditable: true,
    savedDays: "5 days",
    description:
      "Administrators have access to all candidates, jobs, and settings, and can fully manage the company's account and members. Only users with this role can delete other administrators, have high-level data access permission enabled, and be granted access to all data with a level-protected status.",
    roleDetails: {
      General: {
        core: [{ value: "highLevel", label: "High-level data access" }],
        candidates: [{ value: "viewCandidate", label: "View Candidates" }],
        jobs: [{ value: "viewJobs", label: "View Jobs" }],
      },
      Workflow: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      Features: {
        mailbox: [{ value: "highLevel", label: "High-level data access" }],
        calendar: [{ value: "highLevel", label: "High-level data access" }],
        promote: [{ value: "highLevel", label: "High-level data access" }],
        reports: [{ value: "highLevel", label: "High-level data access" }],
        reportDashboards: [
          { value: "highLevel", label: "High-level data access" },
        ],
      },
      Company: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      AddOns: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
    },
    roleSettings: {
      General: {
        Candidates: {
          "View Candidate": true,
          "Manage Candidate": true,
          "Delete Candidate": true,
          "Add Candidates": true,
          "Source Profile": true,
          "Add Profile to ATS": true,
          "Share Candidate": true,
        },
        Jobs: {
          "Create Jobs": true,
          "View Jobs": true,
          "View All existing jobs data": true,
          "Manage Jobs": true,
          "Manage Automated Actions": true,
          "Manage Team": true,
          "Publish Jobs": true,
        },
        Clients: {
          "Create Clients": true,
          "View Clients": true,
          "View all existing clients data": true,
          "Manage Clients": true,
          "Publish Clients": true,
        },
      },
      Workflow: {
        core: {
          "Manage Template": true,
          "Manage Disqualify Reason": true,
          "Manage Screening Questions": true,
          "Upload Resume": true,
        },
      },
      Features: {
        Mailbox: {
          "View Mailbox": true,
          "Send Emails": true,
          "Manage Email Integrations": true,
        },
      },
      Company: {
        core: {
          "Manage Company": true,
          "Manage Subscription & Billing": true,
          "Manage Members & Roles": true,
        },
      },
    },
  },
  {
    role: "Hiring Manager",
    roleValue: "hiringManager",
    isEditable: true,
    savedDays: "3 days ago",
    description:
      "Administrators have access to all candidates, jobs, and settings, and can fully manage the company's account and members. Only users with this role can delete other administrators, have high-level data access permission enabled, and be granted access to all data with a level-protected status.",
    roleDetails: {
      General: {
        core: [{ value: "highLevel", label: "High-level data access" }],
        candidates: [{ value: "viewCandidate", label: "View Candidates" }],
        jobs: [{ value: "viewJobs", label: "View Jobs" }],
      },
      Workflow: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      Features: {
        mailbox: [{ value: "highLevel", label: "High-level data access" }],
        calendar: [{ value: "highLevel", label: "High-level data access" }],
        promote: [{ value: "highLevel", label: "High-level data access" }],
        reports: [{ value: "highLevel", label: "High-level data access" }],
        reportDashboards: [
          { value: "highLevel", label: "High-level data access" },
        ],
      },
      Company: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      AddOns: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
    },
    roleSettings: {
      General: {
        Candidates: {
          "View Candidate": true,
          "Manage Candidate": true,
          "Delete Candidate": true,
          "Add Candidates": true,
          "Source Profile": true,
          "Add Profile to ATS": true,
          "Share Candidate": true,
        },
        Jobs: {
          "Create Jobs": true,
          "View Jobs": true,
          "View All existing jobs data": true,
          "Manage Jobs": true,
          "Manage Automated Actions": true,
          "Manage Team": true,
          "Publish Jobs": true,
        },
        Clients: {
          "Create Clients": true,
          "View Clients": true,
          "View all existing clients data": true,
          "Manage Clients": true,
          "Publish Clients": true,
        },
      },
      Workflow: {
        core: {
          "Manage Template": true,
          "Manage Disqualify Reason": true,
          "Manage Screening Questions": true,
          "Upload Resume": true,
        },
      },
      Features: {
        Mailbox: {
          "View Mailbox": true,
          "Send Emails": true,
          "Manage Email Integrations": true,
        },
      },
      Company: {
        core: {
          "Manage Company": true,
          "Manage Subscription & Billing": true,
          "Manage Members & Roles": true,
        },
      },
    },
  },
  {
    role: "Reviewer",
    roleValue: "reviewer",
    isEditable: true,
    savedDays: "3 days ago",
    description:
      "Administrators have access to all candidates, jobs, and settings, and can fully manage the company's account and members. Only users with this role can delete other administrators, have high-level data access permission enabled, and be granted access to all data with a level-protected status.",
    roleDetails: {
      General: {
        core: [{ value: "highLevel", label: "High-level data access" }],
        candidates: [{ value: "viewCandidate", label: "View Candidates" }],
        jobs: [{ value: "viewJobs", label: "View Jobs" }],
      },
      Workflow: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      Features: {
        mailbox: [{ value: "highLevel", label: "High-level data access" }],
        calendar: [{ value: "highLevel", label: "High-level data access" }],
        promote: [{ value: "highLevel", label: "High-level data access" }],
        reports: [{ value: "highLevel", label: "High-level data access" }],
        reportDashboards: [
          { value: "highLevel", label: "High-level data access" },
        ],
      },
      Company: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      AddOns: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
    },
    roleSettings: {
      General: {
        Candidates: {
          "View Candidate": true,
          "Manage Candidate": true,
          "Delete Candidate": true,
          "Add Candidates": true,
          "Source Profile": true,
          "Add Profile to ATS": true,
          "Share Candidate": true,
        },
        Jobs: {
          "Create Jobs": true,
          "View Jobs": true,
          "View All existing jobs data": true,
          "Manage Jobs": true,
          "Manage Automated Actions": true,
          "Manage Team": true,
          "Publish Jobs": true,
        },
        Clients: {
          "Create Clients": true,
          "View Clients": true,
          "View all existing clients data": true,
          "Manage Clients": true,
          "Publish Clients": true,
        },
      },
      Workflow: {
        core: {
          "Manage Template": true,
          "Manage Disqualify Reason": true,
          "Manage Screening Questions": true,
          "Upload Resume": true,
        },
      },
      Features: {
        Mailbox: {
          "View Mailbox": true,
          "Send Emails": true,
          "Manage Email Integrations": true,
        },
      },
      Company: {
        core: {
          "Manage Company": true,
          "Manage Subscription & Billing": true,
          "Manage Members & Roles": true,
        },
      },
    },
  },
  {
    role: "Accounting",
    roleValue: "accounting",
    isEditable: true,
    savedDays: "3 days ago",
    description:
      "Administrators have access to all candidates, jobs, and settings, and can fully manage the company's account and members. Only users with this role can delete other administrators, have high-level data access permission enabled, and be granted access to all data with a level-protected status.",
    roleDetails: {
      General: {
        core: [{ value: "highLevel", label: "High-level data access" }],
        candidates: [{ value: "viewCandidate", label: "View Candidates" }],
        jobs: [{ value: "viewJobs", label: "View Jobs" }],
      },
      Workflow: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      Features: {
        mailbox: [{ value: "highLevel", label: "High-level data access" }],
        calendar: [{ value: "highLevel", label: "High-level data access" }],
        promote: [{ value: "highLevel", label: "High-level data access" }],
        reports: [{ value: "highLevel", label: "High-level data access" }],
        reportDashboards: [
          { value: "highLevel", label: "High-level data access" },
        ],
      },
      Company: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      AddOns: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
    },
    roleSettings: {
      General: {
        Candidates: {
          "View Candidate": true,
          "Manage Candidate": true,
          "Delete Candidate": true,
          "Add Candidates": true,
          "Source Profile": true,
          "Add Profile to ATS": true,
          "Share Candidate": true,
        },
        Jobs: {
          "Create Jobs": true,
          "View Jobs": true,
          "View All existing jobs data": true,
          "Manage Jobs": true,
          "Manage Automated Actions": true,
          "Manage Team": true,
          "Publish Jobs": true,
        },
        Clients: {
          "Create Clients": true,
          "View Clients": true,
          "View all existing clients data": true,
          "Manage Clients": true,
          "Publish Clients": true,
        },
      },
      Workflow: {
        core: {
          "Manage Template": true,
          "Manage Disqualify Reason": true,
          "Manage Screening Questions": true,
          "Upload Resume": true,
        },
      },
      Features: {
        Mailbox: {
          "View Mailbox": true,
          "Send Emails": true,
          "Manage Email Integrations": true,
        },
      },
      Company: {
        core: {
          "Manage Company": true,
          "Manage Subscription & Billing": true,
          "Manage Members & Roles": true,
        },
      },
    },
  },
  {
    role: "Marketing/Design",
    roleValue: "marketingDesign",
    isEditable: true,
    savedDays: "3 days ago",
    description:
      "Administrators have access to all candidates, jobs, and settings, and can fully manage the company's account and members. Only users with this role can delete other administrators, have high-level data access permission enabled, and be granted access to all data with a level-protected status.",
    roleDetails: {
      General: {
        core: [{ value: "highLevel", label: "High-level data access" }],
        candidates: [{ value: "viewCandidate", label: "View Candidates" }],
        jobs: [{ value: "viewJobs", label: "View Jobs" }],
      },
      Workflow: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      Features: {
        mailbox: [{ value: "highLevel", label: "High-level data access" }],
        calendar: [{ value: "highLevel", label: "High-level data access" }],
        promote: [{ value: "highLevel", label: "High-level data access" }],
        reports: [{ value: "highLevel", label: "High-level data access" }],
        reportDashboards: [
          { value: "highLevel", label: "High-level data access" },
        ],
      },
      Company: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      AddOns: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
    },
    roleSettings: {
      General: {
        Candidates: {
          "View Candidate": true,
          "Manage Candidate": true,
          "Delete Candidate": true,
          "Add Candidates": true,
          "Source Profile": true,
          "Add Profile to ATS": true,
          "Share Candidate": true,
        },
        Jobs: {
          "Create Jobs": true,
          "View Jobs": true,
          "View All existing jobs data": true,
          "Manage Jobs": true,
          "Manage Automated Actions": true,
          "Manage Team": true,
          "Publish Jobs": true,
        },
        Clients: {
          "Create Clients": true,
          "View Clients": true,
          "View all existing clients data": true,
          "Manage Clients": true,
          "Publish Clients": true,
        },
      },
      Workflow: {
        core: {
          "Manage Template": true,
          "Manage Disqualify Reason": true,
          "Manage Screening Questions": true,
          "Upload Resume": true,
        },
      },
      Features: {
        Mailbox: {
          "View Mailbox": true,
          "Send Emails": true,
          "Manage Email Integrations": true,
        },
      },
      Company: {
        core: {
          "Manage Company": true,
          "Manage Subscription & Billing": true,
          "Manage Members & Roles": true,
        },
      },
    },
  },
  {
    role: "Test",
    roleValue: "test",
    isEditable: true,
    savedDays: "3 days ago",
    description:
      "Administrators have access to all candidates, jobs, and settings, and can fully manage the company's account and members. Only users with this role can delete other administrators, have high-level data access permission enabled, and be granted access to all data with a level-protected status.",
    roleDetails: {
      General: {
        core: [{ value: "highLevel", label: "High-level data access" }],
        candidates: [{ value: "viewCandidate", label: "View Candidates" }],
        jobs: [{ value: "viewJobs", label: "View Jobs" }],
      },
      Workflow: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      Features: {
        mailbox: [{ value: "highLevel", label: "High-level data access" }],
        calendar: [{ value: "highLevel", label: "High-level data access" }],
        promote: [{ value: "highLevel", label: "High-level data access" }],
        reports: [{ value: "highLevel", label: "High-level data access" }],
        reportDashboards: [
          { value: "highLevel", label: "High-level data access" },
        ],
      },
      Company: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
      AddOns: {
        core: [{ value: "highLevel", label: "High-level data access" }],
      },
    },
    roleSettings: {
      General: {
        Candidates: {
          "View Candidate": true,
          "Manage Candidate": true,
          "Delete Candidate": true,
          "Add Candidates": true,
          "Source Profile": true,
          "Add Profile to ATS": true,
          "Share Candidate": true,
        },
        Jobs: {
          "Create Jobs": true,
          "View Jobs": true,
          "View All existing jobs data": true,
          "Manage Jobs": true,
          "Manage Automated Actions": true,
          "Manage Team": true,
          "Publish Jobs": true,
        },
        Clients: {
          "Create Clients": true,
          "View Clients": true,
          "View all existing clients data": true,
          "Manage Clients": true,
          "Publish Clients": true,
        },
      },
      Workflow: {
        core: {
          "Manage Template": true,
          "Manage Disqualify Reason": true,
          "Manage Screening Questions": true,
          "Upload Resume": true,
        },
      },
      Features: {
        Mailbox: {
          "View Mailbox": true,
          "Send Emails": true,
          "Manage Email Integrations": true,
        },
      },
      Company: {
        core: {
          "Manage Company": true,
          "Manage Subscription & Billing": true,
          "Manage Members & Roles": true,
        },
      },
    },
  },
];

const roleOptions = {
  General: {
    Candidates: [
      "View Candidate",
      "Manage Candidate",
      "Delete Candidate",
      "Add Candidates",
      "Source Profile",
      "Add Profile to ATS",
      "Share Candidate",
    ],
    Jobs: [
      "Create Jobs",
      "View Jobs",
      "View All existing jobs data",
      "Manage Jobs",
      "Manage Automated Actions",
      "Manage Team",
      "Publish Jobs",
    ],
    Clients: [
      "Create Clients",
      "View Clients",
      "View all existing clients data",
      "Manage Clients",
      "Publish Clients",
    ],
  },
  Workflow: {
    core: [
      "Manage Template",
      "Manage Disqualify Reason",
      "Manage Screening Questions",
      "Upload Resume",
    ],
  },
  Features: {
    Mailbox: ["View Mailbox", "Send Emails", "Manage Email Integrations"],
  },
  Company: {
    core: [
      "Manage Company",
      "Manage Subscription & Billing",
      "Manage Members & Roles",
    ],
  },
};

const disqualifyReasons = [
  "Lack of Knowledge",
  "Not a fit",
  "Hired Elsewhere",
  "Overpriced",
  "Spam",
  "Lacks interpersonal skills",
  "Wrong skill set",
];

const userProfile = {
  userName: "A V",
  profilePic: Profile,
  phoneNumber: "202-555-0177",
  role: "Administrator",
  email: [
    {
      isActive: true,
      mail: "a@doendorse.quiklyy.com",
      label: "Quiklyy Mail",
      mailIcon: QuiklyyMail,
    },
    {
      isActive: false,
      mail: "",
      label: "Google Gmail",
      mailIcon: Gmail,
    },
    {
      isActive: false,
      mail: "",
      label: "Other Mailbox",
      mailIcon: OtherMail,
    },
  ],
};

const pipelinesOptions = {
  Default: {
    "Fixed Stages": [
      { name: "Sourced", color: "#D2444D" },
      { name: "Applied", color: "#88C81F" },
    ],
    "Custom Stages": [
      { name: "Phone interview", color: "#398AE7" },
      { name: "Onsite Interview", color: "#A35910" },
      { name: "Evaluation", color: "#95E77D" },
      { name: "Offer", color: "#DB780A" },
      { name: "Hired", color: "#A8A63D" },
    ],
  },
};

export {
  userProfile,
  disqualifyReasons,
  roleDetails,
  roleOptions,
  pipelinesOptions,
};
