import { FC } from 'react';

import { useGLTF } from '@react-three/drei';

export const StructureModel: FC = () => {
  const { scene } = useGLTF('/assets/structure.glb');


  return <primitive object={scene} />;
};

useGLTF.preload('/assets/structure.glb');
