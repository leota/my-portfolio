import { FC, useEffect, useRef, useState } from 'react';

import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';


type Props = {
  isPlaying: boolean;
  restartAnimation: boolean;
};

export const EnvelopeModel: FC<Props> = ({ isPlaying, restartAnimation }) => {
  const [play, setPlay] = useState(isPlaying);
  const groupRef = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF('/assets/envelope.glb');
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
    if (restartAnimation) {
      Object.values(actions).forEach(action => {
        action?.stop();
      });
    }
  }, [restartAnimation, actions]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload('/assets/envelope.glb');
