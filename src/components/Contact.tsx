import {
  Modal, styled, Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

const ModalContainer = styled(Modal)`
  border-radius: 24px;
  animation: fade 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center ;
  justify-self: center;
  max-width: 589px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 474px) {
    max-width: 400px;
  }
`;

const ModalContent = styled('div')`
  border-radius: 12px;
  background-color: #fcfcfd;
  padding: 60px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginTop: '24px',
  marginBottom: '24px',
  '@media (max-width: 768px)': {
    fontSize: '16px',
    lineHeight: '(24/16)',
  },
}));

const SendMessageButton = styled(Link)(({ theme }) => ({
  padding: '16px 24px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: 'none',
  borderRadius: '9999px',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  outline: 'none',
  textDecoration: 'none',
  maxWidth: '50px',
  '&:hover': {
    backgroundColor: theme.palette.info.main,
  },
  '&:active': {
    transform: 'scale(0.9)',
  },
  '@media (max-width: 768px)': {
    width: '100%',
  },
}));

interface ContactProps {
  close: () => void;
  open: boolean;
}

export default function Contact({ close, open }: ContactProps) {
  return (
    <ModalContainer
      open={open}
      onClose={close}
      aria-labelledby="contact-modal"
      aria-describedby="contact-modal"
    >
      <ModalContent>
        <Typography variant="h2">Get in touch</Typography>
        <ContactMessage variant="body1">My inbox is always open. Whether you have question, a project idea or just want to chat, I&apos;ll try to get back to you as soon as possible!</ContactMessage>
        <SendMessageButton href="mailto:cduchesne.1@gmail.com">
          <Typography variant="button">Say Hi</Typography>
        </SendMessageButton>
      </ModalContent>
    </ModalContainer>
  );
}
