import React from 'react';
import Head from 'next/head';
import Layout from '../layout/Layout';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <>
      <Head>
        <title>Christophe Duchesne</title>
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
          content="Christophe Duchesne"
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
          <Hero />
          <Work />
          <Gallery />
        </Layout>
      </main>
    </>
  );
}
