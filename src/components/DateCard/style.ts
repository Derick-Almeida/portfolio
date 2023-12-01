import styled from "styled-components";

export const card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-bottom: 1.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1.35rem;

    width: 0.125rem;
    height: 100%;

    background-color: var(--main-color);

    transition: background-color 0.6s;
  }
`;

export const span = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: relative;
  color: var(--main-color);
  font-size: 1rem;

  transition: color 0.6s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -2rem;

    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;

    background-color: var(--main-color);

    transition: background-color 0.6s;
  }
`;

export const h3 = styled.h3`
  color: var(--text-color);
`;

export const p = styled.p`
  color: var(--second-text-color);
`;
