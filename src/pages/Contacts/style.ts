import styled from "styled-components";
import { colorChange } from "../../animations";

export const container = styled.div`
  color: var(--white);
`;

export const div = styled.div`
  padding: 0 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const img = styled.img`
  width: 50%;
`;

export const ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const li = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
  font-size: 1.5rem;
  border-bottom: 1px solid transparent;

  transition: 0.4s;
  animation: ${colorChange} 10s linear infinite;

  &:hover {
    color: var(--aqua);
    text-shadow: 0 0 10px var(--aqua);
    border-bottom-color: var(--aqua);
  }
`;

export const a = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: inherit;
`;
