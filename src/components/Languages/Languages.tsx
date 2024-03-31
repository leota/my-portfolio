import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomModel } from "./RoomModel";
import { TyipingModel } from "./TypingModel";
import { useFrame, useThree } from "@react-three/fiber";

export const Languages: FC = () => {
  const ref = useRef<THREE.Group>(null!);
  const { size } = useThree();
  const halfWidth = size.width / 2;
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize -1 to 1
      setMouseX((event.clientX - halfWidth) / halfWidth);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [halfWidth]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = mouseX * Math.PI * 0.3;
    }
  });

  return (
    <group ref={ref}>
      <group position={[10, -32, 0]} rotation={[0, -30, 0]} scale={0.7}>
        <RoomModel />
        <TyipingModel />
      </group>
    </group>
  );
};
