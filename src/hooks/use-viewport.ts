const sm = 768;
const lg = 1024;
const xl = 1440;

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
