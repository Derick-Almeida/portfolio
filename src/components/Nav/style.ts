import styled, { css } from "styled-components";

interface Props {
  nav: boolean;
}

export const nav = styled.nav<Props>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  background-color: var(--bg-color);

  transform: translateX(100%);
  transition: transform 0.3s;

  ${({ nav }) =>
    nav &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: 768px) {
    position: relative;
    width: inherit;
    height: inherit;
    background-color: transparent;

    transform: translateX(0);
    transition: none;
  }
`;

export const ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2.5rem;

  @media (min-width: 768px) {
    justify-content: end;
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const button = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;

  border: none;
  background: transparent;

  color: var(--text-color);
  font-size: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const link = styled.a`
  text-transform: uppercase;
  position: relative;
  font-size: 2rem;
  font-weight: bold;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 0;

    width: 100%;
    border-bottom: 0.2rem solid var(--theme-color);

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
