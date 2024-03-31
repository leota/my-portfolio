import { ScrollControlsState as DreiScrollControlsState } from "@react-three/drei";

// scroll property is missing from DreiScrollControlsState
export type ScrollControlsState = DreiScrollControlsState & {
  scroll: {
    current: number;
  };
};
