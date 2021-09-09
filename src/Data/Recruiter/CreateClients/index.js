const teamData = [
  {
    id: 1,
    name: "Anurag",
    email: "av@mail.com",
    contact: "9900990099",
    role: "CEO",
  },
  {
    id: 2,
    name: "John Doe",
    email: "jd@mail.com",
    contact: "9900990099",
    role: "CTO",
  },
  {
    id: 3,
    name: "Simon",
    email: "simon@mail.com",
    contact: "9900990099",
    role: "Manager",
  },
  {
    id: 4,
    name: "Steve",
    email: "steve@mail.com",
    contact: "9900990099",
    role: "Accountant",
  },
];

const teamColumns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Contact",
    accessor: "contact",
  },
  {
    Header: "Role",
    accessor: "role",
  },
];

export { teamData, teamColumns };
