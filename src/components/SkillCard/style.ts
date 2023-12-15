import styled from "styled-components";

export const p = styled.p`
  font-family: var(--days-one);
  font-weight: 400;
  font-size: 1rem;
`;

export const li = styled.li`
  width: 8rem;
  height: 6rem;

  border: var(--border);
  color: var(--main-color);
  background-color: var(--bg-color);

  border-radius: 0.5rem;
  text-align: center;
  font-size: 2.5rem;

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
