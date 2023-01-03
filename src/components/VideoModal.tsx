import { Modal, styled } from '@mui/material';
import React from 'react';

const ModalContainer = styled(Modal)`
  border-radius: 24px;
  animation: fade 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 474px) {
    max-width: 400px;
  }
`;

const VideoFrame = styled('iframe')`
  width: 920px;
  height: 520px;
  margin-top: 20px;
  border: none;
  z-index: 99;
  @media (max-width: 768px) {
    width: 528px;
  }
  @media (max-width: 474px) {
    width: 100%;
    height: 380px;
  }
`;

interface VideoModalProps {
  close: () => void;
  open: boolean;
  embededUrl: string;
}

export default function VideoModal({
  close,
  open,
  embededUrl,
}: VideoModalProps) {
  return (
    <ModalContainer
      open={open}
      onClose={close}
      aria-labelledby="video-modal"
      aria-describedby="video-modal"
    >
      <div>
        <VideoFrame
          loading="lazy"
          src={embededUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </ModalContainer>
  );
}
