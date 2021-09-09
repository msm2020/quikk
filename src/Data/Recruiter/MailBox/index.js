import Inbox from "../../../static/assets/icons/Recruiter/mail/inbox.png";
import Starred from "../../../static/assets/icons/Recruiter/mail/Starred.png";
import Sent from "../../../static/assets/icons/Recruiter/mail/sent.png";
import Outbox from "../../../static/assets/icons/Recruiter/mail/Outbox.png";
import Drafts from "../../../static/assets/icons/Recruiter/mail/draft.png";
import Spam from "../../../static/assets/icons/Recruiter/mail/spam.png";
import Trash from "../../../static/assets/icons/Recruiter/mail/trash.png";
import Profile from "../../../static/assets/other/profile.jpg";

const mailData = [
  {
    id: 1233,
    senderProfile: Profile,
    senderID: "xyz@mail.com",
    receiverID: "abc@mail.com",
    senderName: "XYZ",
    subject: "test subject",
    content:
      "Maecenas rutrum, massa at porta tincidunt, odio augue pretium odio, sit amet facilisis ipsum massa at metus. Praesent in consequat enim, eget auctor dui. Nullam fermentum libero vitae ligula dictum, eget fringilla enim varius. Phasellus ut dui mauris. Fusce quis urna varius, porta nisi vitae, pulvinar leo. Cras nibh tortor, cursus ac lectus eget, tristique efficitur magna. Curabitur at dolor lobortis, luctus elit ac, aliquet felis. Ut magna erat, pellentesque in risus feugiat, fringilla convallis erat. Donec et tincidunt ipsum. Duis feugiat congue nunc, id ornare dolor cursus sed. Curabitur aliquam pretium pretium. Etiam eleifend lacus eros, a commodo nunc blandit quis. Proin lacus lacus, dapibus vel lorem convallis, dapibus euismod libero. Aenean vitae rhoncus eros, sit amet sagittis nunc. Curabitur malesuada pharetra sem, in aliquet tellus malesuada in.",
    sentTime: "3h",
  },
  {
    id: 1234,
    senderProfile: Profile,
    senderName: "ABC",
    senderID: "abc@mail.com",
    receiverID: "xyz@mail.com",
    subject: "test subject",
    content:
      "Maecenas rutrum, massa at porta tincidunt, odio augue pretium odio, sit amet facilisis ipsum massa at metus. Praesent in consequat enim, eget auctor dui. Nullam fermentum libero vitae ligula dictum, eget fringilla enim varius. Phasellus ut dui mauris. Fusce quis urna varius, porta nisi vitae, pulvinar leo. Cras nibh tortor, cursus ac lectus eget, tristique efficitur magna. Curabitur at dolor lobortis, luctus elit ac, aliquet felis. Ut magna erat, pellentesque in risus feugiat, fringilla convallis erat. Donec et tincidunt ipsum. Duis feugiat congue nunc, id ornare dolor cursus sed. Curabitur aliquam pretium pretium. Etiam eleifend lacus eros, a commodo nunc blandit quis. Proin lacus lacus, dapibus vel lorem convallis, dapibus euismod libero. Aenean vitae rhoncus eros, sit amet sagittis nunc. Curabitur malesuada pharetra sem, in aliquet tellus malesuada in.",
    sentTime: "3h",
  },
  {
    id: 1235,
    senderProfile: Profile,
    senderName: "DEF",
    senderID: "def@mail.com",
    receiverID: "xyz@mail.com",
    subject: "test subject",
    content:
      "Maecenas rutrum, massa at porta tincidunt, odio augue pretium odio, sit amet facilisis ipsum massa at metus. Praesent in consequat enim, eget auctor dui. Nullam fermentum libero vitae ligula dictum, eget fringilla enim varius. Phasellus ut dui mauris. Fusce quis urna varius, porta nisi vitae, pulvinar leo. Cras nibh tortor, cursus ac lectus eget, tristique efficitur magna. Curabitur at dolor lobortis, luctus elit ac, aliquet felis. Ut magna erat, pellentesque in risus feugiat, fringilla convallis erat. Donec et tincidunt ipsum. Duis feugiat congue nunc, id ornare dolor cursus sed. Curabitur aliquam pretium pretium. Etiam eleifend lacus eros, a commodo nunc blandit quis. Proin lacus lacus, dapibus vel lorem convallis, dapibus euismod libero. Aenean vitae rhoncus eros, sit amet sagittis nunc. Curabitur malesuada pharetra sem, in aliquet tellus malesuada in.",
    sentTime: "3h",
  },
];

const mailTabIcons = [
  {
    name: "Inbox",
    icon: Inbox,
  },
  {
    name: "Starred",
    icon: Starred,
  },
  {
    name: "Sent",
    icon: Sent,
  },
  {
    name: "Outbox",
    icon: Outbox,
  },
  {
    name: "Drafts",
    icon: Drafts,
  },
  {
    name: "Spam",
    icon: Spam,
  },
  {
    name: "Trash",
    icon: Trash,
  },
];

export { mailTabIcons, mailData };
