import Phone from "../../../static/assets/icons/Recruiter/phone.png";
import Attach from "../../../static/assets/icons/Recruiter/attach.png";
import Downloads from "../../../static/assets/icons/Recruiter/downloads.png";
import Mail from "../../../static/assets/icons/Recruiter/mail.png";
import Premium from "../../../static/assets/icons/Recruiter/premium.png";
import Views from "../../../static/assets/icons/Recruiter/views.png";
import ChatBubble from "../../../static/assets/icons/Recruiter/chatBubble.png";
import Experience from "../../../static/assets/icons/Job/Experience.png";
import Location from "../../../static/assets/icons/Job/Location.png";
import Salary from "../../../static/assets/icons/Job/Salary.png";
import Required from "../../../static/assets/icons/Recruiter/required.png";
import Optional from "../../../static/assets/icons/Recruiter/Optional.png";
import Hidden from "../../../static/assets/icons/Recruiter/hide.png";

const OptionIcons = [
  {
    name: "Required",
    value: "req",
    icon: Required,
  },
  {
    name: "Optional",
    value: "opt",
    icon: Optional,
  },
  {
    name: "Hidden",
    value: "hide",
    icon: Hidden,
  },
];

const iconsList = {
  phone: Phone,
  attach: Attach,
  mail: Mail,
  downloads: Downloads,
  premium: Premium,
  views: Views,
  chatBubble: ChatBubble,
  expIcon: Experience,
  salaryIcon: Salary,
  locationIcon: Location,
};

export { iconsList, OptionIcons };
