import { FC } from "react";

import { useGLTF } from "@react-three/drei";

export const CheeseBurgerIconModel: FC = () => {
  const { scene } = useGLTF("/assets/cheeseburger-icon.glb");

  return <primitive object={scene} />;
};

useGLTF.preload("/assets/cheeseburger-icon.glb");
