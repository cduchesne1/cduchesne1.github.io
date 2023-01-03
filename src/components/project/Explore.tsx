import { Button, styled, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import React from 'react';
import Link from 'next/link';

const ExploreSection = styled('div')`
  padding-top: 180px;
  padding-bottom: 180px;
`;

const ExploreContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const ExploreNext = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const ExploreButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.info.main,
  },
}));

interface ExploreProps {
  title: string;
  path: string;
}

export default function Explore({ title, path }: ExploreProps) {
  return (
    <ExploreSection>
      <ExploreContainer>
        <ExploreNext variant="overline">Next Project</ExploreNext>
        <ExploreButton
          variant="text"
          component={Link}
          href={`/projects/${path}`}
          endIcon={<EastIcon style={{ width: '44px', height: '44px' }} />}
        >
          <Typography variant="h3">{title}</Typography>
        </ExploreButton>
      </ExploreContainer>
    </ExploreSection>
  );
}
