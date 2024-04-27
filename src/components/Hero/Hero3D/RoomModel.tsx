import { FC } from 'react';

import { useGLTF } from '@react-three/drei';

export const RoomModel: FC = () => {
  const { scene } = useGLTF('/assets/room.glb');

  return <primitive object={scene} />;
};

useGLTF.preload('/assets/room.glb');
