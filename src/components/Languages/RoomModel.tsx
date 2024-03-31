import { FC, useEffect, useRef } from "react";
import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useWindow } from "@/hooks/use-window";
import { useRatio } from "@/hooks/use-ratio";

export const RoomModel: FC = () => {
  const { isMobile, isTablet, isLargeDesktop } = useWindow();
  const { responsiveRatio } = useRatio();

//   const baseXPosition = 1.5;
//   const baseZPosition = 10;

//   const scale = Math.max(0.5, Math.min(0.9 * responsiveRatio * 0.9, 0.9));

//   let xPosition;
//   let yPosition;

//   switch (true) {
//     case isMobile:
//       xPosition = 6;
//       yPosition = -4;
//       break;
//     case isTablet:
//       xPosition = baseXPosition * responsiveRatio + responsiveRatio * 3.5;
//       yPosition = -1;
//       break;
//     case isLargeDesktop:
//       xPosition = baseXPosition * responsiveRatio + responsiveRatio * 1.5;
//       yPosition = -1;
//       break;
//     default:
//       xPosition = baseXPosition * responsiveRatio + responsiveRatio * 2.5;
//       yPosition = -1;
//   }

//   const position = new THREE.Vector3(xPosition, yPosition, baseZPosition);

  const { scene } = useGLTF("/assets/room.glb");

  return (
    <motion.group >
      <primitive object={scene} />
    </motion.group>
  );
};

useGLTF.preload("/assets/room.glb");
