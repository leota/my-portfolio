import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';


type Props = {
  isPlaying: boolean;
  restartAnimation: boolean; 
  onAnimationFinished?: () => void;
};

export const PizzaItemsModel: FC<Props> = ({ isPlaying, restartAnimation, onAnimationFinished }) => {
  const [play, setPlay] = useState(isPlaying);
  const groupRef = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF('/assets/pizza-items.glb');
  const { actions, mixer } = useAnimations(animations, groupRef);

  useEffect(() => {
    setPlay(isPlaying);
  }, [isPlaying]);

  const handleAnimationFinished = useCallback(() => {
    if (onAnimationFinished) {
      onAnimationFinished();
    }
  }, [onAnimationFinished]);

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

    mixer.addEventListener('finished', handleAnimationFinished);

    return () => {
      mixer.removeEventListener('finished', handleAnimationFinished);
    };
  }, [actions, play, mixer, handleAnimationFinished]);

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

useGLTF.preload('/assets/pizza-items.glb');
