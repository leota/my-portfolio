import Head from "next/head";

import { Suspense, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { TechStack } from "@/components/TechStack/TechStack";

export default function Skills3DTour() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Skills 3D tour</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
        <Suspense fallback={null}>
          <TechStack />
        </Suspense>
      </main>
    </>
  );
}
