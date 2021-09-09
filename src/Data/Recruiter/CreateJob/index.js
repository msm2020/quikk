import ApplicationForm from "../../../static/assets/icons/Recruiter/Application Form.png";
import JobPosting from "../../../static/assets/icons/Recruiter/Job Posting.png";
import Group from "../../../static/assets/icons/Recruiter/group.png";
import Workflow from "../../../static/assets/icons/Recruiter/Workflow.png";

const indexRoutePair = {
  0: "dashboard",
  1: "approvals",
  2: "jobs",
  3: "mail",
  4: "search",
  5: "settings",
  6: "interviews",
};

const tabDetails = [
  {
    name: "Job Posting",
    icon: JobPosting,
  },
  {
    name: "Application Form",
    icon: ApplicationForm,
  },
  {
    name: "Workflow",
    icon: Workflow,
  },
  {
    name: "Team",
    icon: Group,
  },
];

export { tabDetails, indexRoutePair };
