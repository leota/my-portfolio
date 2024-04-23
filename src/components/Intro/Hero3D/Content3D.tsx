import { FC } from "react";

import { RoomModel } from "./RoomModel";
import { TypingModel } from "./TypingModel";

export const Content3D: FC = () => {
  return (
    <group rotation={[0, -30, 0]} scale={0.7}>
      <RoomModel />
      <TypingModel />
    </group>
  );
};
