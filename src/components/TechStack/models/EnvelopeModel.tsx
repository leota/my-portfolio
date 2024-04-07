import { FC } from "react";

import { useGLTF } from "@react-three/drei";

export const EnvelopeModel: FC = () => {
  const { scene } = useGLTF("/assets/envelope.glb");

  return <primitive object={scene} />;
};

useGLTF.preload("/assets/envelope.glb");
