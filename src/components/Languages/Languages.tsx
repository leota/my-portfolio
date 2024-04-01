import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomModel } from "./RoomModel";
import { TypingModel } from "./TypingModel";
import { useFrame } from "@react-three/fiber";
import { useViewport } from "@/hooks/use-viewport";

const baseXPosition = -4.5;
const baseYPosition = -20;

let xPosition: number, yPosition: number;
let position: THREE.Vector3, scale: number;

export const Languages: FC = () => {
  const ref = useRef<THREE.Group>(null!);
  const {
    responsiveRatio,
    size,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  } = useViewport();
  const halfWidth = size.width / 2;
  const [mouseX, setMouseX] = useState(0);

  switch (true) {
    case isMobile:
      position = new THREE.Vector3(baseXPosition, baseYPosition, 0);
      break;
    case isTablet:
      xPosition = baseXPosition;
      yPosition = baseYPosition;
      position = new THREE.Vector3(xPosition, yPosition, 0);
      break;
    case isDesktop:
      xPosition = baseXPosition + 10;
      yPosition = -12;
      position = new THREE.Vector3(xPosition, yPosition, 0);
      break;
    case isLargeDesktop:
      xPosition = baseXPosition + 14;
      yPosition = -10;
      position = new THREE.Vector3(xPosition, yPosition, 0);
      scale = Math.max(0.5, Math.min(0.9 * responsiveRatio * 0.15, 0.9));
      break;
    default:
      scale = Math.max(0.5, Math.min(0.9 * responsiveRatio * 0.1, 0.9));
      position = new THREE.Vector3(baseXPosition, baseYPosition, 0);
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize -1 to 1
      setMouseX((event.clientX - halfWidth) / halfWidth);
    };
    const handleTouchMove = (event: TouchEvent) => {
      // Normalize -1 to 1
      setMouseX((event.touches[0].clientX - halfWidth) / halfWidth);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [halfWidth]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = mouseX * Math.PI * 0.3;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <group position={[10, -32, 0]} rotation={[0, -30, 0]} scale={0.7}>
        <RoomModel />
        <TypingModel />
      </group>
    </group>
  );
};
