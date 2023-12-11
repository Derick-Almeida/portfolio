import styled from "styled-components";

export const header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 5%;
  box-shadow: var(--box-shadow);

  width: 100%;
  position: fixed;
  z-index: 1001;
`;

export const nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const h1 = styled.h1`
  color: var(--text-color);
  font-family: var(--shrikhand);
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.5rem;

  > i {
    font-weight: bold;
    color: var(--main-color);
    transition: inherit;
  }

  transition: color var(--transition);
`;

export const span = styled.span`
  color: var(--text-color);
  font-size: 1.6rem;
`;

export const a = styled.a`
  position: relative;
  text-transform: capitalize;
  color: var(--text-color);
  font-weight: 600;

  transition: color var(--transition);

  &::before {
    content: "";
    width: 100%;
    height: 0.1rem;

    position: absolute;
    bottom: -0.2rem;
    left: 0;

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.4s, background-color var(--transition);
  }

  &:hover,
  &.current {
    color: var(--main-color);

    &::before {
      background-color: var(--main-color);
      transform: scaleX(1);
    }
  }
`;
