import Profile from "../../../static/assets/other/profile.jpg";
import ResumePDF from "../../../static/assets/PDFs/demoResume.pdf";

const approvalList = [
  {
    name: "Anurag",
    profilePic: Profile,
    isDeclined: false,
    isApproved: false,
    designation: "CEO",
    clientCompany: "Quiklyy",
    currentCTC: "12000",
    expectedCTC: "15000",
    noticePeriod: "3 months",
    resume: ResumePDF,
  },
  {
    name: "John Doe",
    profilePic: Profile,
    designation: "CTO",
    isDeclined: false,
    isApproved: false,
    clientCompany: "Quiklyy",
    currentCTC: "12000",
    expectedCTC: "15000",
    noticePeriod: "3 months",
    resume: ResumePDF,
  },
];

export { approvalList };
