import Head from "next/head";

import { Suspense, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/Hero/Hero";
import { Skills } from "@/components/Skills";

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
          <div className="flex flex-col justify-center items-center p-4 md:p-16">
            <Hero />
            <Skills />
          </div>
        </Suspense>
      </main>
    </>
  );
}
