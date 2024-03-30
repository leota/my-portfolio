const xs = 0;
const sm = 640;
const md = 768;
const lg = 1024;
const xl = 1440;
const xxl = 1920;

export const useWindow = () => {
  const isMobile = window.innerWidth < sm;
  const isTablet = window.innerWidth >= sm && window.innerWidth <= md;
  const isDesktop = window.innerWidth > md && window.innerWidth < lg;
  const isLargeDesktop = window.innerWidth >= lg;
  const isXLargeDesktop = window.innerWidth >= xl;
  const isXXLargeDesktop = window.innerWidth >= xxl;

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isXLargeDesktop,
    isXXLargeDesktop,
  };
};
