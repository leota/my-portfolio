import { FC } from "react";
import { WavingModel } from "./WavingModel";
import { motion } from "framer-motion-3d";


export const Intro: FC = () => {
  return (
    <motion.group>
      <WavingModel />
    </motion.group>
  );
};
