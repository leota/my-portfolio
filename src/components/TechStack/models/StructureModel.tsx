import { FC, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export const StructureModel: FC = () => {
  const { scene, cameras } = useGLTF("/assets/structure.glb");
  const { set, camera } = useThree();

  useEffect(() => {
    if (cameras.length > 0) {
      const glbCamera = cameras[0] as any;
      set({ camera: glbCamera });
    }
  }, [cameras, set, camera]);

  return <primitive object={scene} />;
};

useGLTF.preload("/assets/structure.glb");
