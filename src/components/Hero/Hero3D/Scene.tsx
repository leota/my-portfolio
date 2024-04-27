import { FC, PropsWithChildren } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Scene: FC<PropsWithChildren> = ({ children }) => (
  <Canvas
    shadows
    dpr={[1, 2]}
    camera={{ position: [16, 10, 30], fov: 42 }}
    gl={{ antialias: true, alpha: true }}
  >
    <Environment preset="lobby" />
    <OrbitControls enablePan={false} />
    {children}
  </Canvas>
);
