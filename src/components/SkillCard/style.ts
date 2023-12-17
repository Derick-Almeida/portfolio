import styled from "styled-components";

export const p = styled.p`
  font-family: var(--days-one);
  font-weight: 400;
  font-size: clamp(1rem, 1.3vw, 2rem);
`;

export const li = styled.li`
  width: clamp(8rem, 10vw, 12rem);
  height: clamp(6rem, 9vw, 10rem);

  border: var(--border);
  color: var(--main-color);
  background-color: var(--bg-color);

  border-radius: 0.5rem;
  text-align: center;
  font-size: clamp(2.5rem, 3.5vw, 4rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  transition: background-color var(--transition-theme), border-color var(--transition-color),
    color var(--transition-color);

  &:hover {
    background-color: var(--main-color);
    color: var(--bg-color);

    transition: background-color 0s, color 0s;
  }
`;
