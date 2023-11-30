import styled from "styled-components";

export const container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  perspective: 250rem;

  > .page-right {
    right: 0;
    transform-style: preserve-3d;
    transform-origin: left;
    transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    background: var(--page-color-right);
  }

  > .page-right.turn {
    transform: rotateY(-180deg);
  }
`;

export const bookPage = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background: var(--page-color-left);
  box-shadow: var(--box-shadow);
  display: flex;

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
