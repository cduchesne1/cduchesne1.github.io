import React from 'react';
import { styled, Typography } from '@mui/material';

const FooterSection = styled('footer')(({ theme }) => ({
  padding: '32px',
  borderTop: `1px solid ${theme.palette.secondary.light}`,
}));

const FooterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 474px) {
    padding: 0 32px;
  } ;
`;

const Copyright = styled(Typography)`
  @media (max-width: 474px) {
    font-size: 12px;
  } ;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterSection>
      <FooterContainer>
        <Copyright variant="caption">{`Copyright © ${currentYear} Christophe Duchesne`}</Copyright>
      </FooterContainer>
    </FooterSection>
  );
}
