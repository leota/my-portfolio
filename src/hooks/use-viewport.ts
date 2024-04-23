import { useThree } from "@react-three/fiber";

const sm = 768; // Start of tablet screens
const lg = 1024; // Start of desktop screens
const xl = 1440; // Start of large desktop screens

export const useViewport = () => {
  const width = window.innerWidth;

  const isMobile = width < sm;
  const isTablet = width >= sm && width < lg;
  const isDesktop = width >= lg && width < xl;
  const isLargeDesktop = width >= xl;

  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
};
