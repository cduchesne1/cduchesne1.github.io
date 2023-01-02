import {
  Link, List, styled, Tab, Tabs, Typography, useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabContainer = styled('div')`
  margin-left: 16px;
`;

function TabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <TabContainer
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </TabContainer>
  );
}

const WorkSection = styled('div')`
  padding-top: 96px;
`;

const WorkTitle = styled(Typography)`
  margin-bottom: 24px;
`;

const WorkContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 474px) {
    padding: 0 32px;
  } ;
`;

const TabsContainer = styled('div')`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const TabContentTitleSection = styled('div')`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const JobTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const JobLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: '8px',
  '@media (max-width: 768px)': {
    marginLeft: 0,
  },
}));

const JobContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '@media (max-width: 474px)': {
    fontSize: '16px',
    lineHeight: '24px',
  },
}));

export default function Work() {
  const [value, setValue] = useState(0);
  const isTablet = useMediaQuery('(max-width: 768px)');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <WorkSection>
      <WorkContainer>
        <WorkTitle variant="h1">Where I&apos;ve Worked</WorkTitle>
        <TabsContainer>
          <Tabs orientation={isTablet ? 'horizontal' : 'vertical'} value={value} onChange={handleChange}>
            <Tab label="Nexapp" />
            <Tab label="Freelance" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <TabContentTitleSection>
              <JobTitle variant="body1">Fullstack Intern</JobTitle>
              <JobLink
                href="https://www.nexapp.ca"
                variant="body1"
                underline="none"
                target="_blank"
                rel="noreferrer"
              >
                @ Nexapp
              </JobLink>
            </TabContentTitleSection>
            <JobContent variant="body2">
              May 2021 - August 2021 & May 2022 - August 2022
            </JobContent>
            <List>
              <JobContent variant="body2">
                ▶ Developed quality, durable & scalable software solutions for
                various clients.
              </JobContent>
              <JobContent variant="body2">
                ▶ Worked with modern technologies such as Java, TypeScript, AWS,
                React, Angular & Python.
              </JobContent>
              <JobContent variant="body2">
                ▶ Wrote different kinds of automated tests (unit, integration,
                functional, end to end).
              </JobContent>
            </List>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TabContentTitleSection>
              <JobTitle variant="body1">Freelancer</JobTitle>
              <JobLink
                href="https://www.fiverr.com"
                variant="body1"
                underline="none"
                target="_blank"
                rel="noreferrer"
              >
                @ Fiverr
              </JobLink>
            </TabContentTitleSection>
            <JobContent variant="body2">
              When not working at another company
            </JobContent>
            <List>
              <JobContent variant="body2">
                ▶ Developed mobile applications for both IOS and Android.
              </JobContent>
              <JobContent variant="body2">
                ▶ Worked with modern technologies such as Flutter, NestJS,
                Firebase, Neo4j and GCP.
              </JobContent>
              <JobContent variant="body2">
                ▶ Wrote different kinds of automated tests (unit, integration,
                functional, end to end).
              </JobContent>
            </List>
          </TabPanel>
        </TabsContainer>
      </WorkContainer>
    </WorkSection>
  );
}
