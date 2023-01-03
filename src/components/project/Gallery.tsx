import { styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const GallerySection = styled('div')`
  padding-top: 180px;
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

type GalleryItem = {
  src: string;
  alt: string;
};

interface GalleryProps {
  data: GalleryItem[];
}

export default function Gallery({ data }: GalleryProps) {
  return (
    <GallerySection>
      <GalleryContainer>
        <GalleryGrid>
          {data.map((item) => (
            <ImageContainer key={item.alt}>
              <GalleryImage
                src={item.src}
                alt={item.alt}
                width={379}
                height={498}
              />
            </ImageContainer>
          ))}
        </GalleryGrid>
      </GalleryContainer>
    </GallerySection>
  );
}
