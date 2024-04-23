import { useRef, useEffect, useState, FC, useCallback } from "react";
import * as THREE from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useViewport } from "@/hooks/use-viewport";

type Props = {
  isPlaying: boolean;
};

let glbCamera: THREE.PerspectiveCamera;

export const CameraAnimation: FC<Props> = ({ isPlaying }) => {
  const [play, setPlay] = useState(isPlaying);
  const groupRef = useRef<THREE.Group>(null!);
  const { isMobile, isTablet } = useViewport();
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

  const updateCamera = useCallback(() => {
    if (isMobile) {
      glbCamera.zoom = 0.3;
    } else if (isTablet) {
      glbCamera.zoom = 0.5;
    } else {
      glbCamera.zoom = 0.9;
    }
  }, [isMobile, isTablet]);

  useEffect(() => {
    if (cameras.length > 0) {
      glbCamera = cameras[0] as THREE.PerspectiveCamera;
      glbCamera.aspect = window.innerWidth / window.innerHeight;
      updateCamera();
      glbCamera.updateProjectionMatrix();
      set({ camera: glbCamera });
    }
  }, [cameras, set, updateCamera]);

  useEffect(() => {
    window.addEventListener("resize", updateCamera);

    return () => window.removeEventListener("resize", updateCamera);
  }, [updateCamera]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload("/assets/camera.glb");
