import { useThree } from "@react-three/fiber";

export const useRatio = () => {
  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;

  return { responsiveRatio };
};
