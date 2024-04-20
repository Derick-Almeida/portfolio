import styled from "styled-components";

export const nav = styled.nav`
  display: none;
  background-color: transparent;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;
  gap: 1.5rem;
`;

export const link = styled.a`
  text-transform: uppercase;
  position: relative;
  font-size: 1rem;
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
`;
