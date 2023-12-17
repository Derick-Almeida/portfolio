import styled from "styled-components";
import { rotate } from "../../animations";

export const container = styled.div`
  display: flex;
  gap: 1.5rem;

  position: fixed;
  z-index: 10;
  right: 0;
  top: 6.5rem;

  transform: translateX(75%);
  transition: transform 0.4s;

  &.open {
    transform: translateX(-25%);
  }

  @media (max-width: 430px) {
    &.open {
      transform: translateX(-10%);
    }
  }
`;

export const icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1vw, 1rem);
`;

export const span = styled.span`
  cursor: pointer;
  background-color: var(--bg-color);
  box-shadow: var(--box-shadow);
  color: var(--text-color);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: clamp(1rem, 1.5vw, 1.5rem);
  padding: clamp(0.5rem, 0.8vw, 1rem);
  border-radius: 0.5rem;

  transition: color var(--transition-theme), background-color var(--transition-theme);

  &.config > svg {
    animation: ${rotate} 3s linear infinite;
  }
`;

export const colors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  box-shadow: var(--box-shadow);
  background-color: var(--bg-color);
  border-radius: 0.5rem;
  padding: clamp(0.5rem, 0.8vw, 1rem);

  transition: box-shadow var(--transition-theme), background-color var(--transition-theme);
`;

export const p = styled.p`
  font-size: clamp(1.1rem, 1.5vw, 1.5rem);
  font-weight: 400;
  color: var(--text-color);

  transition: color var(--transition-theme);
`;

export const ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.5rem, 0.8vw, 1rem);
  width: clamp(8rem, 11vw, 10rem);
`;

export const li = styled.li`
  border: var(--border);
  border-color: var(--text-color);
  border-radius: 50%;
  cursor: pointer;

  width: clamp(1.5rem, 2vw, 2.5rem);
  height: clamp(1.5rem, 2vw, 2.5rem);

  transition: border-color var(--transition-theme);
`;
