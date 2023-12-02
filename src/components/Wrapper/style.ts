import styled from "styled-components";
import { showAnimate } from "../../animations/style";

export const container = styled.div`
  width: calc((90 * 100vw) / 100);
  height: calc((90 * 100vh) / 100);

  position: relative;
  perspective: 250rem;
  padding: 2rem;

  animation: ${showAnimate} 4s forwards;

  > .cover-left {
    z-index: -1;
  }

  > .cover-right {
    z-index: 100;
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  > .cover-right.turn {
    transform: rotateY(180deg);
  }
`;

export const cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 50%;
  height: 100%;

  box-shadow: var(--box-shadow);
  background: var(--main-color);

  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;

  transform-origin: right;
  transition: background-color 0.6s;
`;
