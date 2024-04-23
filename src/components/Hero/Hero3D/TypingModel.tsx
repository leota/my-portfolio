import { FC, useEffect, useRef } from "react";
import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const TypingModel: FC = () => {
  const { scene, animations } = useGLTF("/assets/typing-animation.glb");
  const mixerRef = useRef<THREE.AnimationMixer>();

  useEffect(() => {
    const animation = animations[0];

    if (animation) {
      const mixer = new THREE.AnimationMixer(scene);
      mixerRef.current = mixer;
      const action = mixer.clipAction(animation);
      action.play();
    }
  }, [scene, animations]);

  useFrame((_state, delta) => {
    mixerRef?.current?.update(delta);
  });

  return (
    <group position={[1.9, -3.3, -1.6]} rotation={[0, 1.5, 0]} scale={6}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload("/assets/typing-animation.glb");
