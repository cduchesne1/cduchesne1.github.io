import { styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GallerySection = styled('div')`
  padding-top: 180px;
`;

const GalleryTitle = styled(Typography)`
  margin-bottom: 24px;
`;

const GalleryContainer = styled('div')`
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

const GalleryGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 32px;
  margin-top: 48px;
  padding-bottom: 48px;
  position: relative;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 474px) {
    grid-template-columns: repeat(1, auto);
  } ;
`;

const GalleryCard = styled('div')`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled('div')`
  height: 450px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 380px;
  }
`;

const GalleryImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.1);
  }
`;

const ImageDesc = styled('div')`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageTitle = styled(Typography)`
  font-weight: 600;
`;

const ImageDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

interface GalleryProps {
  projects: any[];
}

export default function Gallery({ projects }: GalleryProps) {
  return (
    <GallerySection>
      <GalleryContainer>
        <GalleryTitle variant="h1">What I&apos;ve Built</GalleryTitle>
        <GalleryGrid>
          {projects.map((item) => (
            <GalleryCard key={item.title}>
              <Link
                href={`/projects/${item.path}`}
              >
                <ImageContainer>
                  <GalleryImage
                    src={item.thumbnail?.src}
                    alt={item.thumbnail?.alt}
                    width={379}
                    height={498}
                  />
                </ImageContainer>
              </Link>
              <ImageDesc>
                <ImageTitle variant="body2">{item.title}</ImageTitle>
                <ImageDate variant="caption">{item.date}</ImageDate>
              </ImageDesc>
            </GalleryCard>
          ))}
        </GalleryGrid>
      </GalleryContainer>
    </GallerySection>
  );
}
