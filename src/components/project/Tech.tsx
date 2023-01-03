import { styled, Typography } from '@mui/material';
import React from 'react';

const TechSection = styled('div')`
  padding-top: 96px;
`;

const TechContainer = styled('div')`
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

const TechTitle = styled(Typography)`
  margin-bottom: 24px;
`;

const TechSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '@media (max-width: 474px)': {
    fontSize: '16px',
    lineHeight: '24px',
  },
}));

const TechList = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly ;
    margin-top: 24px;
`;

const TechItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginRight: '4px',
  marginLeft: '4px',
}));

interface TechProps {
  description: string;
  technologies: string[];
}

export default function Tech({ description, technologies }: TechProps) {
  return (
    <TechSection>
      <TechContainer>
        <TechTitle variant="h1">Technology Stack</TechTitle>
        <TechSubtitle variant="body1">{description}</TechSubtitle>
        <TechList>
          {technologies.map((techno) => (
            <TechItem key={techno} variant="h4">{techno}</TechItem>
          ))}
        </TechList>
      </TechContainer>
    </TechSection>
  );
}
