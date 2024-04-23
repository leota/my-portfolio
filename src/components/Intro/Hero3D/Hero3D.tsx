import { FC, Suspense } from "react";
import { Scene } from "./Scene";
import { Content3D } from "./Content3D";

export const Hero3D: FC = () => {
  return (
    <Scene>
      <Suspense fallback={null}>
        <Content3D />
      </Suspense>
    </Scene>
  );
};
