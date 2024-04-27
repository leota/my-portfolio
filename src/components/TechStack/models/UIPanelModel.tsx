import { FC } from 'react';

import { useGLTF } from '@react-three/drei';

export const UIPanelModel: FC = () => {
  const { scene } = useGLTF('/assets/ui-panel.glb');

  return <primitive object={scene} />;
};

useGLTF.preload('/assets/ui-panel.glb');
