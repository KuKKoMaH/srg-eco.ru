import Breakpoints from 'breakpoints-js';

export const BREAKPOINT_SM = 768;
export const BREAKPOINT_MD = 992;
export const BREAKPOINT_LG = 1200;


Breakpoints({
  sm: {
    min: 0,
    max: BREAKPOINT_SM - 1,
  },
  lg: {
    min: BREAKPOINT_SM,
    max: Infinity,
  },
});
