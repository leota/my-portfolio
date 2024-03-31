import { FC, useEffect, useRef } from "react";
import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useWindow } from "@/hooks/use-window";
import { useRatio } from "@/hooks/use-ratio";

export const TyipingModel: FC = () => {
  const { isMobile, isTablet, isLargeDesktop } = useWindow();
  const { responsiveRatio } = useRatio();

  // const baseXPosition = 1.5;
  // const baseZPosition = 10;

  // const scale = Math.max(0.5, Math.min(0.9 * responsiveRatio * 0.9, 0.9));

  // let xPosition;
  // let yPosition;

  // switch (true) {
  //   case isMobile:
  //     xPosition = 6;
  //     yPosition = -4;
  //     break;
  //   case isTablet:
  //     xPosition = baseXPosition * responsiveRatio + responsiveRatio * 3.5;
  //     yPosition = -1;
  //     break;
  //   case isLargeDesktop:
  //     xPosition = baseXPosition * responsiveRatio + responsiveRatio * 1.5;
  //     yPosition = -1;
  //     break;
  //   default:
  //     xPosition = baseXPosition * responsiveRatio + responsiveRatio * 2.5;
  //     yPosition = -1;
  // }

  // const position = new THREE.Vector3(xPosition, yPosition, baseZPosition);

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
    <motion.group position={[1.9, -3.3, -1.6]} rotation={[0, 1.5, 0]} scale={6}>
      <primitive object={scene} />
    </motion.group>
  );
};

useGLTF.preload("/assets/typing-animation.glb");
