import { FC } from "react";

import { useGLTF } from "@react-three/drei";

export const PizzaIconModel: FC = () => {
  const { scene } = useGLTF("/assets/pizza-icon.glb");

  return <primitive object={scene} />;
};

useGLTF.preload("/assets/pizza-icon.glb");
