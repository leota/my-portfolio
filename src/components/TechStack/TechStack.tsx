import { FC, useRef, useState } from "react";
import * as THREE from "three";
import { StructureModel } from "./models/StructureModel";
import { EnvelopeModel } from "./models/EnvelopeModel";
import { UIPanelModel } from "./models/UIPanelModel";
import { PizzaIconModel } from "./models/PizzaIconModel";
import { CheeseBurgerIconModel } from "./models/CheeseBurgerIconModel";
import { CameraAnimation } from "./models/CameraAnimation";
import { DocumentsModel } from "./models/DocumentsModel";
import { BurgerItemsModel } from "./models/BurgerItemsModel";
import { PizzaItemsModel } from "./models/PizzaItemsModel";

const baseXPosition = 0;
const baseYPosition = 0;

const rotation = new THREE.Euler(0, Math.PI / 5, 0);

let position: THREE.Vector3;

export const TechStack: FC = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [isPizzaPlaying, setPizzaPlaying] = useState(false);
  const [isBurgerPlaying, setBurgerPlaying] = useState(false);
  const ref = useRef<THREE.Group>(null!);
  position = new THREE.Vector3(baseXPosition, baseYPosition, 0);

 const handlePizzaClick = () => {
    setPlaying(!isPlaying);
    setPizzaPlaying(!isPizzaPlaying);
  }

  const handleBurgerClick = () => {
    setPlaying(!isPlaying);
    setBurgerPlaying(!isBurgerPlaying);
  }

  return (
    <group ref={ref} position={position}>
      <CameraAnimation isPlaying={isPlaying} />
      <StructureModel />
      <UIPanelModel />
      <PizzaIconModel onClick={handlePizzaClick} />
      <CheeseBurgerIconModel onClick={handleBurgerClick} />
      <EnvelopeModel isPlaying={isPlaying} />
      <DocumentsModel isPlaying={isPlaying} />
      {isBurgerPlaying && <BurgerItemsModel isPlaying={isBurgerPlaying} />}
      {isPizzaPlaying && <PizzaItemsModel isPlaying={isPizzaPlaying} />}
    </group>
  );
};