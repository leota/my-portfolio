import { FC } from "react";
import { Cloud as DreiCloud } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const Cloud: FC<{
  position: [number, number, number];
  speed: number;
  opacity: number;
}> = ({ position, speed, opacity }) => {
  return (
    <motion.group
      position={position}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 1.3 }}
      transition={{ duration: 1 }}
    >
      <DreiCloud speed={speed} opacity={opacity} scale={[1, 1, 1]} />
    </motion.group>
  );
};

export const Infrastructure: FC = () => {
  return (
    <group position={[0, -80, 0]}>
      <ambientLight color={"#fbc2eb"} intensity={2.5} />
      <Cloud position={[-4, -2, -25]} speed={0.5} opacity={1} />
      <Cloud position={[4, 2, -15]} speed={0.5} opacity={0.5} />
      <Cloud position={[-4, 2, -10]} speed={0.5} opacity={1} />
      <Cloud position={[4, -2, -5]} speed={0.5} opacity={0.5} />
      <Cloud position={[4, 2, 0]} speed={0.5} opacity={0.75} />
      <Cloud position={[-4, -2, 5]} speed={0.5} opacity={1} />
      <Cloud position={[4, 2, 10]} speed={0.5} opacity={0.5} />
      <Cloud position={[-4, 2, 15]} speed={0.5} opacity={1} />
      <Cloud position={[4, -2, 20]} speed={0.5} opacity={0.5} />
      <Cloud position={[-4, 2, 25]} speed={0.5} opacity={1} />
      <Cloud position={[4, -2, 30]} speed={0.5} opacity={0.5} />
      <Cloud position={[-4, 2, 35]} speed={0.5} opacity={1} />
      <Cloud position={[4, -2, 40]} speed={0.5} opacity={0.5} />
      <Cloud position={[4, 2, 45]} speed={0.5} opacity={1} />
      <Cloud position={[-4, -2, 50]} speed={0.5} opacity={0.5} />
      <Cloud position={[8, 2, 55]} speed={0.5} opacity={0.75} />
      <Cloud position={[-8, -2, 60]} speed={0.5} opacity={1} />
      <Cloud position={[8, 2, 65]} speed={0.5} opacity={0.5} />
      <Cloud position={[-8, 2, 70]} speed={0.5} opacity={1} />
      <Cloud position={[8, -2, 75]} speed={0.5} opacity={0.5} />
      <Cloud position={[-8, 2, 80]} speed={0.5} opacity={1} />
      <Cloud position={[16, 2, 0]} speed={0.5} opacity={0.5} />
      <Cloud position={[16, -2, 5]} speed={0.5} opacity={1} />
      <Cloud position={[16, 2, 10]} speed={0.5} opacity={0.5} />
      <Cloud position={[16, -2, 15]} speed={0.5} opacity={1} />
    </group>
  );
};
