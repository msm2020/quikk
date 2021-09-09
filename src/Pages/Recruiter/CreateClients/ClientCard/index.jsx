import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/core";
import React, { useState } from "react";
import EditorContainer from "../../../../Components/Editor";
// import { teamColumns, teamData } from "../../../../Data/Recruiter/CreateClients";
import DetailCard from "../../Jobs/CreateJobs/DetailCard";
// import { useTable } from "react-table";

// const ShowTeam = () => {
//   const data = useMemo(() => teamData,
//     []
//   );
//   const columns = useMemo(
//     () => teamColumns,
//     []
//   );

// //   console.log(teamData, teamColumns);
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ data, columns });

//   return (
//     <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th
//                 {...column.getHeaderProps()}
//                 style={{
//                   borderBottom: "solid 3px #41bb93",
//                   background: "#41bb93",
//                   color: "white",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {column.render("Header")}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return (
//                   <td
//                     {...cell.getCellProps()}
//                     style={{
//                       padding: "10px",
//                       border: "solid 1px gray",
//                       background: "#ffffff",
//                     }}
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };
const MemberDetails = () => (
  <Box p="3">
    <FormControl my="2">
      <FormLabel>Name</FormLabel>
      <Input placeholder="Enter name" />
    </FormControl>
    <FormControl my="2">
      <FormLabel>Email ID</FormLabel>
      <Input placeholder="Enter E-mail" />
    </FormControl>
    <FormControl my="2">
      <FormLabel>Contact</FormLabel>
      <Input placeholder="Enter Contact" />
    </FormControl>
    <FormControl my="2">
      <FormLabel>Role / Designation</FormLabel>
      <Input placeholder="Enter Role" />
    </FormControl>
  </Box>
);

// const EditTeam = ({data}) => (
//   <Box>

//   </Box>
// );

function ClientsCard() {
  const [Members, setMembers] = useState([MemberDetails]);
  const addMembers = () => {
    if (Members.length === 5) {
      setMembers([]);
    } else {
      setMembers([...Members, MemberDetails]);
    }
  };
  const removeMembers = (index) => {
    setMembers(Members.splice(index, 0, 1));
  };
  return (
    <Box py="5" backgroundColor="#f0f4f7">
      <Text px="5" fontWeight="600" fontSize="xl">
        Create Clients
      </Text>
      <DetailCard>
        <Grid templateColumns="repeat(2,1fr)" gap="1em">
          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input placeholder="Type Company Name" />
          </FormControl>
          <FormControl>
            <FormLabel>LinkedIn Profile</FormLabel>
            <Input placeholder="Enter LinkedIn profile URL" />
          </FormControl>
          <FormControl isRequired gridColumn="span 2">
            <FormLabel>About Company</FormLabel>
            <EditorContainer />
          </FormControl>
          <FormControl isRequired gridColumn="span 2">
            <FormLabel>Team</FormLabel>
            <Grid gap="1em" templateColumns="repeat(2,1fr)">
              {Members.map((MemComp, i) => (
                <MemComp key={`123${i + 1}`} />
              ))}
            </Grid>
            <SimpleGrid minChildWidth="120px" spacing="1em">
              <Button my="3" onClick={addMembers} leftIcon="add">
                Add Members
              </Button>
              {Members.length > 1 ? (
                <Box>
                  <Button my="3" onClick={removeMembers} leftIcon="minus">
                    Remove Members
                  </Button>
                </Box>
              ) : (
                ""
              )}
            </SimpleGrid>

            {/* <ShowTeam /> */}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Textarea placeholder="Enter Address" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Team Size</FormLabel>
            <Input type="number" placeholder="Enter Team Size" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Working Days</FormLabel>
            <Select placeholder="Enter Working Days">
              <option value="three">Three Days</option>
              <option value="five">Five Days</option>
              <option value="six">Six Days</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Industry</FormLabel>
            <Select placeholder="Select Industry">
              <option value="it">IT</option>
              <option value="comps">Computer Engineering</option>
              <option value="it">Business</option>
            </Select>
          </FormControl>
        </Grid>
        <Stack maxWidth="50%" margin="0 auto" my="5">
          <Button
            backgroundColor="#41bb93"
            _hover={{ backgroundColor: "#41bb93" }}
          >
            Save & Next
          </Button>
        </Stack>
      </DetailCard>
    </Box>
  );
}

export default ClientsCard;
