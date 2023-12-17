import styled from "styled-components";

export const header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 5%;
  box-shadow: var(--box-shadow);

  width: 100%;
  background-color: var(--bg-color);
  transition: background-color var(--transition-color), box-shadow var(--transition-theme);

  position: fixed;
  top: 0;
  z-index: 1001;

  @media (max-width: 650px) {
    align-items: flex-end;
  }
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
  font-size: clamp(1.8rem, 2.5vw, 3.5rem);

  > i {
    font-weight: bold;
    color: var(--main-color);
    transition: color var(--transition-color);
  }

  transition: color var(--transition-theme);
`;

export const span = styled.span`
  color: var(--text-color);
  font-size: 1.6rem;

  transition: color var(--transition-theme);
`;

export const a = styled.a`
  position: relative;
  text-transform: capitalize;
  color: var(--text-color);
  font-weight: 600;
  font-size: clamp(1rem, 1.3vw, 2rem);

  transition: color var(--transition-theme);

  &::before {
    content: "";
    width: 100%;
    height: 0.15rem;

    position: absolute;
    bottom: -0.15rem;
    left: 0;

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.4s, background-color var(--transition-color);
  }

  &:hover,
  &.current {
    color: var(--main-color);
    transition: color var(--transition-color);

    &::before {
      background-color: var(--main-color);
      transform: scaleX(1);
    }
  }
`;
