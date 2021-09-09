import React, { useState } from "react";
import {
  Box,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Button,
  Stack,
} from "@chakra-ui/core";
import { mailData, mailTabIcons } from "Data/Recruiter/MailBox";
import MailExplorer from "./MailExplorer";
import DisplayMail from "./DisplayMail";

/**
 * Icon component for the Mailbox.
 *
 * @param {{ src: string, alt: string }} Props
 */
const Icon = ({ src, alt = "Mailbox Menu Icon", ...rest }) => (
  <Image role="icon" mr={3} src={src} alt={alt} {...rest} />
);

//////////////////////////////////////////////////////////////////////

/**
 * Menu component of the mail box.
 */
function MailboxMenu({ handleMail, mailData }) {
  const [index, setIndex] = useState(0);

  return (
    <Box backgroundColor="white">
      <Tabs
        index={index}
        onChange={(index) => setIndex(index)}
        my="3"
        isFitted
        orientation="vertical"
        display="grid"
        gridTemplateColumns="0.5fr 1.5fr"
      >
        <Stack>
          <Button m="2" leftIcon="add">
            New Email
          </Button>
          <TabList
            alignSelf="flex-start"
            width="100%"
            minWidth="180px"
            maxWidth="200px"
            overflowY="auto"
            overflowX="hidden"
          >
            {mailTabIcons.map((each) => (
              <Tab
                p="3"
                key={each.name}
                display="grid"
                _selected={{ borderLeft: "2px solid #41bb93" }}
                gridTemplateColumns="0.2fr 1fr"
                textAlign="center"
              >
                <Icon src={each.icon} height="18px" alt={each.name} />
                {each.name}
              </Tab>
            ))}
          </TabList>
        </Stack>
        <TabPanels>
          <TabPanel>
            <MailExplorer
              mailData={mailData}
              index={index}
              handleMail={handleMail}
            />
          </TabPanel>
          <TabPanel>
            <MailExplorer mailData={[]} index={index} handleMail={handleMail} />
          </TabPanel>
          <TabPanel>
            <MailExplorer
              mailData={mailData}
              index={index}
              handleMail={handleMail}
            />
          </TabPanel>
          <TabPanel>
            <MailExplorer
              mailData={mailData}
              index={index}
              handleMail={handleMail}
            />
          </TabPanel>
          <TabPanel>
            <MailExplorer
              mailData={mailData}
              index={index}
              handleMail={handleMail}
            />
          </TabPanel>
          <TabPanel>
            <MailExplorer
              mailData={mailData}
              index={index}
              handleMail={handleMail}
            />
          </TabPanel>
          <TabPanel>
            <MailExplorer
              mailData={mailData}
              index={index}
              handleMail={handleMail}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

//////////////////////////////////////////////////////////////////////

/**
 * The Mailbox component that is visible at `/recruiter/search`.
 *
 * @see {@link https://drive.google.com/file/d/1YgWMqaZrAXJraTYWpY1i4fGRr9tcTH4O/view Mockup}
 */
export default function MailBox() {
  const [selectedMail, setSelectedMail] = useState({});
  const handleSelectedMail = (mailObj) => {
    setSelectedMail(mailObj);
  };
  return (
    /**
     * 0.5fr for the left most pane i.e., Menu.
     * 1fr for the middle pane i.e., Mail explorer.
     * 1fr for the right most pane i.e., Mail reader.
     */
    <Grid
      height="100%"
      backgroundColor="#f0f4f7"
      templateColumns="1fr  1fr"
      gap={1}
    >
      {/* Menu. */}
      <MailboxMenu
        mailData={mailData}
        handleMail={(e) => handleSelectedMail(e)}
      />

      {/* Mail explorer. */}
      {/* <MailExplorer handleMail={(e) => handleSelectedMail(e)}  /> */}

      {/* Mail reader. */}
      <DisplayMail selectedMail={selectedMail} />
    </Grid>
  );
}
