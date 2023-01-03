/* eslint-disable max-len */
interface Project {
  thumbnail: { src: string; alt: string };
  path: string;
  title: string;
  description: string;
  date: string;
  gallery: { src: string; alt: string }[];
  techDescription: string;
  technologies: string[];
  hasRepo: boolean;
  repoLink: string;
  metaTitle: string;
}

const projects: Project[] = [
  {
    thumbnail: {
      src: '/projects/portfolio/portfolio_preview_01.png',
      alt: 'Portfolio Project Thumbnail',
    },
    path: 'portfolio',
    title: 'Portfolio',
    description:
      'A static website built to showcase my skills and projects. This website was built from scratch using a template you can find from UI8.',
    date: 'August, 2022',
    gallery: [
      {
        src: '/projects/portfolio/portfolio_preview_01.png',
        alt: 'Portfolio Preview 1',
      },
      {
        src: '/projects/portfolio/portfolio_preview_01.png',
        alt: 'Portfolio Preview 2',
      },
    ],
    techDescription:
      'The choice of technologies for this project was not easy. I wanted to make sure the website is fast and easy to maintain. Wanting to use React, I tried both Astro & Next.js.',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Material-UI',
      'Styled-Components',
    ],
    hasRepo: false,
    repoLink: '',
    metaTitle: 'Portfolio',
  },
  {
    thumbnail: {
      src: '/projects/truematch/truematch_preview_01.png',
      alt: 'TrueMatch Project Thumbnail',
    },
    path: 'truematch',
    title: 'TrueMatch',
    description:
      'A mobile application that allows users to find and match with other users based on their astrology sign. If two users like each other, they can chat with each other.\nThe application was developed using the Stacked architecture, an architecture similar to MVVM. This architecture was developed by the YouTuber FilledStacks.',
    date: 'October, 2020',
    gallery: [
      {
        src: '/projects/truematch/truematch_preview_01.png',
        alt: 'TrueMatch Preview 1',
      },
      {
        src: '/projects/truematch/truematch_preview_01.png',
        alt: 'TrueMatch Preview 2',
      },
    ],
    techDescription:
      'The technologies used for this project changed a lot during the development. From starting with only a backend-as-a-service to a full-stack project.',
    technologies: [
      'Dart',
      'Flutter',
      'TypeScript',
      'NestJS',
      'Firebase',
      'Neo4j',
      'Cloud Run',
      'Github Actions',
      'Heroku',
      'Docker',
    ],
    hasRepo: false,
    repoLink: '',
    metaTitle: 'TrueMatch',
  },
  {
    thumbnail: {
      src: '/projects/aeglo/aeglo_preview_01.png',
      alt: 'AEGLO Website Project Thumbnail',
    },
    path: 'aeglo',
    title: 'AEGLO Website',
    description:
      "`The Laval University's Software Engineering Student Association's wanted to revamp their website. Me and a few other students were the ones who built the website. I was responsible for designing the website's layout and did a lot of the development of the website.`",
    date: 'December, 2021',
    gallery: [
      {
        src: '/projects/aeglo/aeglo_preview_01.png',
        alt: 'AEGLO Website Preview 1',
      },
      {
        src: '/projects/aeglo/aeglo_preview_01.png',
        alt: 'AEGLO Website Preview 2',
      },
    ],
    techDescription:
      'The choice of technologies for this project was pretty straight forward. We already had some experience with React so we decided to go with it.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Chakra UI', 'Adobe XD'],
    hasRepo: false,
    repoLink: '',
    metaTitle: 'AEGLO',
  },
  {
    thumbnail: {
      src: '/projects/repub/repub_preview_01.png',
      alt: 'Repub Project Thumbnail',
    },
    path: 'repub',
    title: 'Repub - A Github Clone',
    description:
      "The Laval University's Software Engineering Student Association's wanted to revamp their website. Me and a few other students were the ones who built the website. I was responsible for designing the website's layout and did a lot of the development of the website.",
    date: 'April, 2022',
    gallery: [
      {
        src: '/projects/repub/repub_preview_01.png',
        alt: 'Repub Preview 1',
      },
      {
        src: '/projects/repub/repub_preview_01.png',
        alt: 'Repub Preview 2',
      },
    ],
    techDescription:
      'Since this project was developed for a university course, some of the technologies used were imposed by the course.',
    technologies: [
      'Python',
      'Flask',
      'JavaScript',
      'VueJS',
      'Tailwind CSS',
      'MySQL',
      'Docker',
      'Git',
    ],
    hasRepo: false,
    repoLink: '',
    metaTitle: 'Repub',
  },
  {
    thumbnail: {
      src: '/projects/ufood/ufood_preview_01.png',
      alt: 'UFood Project Thumbnail',
    },
    path: 'ufood',
    title: 'UFood',
    description:
      "The Laval University's Software Engineering Student Association's wanted to revamp their website. Me and a few other students were the ones who built the website. I was responsible for designing the website's layout and did a lot of the development of the website.",
    date: 'April, 2022',
    gallery: [
      {
        src: '/projects/ufood/ufood_preview_01.png',
        alt: 'UFood Preview 1',
      },
      {
        src: '/projects/ufood/ufood_preview_01.png',
        alt: 'UFood Preview 2',
      },
    ],
    techDescription:
      'Since this project was developed for a university course, the technologies used were imposed by the course.',
    technologies: ['JavaScript', 'VueJS', 'Tailwind CSS'],
    hasRepo: false,
    repoLink: '',
    metaTitle: 'UFood',
  },
  {
    thumbnail: {
      src: '/projects/credigit/credigit_preview_01.png',
      alt: 'Credigit Project Thumbnail',
    },
    path: 'credigit',
    title: 'Credigit',
    description:
      "The Laval University's Software Engineering Student Association's wanted to revamp their website. Me and a few other students were the ones who built the website. I was responsible for designing the website's layout and did a lot of the development of the website.",
    date: 'February, 2020',
    gallery: [
      {
        src: '/projects/credigit/credigit_preview_01.png',
        alt: 'Credigit Preview 1',
      },
      {
        src: '/projects/credigit/credigit_preview_01.png',
        alt: 'Credigit Preview 2',
      },
    ],
    techDescription:
      'The technologies used, were mostly chosen because of the experience of the team members with them.',
    technologies: ['Java', 'JavaFX', 'MongoDB', 'Raspberry Pi'],
    hasRepo: true,
    repoLink: 'https://github.com/JLague/credigit',
    metaTitle: 'Credigit',
  },
  {
    thumbnail: {
      src: '/projects/watchpoint/watchpoint_preview_01.png',
      alt: 'Watchpoint Project Thumbnail',
    },
    path: 'watchpoint',
    title: 'Watchpoint',
    description:
      "The Laval University's Software Engineering Student Association's wanted to revamp their website. Me and a few other students were the ones who built the website. I was responsible for designing the website's layout and did a lot of the development of the website.",
    date: 'June, 2019',
    gallery: [
      {
        src: '/projects/watchpoint/watchpoint_preview_01.png',
        alt: 'Watchpoint Preview 1',
      },
      {
        src: '/projects/watchpoint/watchpoint_preview_01.png',
        alt: 'Watchpoint Preview 2',
      },
    ],
    techDescription:
      'This project was my first introduction to mobile development. Since I had a background in Java, I decided to go with it.',
    technologies: ['Java', 'Android', 'Firebase'],
    hasRepo: false,
    repoLink: '',
    metaTitle: 'Watchpoint',
  },
  {
    thumbnail: {
      src: '/projects/quoridor/quoridor_preview_01.png',
      alt: 'Quoridor Project Thumbnail',
    },
    path: 'quoridor',
    title: 'Quoridor',
    description:
      "The Laval University's Software Engineering Student Association's wanted to revamp their website. Me and a few other students were the ones who built the website. I was responsible for designing the website's layout and did a lot of the development of the website.",
    date: 'November, 2020',
    gallery: [
      {
        src: '/projects/quoridor/quoridor_preview_01.png',
        alt: 'Quoridor Preview 1',
      },
      {
        src: '/projects/quoridor/quoridor_preview_01.png',
        alt: 'Quoridor Preview 2',
      },
    ],
    techDescription:
      'This project was developed during a Python course. The technologies used were imposed by the course.',
    technologies: ['Python', 'Turtle'],
    hasRepo: false,
    repoLink: '',
    metaTitle: 'Quoridor',
  },
];

export default projects;
