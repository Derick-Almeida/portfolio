import styled from "styled-components";

export const p = styled.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 600;

  transition: color 0.6s;
`;

export const li = styled.li`
  color: var(--main-color);
  border: var(--border);
  border-radius: 0.3rem;

  font-size: 2.5rem;
  padding: 0.5rem;

  width: 7rem;
  height: 6rem;
  transition: color 0.6s, border-color 0.6s, background-color 0.6s;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  &:hover {
    color: var(--white);
    background-color: var(--main-color);
    transition: color 0s, background-color 0s;

    ${p} {
      color: var(--white);
      transition: color 0s;
    }
  }
`;
