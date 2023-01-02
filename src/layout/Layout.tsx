import { Stack } from '@mui/material';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Stack>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
}
