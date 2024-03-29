import { FC } from "react";
import { Background } from "./Background";
import { WavingModel } from "./WavingModel";
import { motion } from "framer-motion-3d";

// let wavingModelRatio = 6;

export const Intro: FC = () => {
  return (
    <motion.group>
      <Background position={[-4.5, -4, 0]} rotation={[0, -2.8, 0]} />
      <WavingModel />
    </motion.group>
  );
};
