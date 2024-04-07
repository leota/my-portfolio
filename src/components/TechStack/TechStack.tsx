import { FC, useRef } from "react";
import * as THREE from "three";
import { StructureModel } from "./models/StructureModel";
import { EnvelopeModel } from "./models/EnvelopeModel";
import { UIPanelModel } from "./models/UIPanelModel";
import { PizzaIconModel } from "./models/PizzaIconModel";
import { CheeseBurgerIconModel } from "./models/CheeseBurgerIconModel";

const baseXPosition = 0;
const baseYPosition = 0;

const rotation = new THREE.Euler(0, Math.PI / 5, 0);

let position: THREE.Vector3, scale: number;

export const TechStack: FC = () => {
  const ref = useRef<THREE.Group>(null!);
  position = new THREE.Vector3(baseXPosition, baseYPosition, 0);
  scale = 10;

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      <StructureModel />
      <UIPanelModel />
      <PizzaIconModel />
      <CheeseBurgerIconModel />
      <EnvelopeModel />
    </group>
  );
};
