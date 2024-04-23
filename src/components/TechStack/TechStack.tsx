import { FC, useState } from "react";
import { StructureModel } from "./models/StructureModel";
import { EnvelopeModel } from "./models/EnvelopeModel";
import { UIPanelModel } from "./models/UIPanelModel";
import { PizzaIconModel } from "./models/PizzaIconModel";
import { CheeseBurgerIconModel } from "./models/CheeseBurgerIconModel";
import { CameraAnimation } from "./models/CameraAnimation";
import { DocumentsModel } from "./models/DocumentsModel";
import { BurgerItemsModel } from "./models/BurgerItemsModel";
import { PizzaItemsModel } from "./models/PizzaItemsModel";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export const TechStack: FC = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [isPizzaPlaying, setPizzaPlaying] = useState(false);
  const [isBurgerPlaying, setBurgerPlaying] = useState(false);

  const handlePizzaClick = () => {
    setPlaying(!isPlaying);
    setPizzaPlaying(!isPizzaPlaying);
  };

  const handleBurgerClick = () => {
    setPlaying(!isPlaying);
    setBurgerPlaying(!isBurgerPlaying);
  };

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [16, 10, 30], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <directionalLight position={[0, 10, 0]} intensity={2} rotation={[0,0,0]} />
      {/* <directionalLightHelper args={[directionalLight, 5]} /> */}
      <Environment preset="lobby" />
      <CameraAnimation isPlaying={isPlaying} />
      <StructureModel />
      <UIPanelModel />
      <PizzaIconModel onClick={handlePizzaClick} />
      <CheeseBurgerIconModel onClick={handleBurgerClick} />
      <EnvelopeModel isPlaying={isPlaying} />
      <DocumentsModel isPlaying={isPlaying} />
      {isBurgerPlaying && <BurgerItemsModel isPlaying={isBurgerPlaying} />}
      {isPizzaPlaying && <PizzaItemsModel isPlaying={isPizzaPlaying} />}
    </Canvas>
  );
};
