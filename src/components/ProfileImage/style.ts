import styled from "styled-components";

export const container = styled.div`
  border: var(--border);
  border-width: 0.5rem;
  border-radius: 50%;

  min-width: 12rem;
  max-width: 12rem;
  min-height: 12rem;
  max-height: 12rem;

  position: relative;
  transition: border-color 0.6s;

  &::after {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;

    width: 100%;
    height: 100%;

    border-radius: 50%;

    border: 0.5rem solid transparent;
    border-bottom: 0.5rem solid var(--main-color);

    transform: rotate(-35deg);
    transition: border-color 0.6s;
  }
`;

export const img = styled.img`
  width: 100%;

  position: absolute;
  top: -1.3rem;
  left: 0;

  height: 115%;
  object-fit: cover;
  object-position: top;
  border-bottom-right-radius: 50%;
`;
