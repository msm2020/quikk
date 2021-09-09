import React from "react";
import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Grid,
  Link,
} from "@chakra-ui/core";

const JobsByCategoryData = [
  {
    label: "Industry",
    content: "Jobs by industry",
    list: [
      {
        title: "Business Analyst Jobs",
        internalLink: "/search/business-analyst-jobs",
      },
      {
        title: "Java Developer Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Assistant Professor Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Company Secretary Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Police Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Network Engineer Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Software Engineer Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Project Manager Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Sofware Developer Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Computer Operator Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Receptionist Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Data Entry Operator Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Pharmacist Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Hr Executive Jobs",
        internalLink: "/search/java-developer-jobs",
      },
      {
        title: "Data Analyst Jobs",
        internalLink: "/search/java-developer-jobs",
      },
    ],
  },
  { label: "Company", content: "Jobs by Company" },
  { label: "Location", content: "Jobs by location" },
  { label: "Designation", content: "Jobs by designation" },
  { label: "Skills", content: "Jobs by skills" },
];

export default function JobsByCategory() {
  function DataTabs({ data }) {
    return (
      <Tabs
      width="100%"
      id="browse%20jobs"
      
      variantColor="green"
      marginY="1rem"
      >
        <TabList  
        justifyContent="center"
        display={{
          xs: "block",
          sm: "block",
          md: "flex",
        }} borderRadius="0px" borderBottom="2px solid #d3d3d3" paddingBottom="0px" padding="12px" justifyContent="center" marginBottom="2rem">
          {data.map((tab, index) => (
            <Tab fontWeight="500" marginRight="2rem" style={{boxShadow:"none" }} key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels marginTop="1rem">
          {data.map((tab, index) => (
            <TabPanel key={index}>
              {/* {tab.content} */}
              <JobsLising jobs={tab?.list &&tab?.list} content={tab?.content&&tab?.content} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }

  function JobsLising({ jobs,content}) {
    return (
      <>
       
      <Grid
        templateColumns={{md:"repeat(3, 1fr)",
        sm:"repeat(3, 1fr)",
        xs:"repeat(2, 1fr)",}}
        templateRows="repeat(4, 1fr)"
        columnGap="2rem"
        textAlign="left"
      >
     
        {jobs?.map((job) => (
          <Flex flexDirection="column" flexWrap="wrap">
            <Link href={job?.internalLink} color="teal.500">
              <h3 style={{ margin: "0.2rem auto" }}>{job?.title}</h3>
            </Link>
          </Flex>
        ))}
      </Grid>
      </>
    );
  }

  return (
    <Box>
      <Flex
        data-about="browse-jobs"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginX="auto"
        marginY="1rem"
        paddingX="1rem"
        maxWidth="1200px"
      >
        <Text fontSize="3xl" >
          Browse jobs
        </Text>
        <DataTabs data={JobsByCategoryData} />
      </Flex>
    </Box>
  );
}
