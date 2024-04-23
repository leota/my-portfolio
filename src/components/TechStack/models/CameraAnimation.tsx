import { useRef, useEffect, useState, FC } from "react";
import * as THREE from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

type Props = {
  isPlaying: boolean;
};

export const CameraAnimation: FC<Props> = ({ isPlaying }) => {
  const [play, setPlay] = useState(isPlaying);
  const groupRef = useRef<THREE.Group>(null!);
  const { scene, cameras, animations } = useGLTF("/assets/camera.glb");
  const { set } = useThree();
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    setPlay(isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    const actionNames = Object.keys(actions);
    if (actionNames.length > 0 && play) {
      actionNames.forEach((name) => {
        const action = actions[name];
        if (action) {
          action.clampWhenFinished = true;
          action.setLoop(THREE.LoopOnce, 1);
          action.play();
        }
      });
    }
  }, [actions, play]);

  useEffect(() => {
    if (cameras.length > 0) {
      const glbCamera = cameras[0] as THREE.PerspectiveCamera;
      glbCamera.aspect = window.innerWidth / window.innerHeight;
      // glbCamera.zoom = 0.3;
      glbCamera.updateProjectionMatrix();
      set({ camera: glbCamera });
    }
  }, [cameras, set]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload("/assets/camera.glb");
