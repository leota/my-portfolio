import React, { useRef, useEffect } from "react";
import { useGLTF, Reflector } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";
import { MeshReflectorMaterialProps } from "@react-three/drei/materials/MeshReflectorMaterial";

export const Background = (props: GroupProps) => {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/assets/waving-animation.glb");
  const mixerRef = useRef<AnimationMixer>(); // To hold the animation mixer

  useEffect(() => {
    // Create an animation mixer to play the animation
    mixerRef.current = new AnimationMixer(scene);
    const action = mixerRef.current.clipAction(animations[0]); // Assuming you want to play the first animation
    action.play();

    return () => {
      action.stop();
    };
  }, [animations, scene]);

  useFrame((state, delta) => {
    // Update the mixer on each frame
    mixerRef?.current?.update(delta);
  });

  const ReflectorMaterial = (materialProps: MeshReflectorMaterialProps) => (
    <meshStandardMaterial {...materialProps} />
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <Reflector
        resolution={1024}
        receiveShadow
        mirror={0}
        mixBlur={1}
        mixStrength={0.3}
        depthScale={1}
        minDepthThreshold={0.8}
        maxDepthThreshold={1}
        position={[0, 0, 8]}
        scale={[2, 2, 1]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        args={[70, 70]}
      >
        {(_Material, props) => (
          <ReflectorMaterial
            metalness={0.25}
            color="#e2b6ff"
            roughness={1}
            {...props}
          />
        )}
      </Reflector>
      <primitive
        object={scene}
        scale={6}
        rotation={[0, 59, 0]}
        position={[-10, 0, -15]}
      />
    </group>
  );
};
