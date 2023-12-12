import styled from "styled-components";

export const div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

  width: 60%;
  height: 100vh;

  padding: 1rem;
  background: var(--bg-color);

  > img {
    width: 100%;
    height: 50%;
    object-fit: contain;
  }

  transform: translateX(100%);
  transition: transform 0.4s, background-color var(--transition-theme);

  @media (max-width: 325px) {
    width: 100%;
  }
`;

export const box = styled.div`
  width: 0%;
  height: 100vh;

  position: fixed;
  z-index: -1;
  right: 0;
  top: 0;

  display: flex;
  justify-content: right;

  background-color: transparent;
  transition: background-color 0.4s, z-index 0.4s, width 0.4s;

  &.open {
    width: 100%;
    z-index: 9;
    background-color: var(--opaque);

    > ${div} {
      transform: translateX(0);
    }
  }
`;

export const span = styled.span`
  width: 100%;
  text-align: end;

  color: var(--text-color);
  font-size: 2rem;

  transition: color var(--transition-theme);
`;

export const nav = styled.nav`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1rem;
`;

export const a = styled.a`
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.3rem;

  position: relative;
  z-index: 2;
  width: 100%;

  transition: color var(--transition-color), letter-spacing 0.4s;
  user-select: none;
  overflow: hidden;

  &::before {
    content: attr(content);
    width: 100%;
    height: 100%;

    position: absolute;
    bottom: 0;
    left: 0;

    clip-path: polygon(35% 0, 100% 0%, 100% 100%, 0 100%);

    transform: scaleX(0);
    transform-origin: right;
    background-color: var(--main-color);
    color: var(--white);

    transition: transform 0.4s, background-color var(--transition-color);
  }

  &:hover,
  &.current {
    letter-spacing: 1rem;

    &::before {
      transform: scaleX(1);
      clip-path: polygon(25% 0, 100% 0%, 100% 100%, 0 100%);
    }
  }

  @media (max-width: 430px) {
    &::before {
      width: 105%;
    }
  }
`;
