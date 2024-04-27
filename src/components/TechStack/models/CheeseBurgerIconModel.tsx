import { FC, useCallback, useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
  onClick: () => void;
};

export const CheeseBurgerIconModel: FC<Props> = ({ onClick }) => {
  const ref = useRef<THREE.Object3D>(null!);
  const { scene } = useGLTF('/assets/cheeseburger-icon.glb');

  const onPointerOver = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
    ref.current.position.z = 0.2;
    ref.current.updateMatrix();

  }, []);

  const onPointerOut = useCallback(() => {
    document.body.style.cursor = 'default';
    ref.current.position.z = 0;
  }, []);

  return (
    <primitive
      ref={ref}
      object={scene}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={onClick}
    />
  );
};

useGLTF.preload('/assets/cheeseburger-icon.glb');
