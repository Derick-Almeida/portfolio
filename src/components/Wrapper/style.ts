import styled from "styled-components";

export const container = styled.div`
  position: relative;
  width: calc((90 * 100vw) / 100);
  height: calc((90 * 100vh) / 100);
  padding: 2rem;

  > .cover-left {
    z-index: -1;
  }

  > .cover-right.turn {
    transform: rotate(180deg);
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
