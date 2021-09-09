import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/core";
import { teamColumns, teamData } from "Data/Recruiter/CreateClients";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import ReactSelect from "react-select";
import SettingsCard from "../SettingsCard";
import AddTeamMember from "Pages/Recruiter/AddTeamMember";

const rolesFilter = [
  { value: "all", label: "All Roles" },
  { value: "admin", label: "Administrator" },
  { value: "corporateRecruit", label: "Corporate Recruiter" },
  { value: "hiringManager", label: "Hiring Manager" },
];

const ShowTeam = () => {
  const data = useMemo(() => teamData, []);
  const columns = useMemo(() => teamColumns, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ data, columns });

  return (
    <Box py="5">
      <table
        {...getTableProps()}
        style={{
          border: "solid 1px blue",
          minWidth: "100%",
          borderRadius: "1em",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px #41bb93",
                    background: "#41bb93",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "#ffffff",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};

function TeamMembersWrapper() {
  return (
    <SettingsCard>
      <Flex justify="space-between" align="center">
        <Box>
          <Text my="3" fontSize="lg" fontWeight="600">
            Team Members
          </Text>
          <Text color="grey">
            Active and invited members of the recruitment team of the current
            company account.{" "}
            <Link href="www.google.com" color="lightgreen !important">
              Learn more
            </Link>
          </Text>
        </Box>
        <AddTeamMember />
      </Flex>
      <Text my="3" fontSize="md" fontWeight="600">
        All Team Members
      </Text>
      <Flex justify="space-between" align="center">
        <InputGroup>
          <InputLeftElement children={<Icon name="search" />} />
          <Input variant="flushed" placeholder="Search" />
        </InputGroup>
        <Flex align="center">
          <Text>{`1 - ${teamData.length} of ${teamData.length} members`}</Text>
          <Box ml="3" minWidth="110px">
            <ReactSelect options={rolesFilter} />
          </Box>
          <Button ml="2" variantColor="teal" size="sm" leftIcon="edit">
            Team
          </Button>
        </Flex>
      </Flex>
      <ShowTeam />
    </SettingsCard>
  );
}

export default TeamMembersWrapper;
