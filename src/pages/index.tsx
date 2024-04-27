import { NextSeo } from 'next-seo';

import { AboutMe } from '@/components/AboutMe';
import { Contacts } from '@/components/Contacts';
import { GradientEffect } from '@/components/GradientEffect';
import { Hero } from '@/components/Hero/Hero';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Page } from '@/components/Page';
import { Projects } from '@/components/Projects/Projects';
import { Skills } from '@/components/Skills';
import { Socials } from '@/components/Socials';

export default function Home() {
  return (
    <>
      <NextSeo
        title='Leonardo Maglio - Full Stack 3D Web Developer'
        description="I'm a Full Stack 3D Web Developer with a passion for creating immersive and interactive experiences on the web."
      />
      <main>
        <LoadingScreen />
        <GradientEffect />
        <Page>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Socials />
          <Contacts />
        </Page>
      </main>
    </>
  );
}
