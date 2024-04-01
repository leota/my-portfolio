import { useThree } from "@react-three/fiber";

const sm = 768; // Start of tablet screens
const lg = 1024; // Start of desktop screens
const xl = 1440; // Start of large desktop screens

export const useViewport = () => {
  const { viewport, size } = useThree();
  const responsiveRatio = viewport.width / 12;

  const isMobile = size.width < sm;
  const isTablet = size.width >= sm && size.width < lg;
  const isDesktop = size.width >= lg && size.width < xl;
  const isLargeDesktop = size.width >= xl;

  return {
    size,
    responsiveRatio,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
};
