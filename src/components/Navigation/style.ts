import styled from "styled-components";

export const di = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;

  text-align: center;
  color: var(--text-color);
  font-size: 1.2rem;

  > .left {
    left: 0;
  }
  > .right {
    right: 0;
  }
`;

export const span = styled.span`
  font-size: 2rem;
  color: var(--second-text-color);

  position: absolute;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:hover {
    cursor: pointer;
    color: var(--black);

    transition: color 0.4s;
  }
`;
