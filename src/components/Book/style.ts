import styled from "styled-components";

export const container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  perspective: 250rem;
  display: none;

  > .page-right {
    right: 0;
    background: var(--page-color-right);

    transform-origin: left;
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  > .page-right.turn {
    transform: rotateY(-180deg);
  }
`;

export const bookPage = styled.div`
  display: flex;
  position: absolute;
  width: 50%;
  height: 100%;

  background: var(--page-color-left);
  box-shadow: var(--box-shadow);

  > .page-front {
    transform: rotateY(0deg) translateZ(1px);
  }
  > .page-back {
    transform: rotateY(180deg) translateZ(1px);
  }
`;

export const page = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 1.5rem 2rem;
`;

export const div = styled.div``;
