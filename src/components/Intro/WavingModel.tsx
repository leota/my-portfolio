import { FC, useEffect, useRef } from "react";
import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useViewport } from "@/hooks/use-viewport";

export const WavingModel: FC = () => {
  const { responsiveRatio, isMobile, isTablet, isLargeDesktop } = useViewport();

  const baseXPosition = 1.5;
  const baseZPosition = 10;

  const scale = Math.max(0.5, Math.min(0.9 * responsiveRatio * 0.9, 0.9));

  let xPosition;
  let yPosition;

  switch (true) {
    case isMobile:
      xPosition = 6;
      yPosition = -4;
      break;
    case isTablet:
      xPosition = baseXPosition * responsiveRatio + responsiveRatio * 3.5;
      yPosition = -1;
      break;
    case isLargeDesktop:
      xPosition = baseXPosition * responsiveRatio + responsiveRatio * 1.5;
      yPosition = -1;
      break;
    default:
      xPosition = baseXPosition * responsiveRatio + responsiveRatio * 2.5;
      yPosition = -1;
  }

  const position = new THREE.Vector3(xPosition, yPosition, baseZPosition);

  const { scene, animations } = useGLTF("/assets/waving-animation.glb");
  const mixerRef = useRef<THREE.AnimationMixer>();
  useEffect(() => {
    mixerRef.current = new THREE.AnimationMixer(scene);
    const action = mixerRef.current.clipAction(animations[0]);
    action.play();

    return () => {
      action.stop();
    };
  }, [animations, scene]);

  useFrame((_state, delta) => {
    mixerRef?.current?.update(delta);
  });

  return (
    <motion.group position={position} rotation={[0.1, -119.2, 0]} scale={scale}>
      <primitive object={scene} scale={6} />
    </motion.group>
  );
};

useGLTF.preload("/assets/waving-animation.glb");
