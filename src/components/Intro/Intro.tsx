import { FC } from "react";
import { WavingModel } from "./WavingModel";
import { motion } from "framer-motion-3d";


export const Intro: FC = () => {
  return (
    <motion.group whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
      <WavingModel />
    </motion.group>
  );
};
