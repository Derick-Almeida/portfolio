import styled from "styled-components";
import { rotate } from "../../animations";

export const container = styled.div`
  border: var(--border);
  border-width: 0.7rem;
  border-radius: 50%;

  min-width: 14rem;
  max-width: 14rem;
  min-height: 14rem;
  max-height: 14rem;

  position: relative;
  user-select: none;
  transition: border-color var(--transition-color);

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;

    width: 100%;
    height: 100%;

    border-radius: 50%;

    border: 0.6rem solid transparent;
    border-bottom: 0.5rem solid var(--main-color);

    transform: rotate(-35deg);
    transition: border-color var(--transition-color);
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;

    width: 140%;
    height: 140%;

    border-radius: 50%;

    border: 0.6rem solid transparent;
    border-top-color: var(--main-color);
    border-bottom-color: var(--main-color);

    transition: border-color var(--transition-color);

    animation: ${rotate} 20s linear infinite;
  }

  @media (max-width: 900px) {
    min-width: 12rem;
    max-width: 12rem;
    min-height: 12rem;
    max-height: 12rem;
  }
  @media (max-width: 320px) {
    min-width: 10rem;
    max-width: 10rem;
    min-height: 10rem;
    max-height: 10rem;
  }
`;

export const img = styled.img`
  width: 100%;

  position: absolute;
  top: -1.5rem;
  left: 0;

  height: 115%;
  object-fit: cover;
  object-position: top;
  border-bottom-right-radius: 50%;

  filter: drop-shadow(3px 0px 1px var(--main-color)) drop-shadow(1px 1px var(--text-color));
  transition: filter var(--transition-color);

  @media (max-width: 900px) {
    top: -1.3rem;
  }
`;
