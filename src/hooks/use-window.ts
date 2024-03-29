const breakpoint = 768;

export const useWindow = () => {
  const isMobile = window.innerWidth < breakpoint;
  return { isMobile };
};
