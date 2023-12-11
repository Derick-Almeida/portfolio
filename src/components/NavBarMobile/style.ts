import styled from "styled-components";

export const div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

  width: 60%;
  height: 100vh;

  padding: 1rem;
  background: var(--white);

  > img {
    width: 100%;
    height: 50%;
    object-fit: contain;
  }

  transform: translateX(100%);
  transition: transform 0.4s;

  @media (max-width: 325px) {
    width: 100%;
  }
`;

export const box = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;

  display: flex;
  justify-content: right;
  z-index: -1;

  background-color: transparent;
  transition: background-color 0.4s, z-index 0.4s;

  &.open {
    background-color: var(--opaque);
    z-index: 9;

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
`;

export const nav = styled.nav`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1rem;
`;

export const a = styled.a`
  text-transform: capitalize;
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.3rem;

  position: relative;
  z-index: 2;
  width: 100%;

  transition: color var(--transition), letter-spacing 0.4s;
  user-select: none;
  overflow: hidden;

  &::before {
    content: "";
    width: 110%;
    height: 100%;

    position: absolute;
    z-index: -1;
    bottom: 0;
    right: -20%;

    transform: skewX(-70deg) scaleX(0);
    transform-origin: right;
    background-color: var(--main-color);

    transition: transform 0.4s, background-color var(--transition);
  }

  &:hover,
  &.current {
    letter-spacing: 1rem;

    &::before {
      transform: skewX(-70deg) scaleX(1);
    }
  }

  @media (max-width: 430px) {
    &::before {
      width: 105%;
    }
  }
`;
