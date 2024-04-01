import { FC, useEffect, useRef } from "react";
import * as THREE from "three";
import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollControlsState } from "@/types";

type ColorRef = {
  current: {
    color: string;
  };
};

export const Background: FC = () => {
  const material = useRef<THREE.MeshBasicMaterial | null>(null);
  const color = useRef<ColorRef["current"]>({
    color: "#ff9a9e",
  });
  const data: ScrollControlsState = useScroll() as ScrollControlsState;

  const tl = useRef<GSAPTimeline | null>(null);

  useFrame(() => {
    if (tl.current && material.current) {
      tl.current.progress(data.scroll.current);
      material.current.color = new THREE.Color(color.current.color);
    }
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      color: "#fbc2eb",
    });
    tl.current.to(color.current, {
      color: "#ffecd2",
    });
    tl.current.to(color.current, {
      color: "#9370DB",
    });
  }, []);

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
