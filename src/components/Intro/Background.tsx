import { FC, useRef } from "react";
import { Reflector } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { MeshReflectorMaterialProps } from "@react-three/drei/materials/MeshReflectorMaterial";

const ReflectorMaterial = (materialProps: MeshReflectorMaterialProps) => (
  <meshStandardMaterial {...materialProps} />
);

export const Background: FC<GroupProps> = (props: GroupProps) => {
  const group = useRef(null);

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
    </group>
  );
};
