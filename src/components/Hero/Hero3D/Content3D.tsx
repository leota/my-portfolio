import { FC, useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { useViewport } from '@/hooks/use-viewport';

import { RoomModel } from './RoomModel';
import { TypingModel } from './TypingModel';

export const Content3D: FC = () => {
  const ref = useRef<THREE.Group>(null!);
  const { isDesktop, isLargeDesktop } = useViewport();
  const scale = (isDesktop || isLargeDesktop) ? 0.75 : 1;

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <group ref={ref} rotation={[0, -30, 0]} scale={scale}>
      <ambientLight intensity={1} color={0xffacac} />
      <RoomModel />
      <TypingModel />
    </group>
  );
};
