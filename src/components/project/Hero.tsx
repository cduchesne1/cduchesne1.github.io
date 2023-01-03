import {
  IconButton, Link, styled, Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoModal from '../VideoModal';

const HeroSection = styled('div')`
  padding-top: 96px;
  @media (max-width: 768px) {
    padding-bottom: 0;
  } ;
`;

const HeroContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  padding: 0 80px;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 40px;
    padding: 0 40px;
  }
  @media (max-width: 474px) {
    padding: 0 40px;
  } ;
`;

const ImageContainer = styled('div')`
  width: 100%;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 420px;
  }
`;

const ProjectThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const PlayButton = styled(IconButton)`
  position: absolute;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    83.59deg,
    #fcfcfd 36.52%,
    rgba(252, 252, 253, 0.83) 98.8%
  );
  box-shadow: 0px 40px 64px -32px rgba(15, 15, 15, 0.1);
  backdrop-filter: blur(32px);
  border-radius: 50%;
  :hover svg {
    fill: #23262F;
  }
`;

const ProjectTitle = styled(Typography)`
  margin-bottom: 24px;
`;

const SocialLink = styled(Link)`
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-4px);
  }
`;

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginBottom: '24px',
  '@media (max-width: 768px)': {
    fontSize: '16px',
    lineHeight: '(24/16)',
  },
}));

const DateContainer = styled('div')`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ProjectDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const ModalSection = styled('section')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(244, 244, 244, 0.8);
  z-index: 100;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const ModalContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
`;

type Thumbnail = {
  src: string;
  alt: string;
};

interface HeroProps {
  thumbnail: Thumbnail;
  title: string;
  description: string;
  date: string;
  hasRepo: boolean;
  repoLink: string;
}

export default function Hero({
  thumbnail, title, description, date, hasRepo, repoLink = '',
}: HeroProps) {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <HeroSection>
      <HeroContainer>
        <ImageContainer>
          <ProjectThumbnail
            src={thumbnail.src}
            alt={thumbnail.alt}
            width={525}
            height={600}
          />
          <PlayButton onClick={openModal}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99228 18.2901L9.36438 18.9413L8.99228 18.2901ZM16.9611 13.7365L16.589 13.0853L16.9611 13.7365ZM16.9611 10.2635L17.3333 9.61233L16.9611 10.2635ZM8.99228 5.70987L8.62017 6.36105L8.62017 6.36106L8.99228 5.70987ZM9.36438 18.9413L17.3333 14.3877L16.589 13.0853L8.62017 17.6389L9.36438 18.9413ZM17.3333 9.61233L9.36438 5.05869L8.62017 6.36106L16.589 10.9147L17.3333 9.61233ZM17.3333 14.3877C19.1807 13.332 19.1807 10.668 17.3333 9.61233L16.589 10.9147C17.4288 11.3946 17.4288 12.6054 16.589 13.0853L17.3333 14.3877ZM8.62017 17.6389C7.78685 18.1151 6.75 17.5134 6.75 16.5536H5.25C5.25 18.6652 7.53108 19.9889 9.36438 18.9413L8.62017 17.6389ZM9.36438 5.05869C7.53108 4.01109 5.25 5.33485 5.25 7.44636H6.75C6.75 6.48658 7.78685 5.88487 8.62017 6.36105L9.36438 5.05869ZM5.25 7.44636V16.5536H6.75V7.44636H5.25Z"
                fill="#777E91"
              />
            </svg>
          </PlayButton>
        </ImageContainer>
        <div>
          <ProjectTitle variant="h1">{title}</ProjectTitle>
          <ProjectDescription variant="body1">{description}</ProjectDescription>
          <DateContainer>
            <ProjectDate variant="caption">{date}</ProjectDate>
            {hasRepo && (
            <SocialLink
              href={repoLink}
              underline="none"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  fill="#777E91"
                />
              </svg>
            </SocialLink>
            )}
          </DateContainer>
        </div>
        {modal && (
          <ModalSection>
            <ModalContainer>
              <VideoModal embededUrl="https://www.youtube.com/embed/KCONWLnm7FQ" close={closeModal} open={modal} />
            </ModalContainer>
          </ModalSection>
        )}
      </HeroContainer>
    </HeroSection>
  );
}
