import { FC, useState } from "react";
import { useRouter } from "next/router";
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
  const { push } = useRouter();
  const [isPlaying, setPlaying] = useState(false);
  const [isPizzaPlaying, setPizzaPlaying] = useState(false);
  const [isBurgerPlaying, setBurgerPlaying] = useState(false);
  const [isAnimationFinished, setAnimationFinished] = useState(false);
  const [isRestart, setRestart] = useState(false);

  const handlePizzaClick = () => {
    setPlaying(true);
    setPizzaPlaying(true);
    setRestart(false);
  };

  const handleBurgerClick = () => {
    setPlaying(true);
    setBurgerPlaying(true);
    setRestart(false);
  };

  const handleAnimationFinished = () => {
    setAnimationFinished(true);
  };

  const handleRestart = () => {
    setRestart(true);
    setPlaying(false);
    setPizzaPlaying(false);
    setBurgerPlaying(false);
    setAnimationFinished(false);
  };

  const handleBack = () => {
    push("/");
  };

  return (
    <div className="relative h-screen">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [16, 10, 30], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <directionalLight
          position={[0, 10, 0]}
          intensity={2}
          rotation={[0, 0, 0]}
        />
        <Environment preset="lobby" />
        <CameraAnimation isPlaying={isPlaying} restartAnimation={isRestart} />
        <StructureModel />
        <UIPanelModel />
        <PizzaIconModel onClick={handlePizzaClick} />
        <CheeseBurgerIconModel onClick={handleBurgerClick} />
        <EnvelopeModel isPlaying={isPlaying} restartAnimation={isRestart} />
        <DocumentsModel isPlaying={isPlaying} restartAnimation={isRestart} />
        {isBurgerPlaying && (
          <BurgerItemsModel
            isPlaying={isBurgerPlaying}
            restartAnimation={isRestart}
            onAnimationFinished={handleAnimationFinished}
          />
        )}
        {isPizzaPlaying && (
          <PizzaItemsModel
            isPlaying={isPizzaPlaying}
            restartAnimation={isRestart}
            onAnimationFinished={handleAnimationFinished}
          />
        )}
      </Canvas>
      {isAnimationFinished && (
        <div className="absolute w-full bottom-10 flex justify-center">
          <button
            onClick={handleRestart}
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full m-2 hover:bg-purple-700"
          >
            Start again
          </button>
          <button
            onClick={handleBack}
            className="bg-purple-300 text-purple-600 font-bold py-2 px-4 rounded-full m-2 hover:bg-purple-400"
          >
            Back to home
          </button>
        </div>
      )}
    </div>
  );
};
