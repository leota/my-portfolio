import { LoadingScreen } from "@/components/LoadingScreen";
import { TechStack } from "@/components/TechStack/TechStack";
import { NextSeo } from "next-seo";

export default function Skills3DTour() {
  return (
    <>
      <NextSeo title="3D Skills" />
      <main className="h-screen">
        <LoadingScreen />
        <TechStack />
      </main>
    </>
  );
}
