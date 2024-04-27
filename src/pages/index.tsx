import Head from "next/head";
import { NextSeo } from "next-seo";
import { Suspense, useState } from "react";

import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/Hero/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects/Projects";
import { Socials } from "@/components/Socials";
import { AboutMe } from "@/components/AboutMe";
import { Contacts } from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Leonardo Maglio - Full Stack 3D Web Developer"
        description="I'm a Full Stack 3D Web Developer with a passion for creating immersive and interactive experiences on the web."
      />
      <main>
        <LoadingScreen />
        <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-purple-800 to-transparent xl:h-1/2" />
        <div className="flex flex-col justify-center items-center p-4 md:p-16">
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Socials />
          <Contacts />
        </div>
      </main>
    </>
  );
}
