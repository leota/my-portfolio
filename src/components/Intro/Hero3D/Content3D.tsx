import { FC, useRef } from "react";
import * as THREE from "three";

import { RoomModel } from "./RoomModel";
import { TypingModel } from "./TypingModel";
import { useFrame } from "@react-three/fiber";

export const Content3D: FC = () => {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <group ref={ref} rotation={[0, -30, 0]} scale={0.7}>
      <RoomModel />
      <TypingModel />
    </group>
  );
};
