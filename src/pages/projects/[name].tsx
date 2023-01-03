import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Explore from '../../components/project/Explore';
import Gallery from '../../components/project/Gallery';
import Hero from '../../components/project/Hero';
import Tech from '../../components/project/Tech';
import projects from '../../data/project';
import Layout from '../../layout/Layout';

export default function Project() {
  const router = useRouter();
  const { name } = router.query;
  const projectData = projects.find((project) => project.path === name);
  const projectDataIndex = projects.findIndex(
    (project) => project.path === name,
  );
  const projectDataNext =
    projects[projectDataIndex < projects.length - 1 ? projectDataIndex + 1 : 0];
  return (
    <>
      <Head>
        <title>{`${projectData!.metaTitle} | Christophe Duchesne`}</title>
        <meta
          name="description"
          content="Christophe Duchesne is a software engineering student who's focus is mostly on fullstack web & mobile development with a passion for best
                practices, architecture & cloud computing."
        />
        <meta
          name="keywords"
          content="software, engineering, student, fullstack, web, mobile, app, cloud"
        />
        <meta
          property="og:title"
          content={`${projectData!.metaTitle} | Christophe Duchesne`}
        />
        <meta
          property="og:description"
          content="Christophe Duchesne is a software engineering student who's focus is mostly on fullstack web & mobile development with a passion for best
                practices, architecture & cloud computing."
        />
        <meta property="og:site_name" content="Christophe Duchesne" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero
            thumbnail={{
              src: projectData!.thumbnail.src,
              alt: projectData!.thumbnail.alt,
            }}
            title={projectData!.title}
            description={projectData!.description}
            date={projectData!.date}
            hasRepo={projectData!.hasRepo}
            repoLink={projectData!.repoLink}
          />
          <Gallery data={projectData!.gallery} />
          <Tech
            description={projectData!.techDescription}
            technologies={projectData!.technologies}
          />
          <Explore title={projectDataNext.title} path={projectDataNext.path} />
        </Layout>
      </main>
    </>
  );
}
