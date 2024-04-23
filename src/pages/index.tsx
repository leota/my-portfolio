import Head from "next/head";

import { Suspense, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/Hero/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects/Projects";
import { Socials } from "@/components/Socials";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Leonardo Maglio 3D Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
        <Suspense fallback={null}>
          <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-purple-800 to-transparent xl:h-1/2" />
          <div className="flex flex-col justify-center items-center p-4 md:p-16">
            <Hero />
            <Skills />
            <Projects />
            <Socials />
          </div>
        </Suspense>
      </main>
    </>
  );
}
