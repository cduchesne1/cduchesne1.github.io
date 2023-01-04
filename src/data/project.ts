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
  hasSite: boolean;
  siteLink: string;
  hasRepo: boolean;
  repoLink: string;
  hasVideo: boolean;
  videoLink: string;
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
      'A static website built to showcase my skills and projects. This website was built from scratch using a template you can find from UI8.\n\nI decided to rebuild my portfolio from scratch because my old portfolio was made by using a pre-made Bootstrap template and I wanted to make it myself since this site is for showcasing my coding skills.',
    date: 'August, 2022',
    gallery: [
      {
        src: '/projects/portfolio/portfolio_preview_02.png',
        alt: 'Portfolio Preview 1',
      },
      {
        src: '/projects/portfolio/portfolio_preview_03.png',
        alt: 'Portfolio Preview 2',
      },
      {
        src: '/projects/portfolio/portfolio_preview_04.png',
        alt: 'Portfolio Preview 3',
      },
    ],
    techDescription:
      'The choice of technologies for this project was not easy. I wanted to make sure the website was fast and easy to maintain. Wanting to use React, I tried both Astro & Next.js.',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Material-UI',
      'Styled-Components',
    ],
    hasSite: false,
    siteLink: '',
    hasRepo: false,
    repoLink: '',
    hasVideo: false,
    videoLink: '',
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
      'A mobile application that allows users to find and match with other users based on their astrology signs. If two users like each other, they can chat with each other.\n\nThis project was a real challenge for me. When starting it, I was used to work with Firebase and had little experience with REST APIs. I hit some limitations with Firebase and had no choice but to build a full REST API connected to a database to supply the mobile app.\n\n This project is probably the best self-learning experience I had. I was able to lear a lot about full-stack development & develop a passion for it.',
    date: 'October, 2020',
    gallery: [
      {
        src: '/projects/truematch/truematch_preview_02.png',
        alt: 'TrueMatch Preview 1',
      },
      {
        src: '/projects/truematch/truematch_preview_03.png',
        alt: 'TrueMatch Preview 2',
      },
      {
        src: '/projects/truematch/truematch_preview_04.png',
        alt: 'TrueMatch Preview 3',
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
    hasSite: false,
    siteLink: '',
    hasRepo: false,
    repoLink: '',
    hasVideo: false,
    videoLink: '',
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
      "The Laval University's Software Engineering Student Association's wanted to revamp their website so me and few other students decided to tackle this challenge.\n\nWe started from scratch by looking at some designs for inspirations & started from there. Since I had some experience with softwares like Adobe XD & Figma, I was the one who designed the website's layout. I also did a lot of the development of the website.",
    date: 'December, 2021',
    gallery: [
      {
        src: '/projects/aeglo/aeglo_preview_02.png',
        alt: 'AEGLO Website Preview 1',
      },
      {
        src: '/projects/aeglo/aeglo_preview_03.png',
        alt: 'AEGLO Website Preview 2',
      },
      {
        src: '/projects/aeglo/aeglo_preview_04.png',
        alt: 'AEGLO Website Preview 3',
      },
    ],
    techDescription:
      'The choice of technologies for this project was pretty straight forward. We already had some experience with React so we decided to go with it.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Chakra UI', 'Adobe XD'],
    hasSite: true,
    siteLink: 'https://aeglo.netlify.app/',
    hasRepo: true,
    repoLink: 'https://github.com/aeglo/website-2.0',
    hasVideo: false,
    videoLink: '',
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
      "During a relational database course, we had to develop a full-stack project using a relational database. Me and my teammates searched a long time for a feasible, yet interesting, project to take on. We finally decided to develop a simplified version of Github.\n\nWhat I mean by a simplified version is that we didn't implement all the features of Github and instead of having a full-fledged SSH Git system, we used a simple Docker container with Git to manage the repositories. The backend interacted with the Git container using the Docker library.\n\nThis project was a great learning experience for me. I learned a lot about Docker, Git, and relational databases.",
    date: 'April, 2022',
    gallery: [
      {
        src: '/projects/repub/repub_preview_02.png',
        alt: 'Repub Preview 1',
      },
      {
        src: '/projects/repub/repub_preview_03.png',
        alt: 'Repub Preview 2',
      },
      {
        src: '/projects/repub/repub_preview_04.png',
        alt: 'Repub Preview 3',
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
      'Bash',
      'Git',
    ],
    hasSite: false,
    siteLink: '',
    hasRepo: true,
    repoLink: 'https://github.com/cduchesne1/GLO-2005-Repub',
    hasVideo: true,
    videoLink: 'https://www.youtube.com/embed/2xIt971sXr4?start=485',
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
      'This project was developed during a web development course. The goal of the project was to develop a website that communicated with a REST API.\n\n We had to develop the dynamic pages for the different restaurants, implement modals, manage the authentication, add a map & more.\n\nThis project was my first real experience with JavaScript & was a great experience to learn a lot about web development.',
    date: 'April, 2022',
    gallery: [
      {
        src: '/projects/ufood/ufood_preview_02.png',
        alt: 'UFood Preview 1',
      },
      {
        src: '/projects/ufood/ufood_preview_03.png',
        alt: 'UFood Preview 2',
      },
    ],
    techDescription:
      'Since this project was developed for a university course, the technologies used were imposed by the course.',
    technologies: ['JavaScript', 'VueJS', 'Tailwind CSS'],
    hasSite: false,
    siteLink: '',
    hasRepo: false,
    repoLink: '',
    hasVideo: false,
    videoLink: '',
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
      'This project was my final college project. My team & I decided to develop a payment system working with digital prints. We created a registration system, a POS, payment terminal and a dashboard. To ensure the security of the system, we used AES & RSA to encode the data.\n\nThe project was developed under the MVC pattern. We implemented AES & RSA ourselves which was not easy to do with Java. We also used a Raspberry Pi to simulate the payment terminal.\n\nNote: The company mentioned in the video is a fictional company & the project is the sole property of the people who worked on it.',
    date: 'February, 2020',
    gallery: [
      {
        src: '/projects/credigit/credigit_preview_02.png',
        alt: 'Credigit Preview 1',
      },
      {
        src: '/projects/credigit/credigit_preview_03.png',
        alt: 'Credigit Preview 2',
      },
      {
        src: '/projects/credigit/credigit_preview_04.png',
        alt: 'Credigit Preview 3',
      },
    ],
    techDescription:
      'The technologies used, were mostly chosen because of the experience of the team members with them.',
    technologies: ['Java', 'JavaFX', 'MongoDB', 'Raspberry Pi'],
    hasSite: false,
    siteLink: '',
    hasRepo: true,
    repoLink: 'https://github.com/JLague/credigit',
    hasVideo: true,
    videoLink: 'https://www.youtube.com/embed/1PWFaOfVV6Q',
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
      'This project was my first real mobile project. Since I was learning Java in college, I decided to practice by learning Android development. After learning on the subject by watching courses, I decided to try to develop a project on my own.\n\nWatchpoint is a social network axed on events. Users can find events happening in their area, buy tickets, get directions & share their experience with other users.\n\nUnfortunately, this project was never finished but I would like to continue working on it in the future.',
    date: 'June, 2019',
    gallery: [
      {
        src: '/projects/watchpoint/watchpoint_preview_02.png',
        alt: 'Watchpoint Preview 1',
      },
      {
        src: '/projects/watchpoint/watchpoint_preview_03.png',
        alt: 'Watchpoint Preview 2',
      },
      {
        src: '/projects/watchpoint/watchpoint_preview_04.png',
        alt: 'Watchpoint Preview 3',
      },
    ],
    techDescription:
      'This project was my first introduction to mobile development. Since I had a background in Java, I decided to go with it.',
    technologies: ['Java', 'Android', 'Firebase'],
    hasSite: false,
    siteLink: '',
    hasRepo: false,
    repoLink: '',
    hasVideo: false,
    videoLink: '',
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
      "This project was developed during a Python course. The goal of the project was to develop a game of Quoridor. The player played against an AI developed by the teacher by communicating with a REST API. We also needed to implement the possibility to play automatically with an algorithm of our choosing et try to beat the teacher's AI.\n\nThe algorithm we chose was the Minimax algorithm, but we were forced to limit our search depth to 2 to optimize the time it took to play.",
    date: 'November, 2020',
    gallery: [
      {
        src: '/projects/quoridor/quoridor_preview_02.png',
        alt: 'Quoridor Preview 1',
      },
      {
        src: '/projects/quoridor/quoridor_preview_03.png',
        alt: 'Quoridor Preview 2',
      },
    ],
    techDescription:
      'This project was developed during a Python course. The technologies used were imposed by the course.',
    technologies: ['Python', 'Turtle', 'NetworkX'],
    hasSite: false,
    siteLink: '',
    hasRepo: false,
    repoLink: '',
    hasVideo: false,
    videoLink: '',
    metaTitle: 'Quoridor',
  },
];

export default projects;
