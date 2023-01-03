import {
  Link, List, styled, Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import avatar from '../../../public/avatar.jpg';

const HeroSection = styled('div')`
  padding-top: 96px;
  @media (max-width: 768px) {
    padding-bottom: 0;
  } ;
`;

const HeroContainer = styled('div')`
  display: grid;
  padding: 0 80px;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  grid-gap: 32px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
    padding: 0 40px;
  }
  @media (max-width: 474px) {
    padding: 0 32px;
  } ;
`;

const Socials = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

const ContentWrapper = styled('div')`
  max-width: 600px;
`;

const SocialLink = styled(Link)`
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-4px);
  }
`;

const HeroTitle = styled(Typography)`
  font-family: "Outfit", sans-serif;
  font-weight: bold;
  font-size: 6rem;
  letter-spacing: -0.02em;
  line-height: 6rem;
  margin-top: 0;
  margin-bottom: 24px;
  animation: fade 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 474px) {
    font-size: 48px;
    line-height: 56px;
  } ;
`;

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '@media (max-width: 474px)': {
    fontSize: '16px',
    lineHeight: '24px',
  },
}));

const Technologies = styled('div')`
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const AvatarBackground = styled('div')`
  width: 455px;
  height: 455px;
  background-color: #fcfcfd;
  border-radius: 50%;
  padding: 40px;
  border: 1px solid #e6e8ec;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 24px;
    margin-bottom: 32px;
    width: 100%;
    height: 350px;
    border-radius: 9999px;
    padding: 32px;
    box-sizing: border-box;
  }
`;

const Avatar = styled(Image)`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeUp 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 768px) {
    border-radius: 9999px;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroContainer>
        <ContentWrapper>
          <Socials>
            <SocialLink
              href="https://www.linkedin.com/in/cduchesne-1/"
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
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  fill="#777E91"
                />
              </svg>
            </SocialLink>
            <SocialLink
              href="https://github.com/cduchesne1"
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
            <SocialLink
              href="https://g.dev/cduchesne"
              underline="none"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 -65.5 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M184.31481,67.7044587 C197.78381,59.9684587 211.21681,52.1694587 224.73181,44.5134587 C237.55981,37.2454587 252.65281,43.9484587 255.56081,58.0924587 C257.24381,66.2744587 253.59081,75.1134587 246.20381,79.4184587 C221.98581,93.5314587 197.73281,107.588459 173.35881,121.430459 C165.81481,125.714459 158.04381,124.926459 151.16881,119.676459 C144.18481,114.346459 141.98381,106.994459 143.62181,98.4374587 C145.49181,91.9234587 149.77181,87.5684587 155.60881,84.3104587 C165.25981,78.9244587 174.75381,73.2544587 184.31481,67.7044587"
                    fill="#777E91"
                  />
                  <path
                    d="M194.20341,62.0789587 C180.76841,54.2829587 167.29941,46.5479587 153.91141,38.6729587 C141.20241,31.1969587 139.46241,14.7749587 150.25641,5.18295871 C156.50041,-0.364041286 165.98141,-1.62104129 173.40341,2.62395871 C197.73541,16.5409587 222.03541,30.5169587 246.20941,44.7039587 C253.69141,49.0949587 256.89341,56.2199587 255.78641,64.7989587 C254.66141,73.5109587 249.39541,79.0929587 241.16641,81.9539587 C234.58941,83.5919587 228.67841,82.0619587 222.93841,78.6359587 C213.44741,72.9709587 203.79041,67.5829587 194.20341,62.0789587"
                    fill="#777E91"
                  />
                  <path
                    d="M71.7518102,56.5628587 C63.1308102,61.4608587 54.5048102,66.3498587 45.8928102,71.2628587 C40.8548102,74.1368587 35.8728102,77.1088587 30.8088102,79.9348587 C20.6058102,85.6298587 8.48381017,82.2918587 2.69881017,72.2608587 C-2.82218983,62.6888587 0.35081017,50.2788587 10.1768102,44.5428587 C34.2018102,30.5198587 58.2888102,16.5988587 82.4628102,2.83385871 C89.8768102,-1.38814129 97.5688102,-0.857141286 104.42481,4.18985871 C111.66081,9.51685871 114.02981,17.0128587 112.40481,25.8008587 C111.39681,27.9268587 110.79481,30.4198587 109.28581,32.0948587 C106.83081,34.8198587 104.04081,37.4288587 100.93481,39.3448587 C91.3228102,45.2718587 81.4958102,50.8498587 71.7518102,56.5628587"
                    fill="#777E91"
                  />
                  <path
                    d="M61.8670102,62.0569587 C70.4200102,67.0729587 78.9670102,72.0999587 87.5280102,77.1019587 C92.5350102,80.0279587 97.6000102,82.8569587 102.57901,85.8279587 C112.61301,91.8179587 115.78401,103.983959 109.98901,114.008959 C104.45901,123.576959 92.1260102,127.034959 82.2450102,121.391959 C58.0880102,107.596959 33.9890102,93.6989587 9.98101017,79.6459587 C2.61801017,75.3359587 -0.76798983,68.4089587 0.17501017,59.9479587 C1.17001017,51.0169587 6.47701017,45.2179587 14.9000102,42.2309587 C17.2450102,42.0419587 19.7050102,41.3159587 21.9110102,41.7859587 C25.4980102,42.5499587 29.1530102,43.6609587 32.3650102,45.3929587 C42.3040102,50.7529587 52.0480102,56.4749587 61.8670102,62.0569587"
                    fill="#777E91"
                  />
                </g>
              </svg>
            </SocialLink>
          </Socials>
          <HeroTitle>Christophe Duchesne</HeroTitle>
          <HeroSubtitle variant="body1">
            Hi there! I&apos;m a software engineering student located in Canada
            mostly focused on fullstack web & mobile development with a passion
            for best practices, architecture & cloud computing.
          </HeroSubtitle>
          <HeroSubtitle variant="body2">
            <br />
            Here are a few technologies I&apos;ve been working with recently:
          </HeroSubtitle>
          <Technologies>
            <List>
              <HeroSubtitle variant="body2">▶ TypeScript</HeroSubtitle>
              <HeroSubtitle variant="body2">▶ React</HeroSubtitle>
              <HeroSubtitle variant="body2">▶ NestJS</HeroSubtitle>
            </List>
            <List>
              <HeroSubtitle variant="body2">▶ Java</HeroSubtitle>
              <HeroSubtitle variant="body2">▶ Angular</HeroSubtitle>
              <HeroSubtitle variant="body2">▶ Neo4j</HeroSubtitle>
            </List>
            <List>
              <HeroSubtitle variant="body2">▶ Python</HeroSubtitle>
              <HeroSubtitle variant="body2">▶ Flutter</HeroSubtitle>
              <HeroSubtitle variant="body2">▶ GCP</HeroSubtitle>
            </List>
          </Technologies>
        </ContentWrapper>
        <AvatarBackground>
          <Avatar src={avatar} alt="Headshot" />
        </AvatarBackground>
      </HeroContainer>
    </HeroSection>
  );
}
