import Head from 'next/head';
import React from 'react';
import Explore from '../../components/project/Explore';
import Gallery from '../../components/project/Gallery';
import Hero from '../../components/project/Hero';
import Tech from '../../components/project/Tech';
import projects from '../../data/project';
import Layout from '../../layout/Layout';

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { name: project.path },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
  const projectIndex = projects.findIndex(
    (project) => project.path === params.name,
  );
  return {
    props: {
      projectData: projects.find((project) => project.path === params.name),
      nextProjectData: projects[projectIndex < projects.length - 1 ? projectIndex + 1 : 0],
    },
  };
}

interface ProjectProps {
  projectData: any;
  nextProjectData: any;
}

export default function Project({ projectData, nextProjectData }: ProjectProps) {
  return (
    <>
      <Head>
        <title>{`${projectData.metaTitle} | Christophe Duchesne`}</title>
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
          content={`${projectData.metaTitle} | Christophe Duchesne`}
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
              src: projectData.thumbnail.src,
              alt: projectData.thumbnail.alt,
            }}
            title={projectData.title}
            description={projectData.description}
            date={projectData.date}
            hasSite={projectData.hasSite}
            siteLink={projectData.siteLink}
            hasRepo={projectData.hasRepo}
            repoLink={projectData.repoLink}
            hasVideo={projectData.hasVideo}
            videoLink={projectData.videoLink}
          />
          <Gallery data={projectData.gallery} />
          <Tech
            description={projectData.techDescription}
            technologies={projectData.technologies}
          />
          <Explore title={nextProjectData.title} path={nextProjectData.path} />
        </Layout>
      </main>
    </>
  );
}
