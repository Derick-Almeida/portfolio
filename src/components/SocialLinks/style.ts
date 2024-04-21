import styled from "styled-components";

export const container = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
`;
export const link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: relative;
  text-transform: capitalize;
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: var(--theme-color);
  }

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
