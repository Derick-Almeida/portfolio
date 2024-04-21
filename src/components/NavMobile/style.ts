import styled, { css } from "styled-components";

interface Props {
  $nav: string;
}

export const ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2.5rem;
`;

export const button = styled.button`
  position: absolute;
  right: 2rem;
  top: 1.5rem;

  border: none;
  background: transparent;

  color: var(--text-color);
  font-size: 2rem;
`;

export const link = styled.a`
  text-transform: uppercase;
  position: relative;
  font-size: 2rem;
  font-weight: bold;

  transform-origin: right;
  transition: transform 0.3s;

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
`;

export const nav = styled.nav<Props>`
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: 9;

  height: 100vh;
  background-color: var(--bg-color);

  transition: width 0.3s;

  ${({ $nav }) => {
    switch ($nav) {
      case "open":
        return css`
          width: 100%;

          & ${link} {
            transform: translateX(0);
          }
        `;
      case "close":
        return css`
          width: 0%;

          & ${link} {
            transform: translateX(100%);
          }
        `;
    }
  }}

  @media (min-width: 768px) {
    display: none;
  }
`;
