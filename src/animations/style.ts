import { keyframes } from "styled-components";

export const showAnimate = keyframes`
  0%,20%{
    opacity: 0;
    transform: rotate(-20deg) translateX(25vw);
  }
  20%,50%{
    opacity: 1;
    transform: rotate(0deg) translateX(25vw);
  }
  50%,100%{
    transform: rotate(0deg) translateX(0);
  }
`;
