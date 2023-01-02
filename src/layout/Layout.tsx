import { Stack, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Stack>
      <Header />
      {children}
      <Typography variant="h2">Footer</Typography>
    </Stack>
  );
}
