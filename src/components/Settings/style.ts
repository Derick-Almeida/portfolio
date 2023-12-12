import styled from "styled-components";

export const container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;

  position: fixed;
  z-index: 10;
  right: 0;
  top: 15%;

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
  gap: 0.5rem;
`;

export const span = styled.span`
  cursor: pointer;
  box-shadow: var(--box-shadow);
  color: var(--text-color);

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;

  transition: color var(--transition-theme), background-color var(--transition-theme);
`;

export const colors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
  padding: 0.5rem;

  transition: box-shadow var(--transition-theme);
`;

export const p = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-color);

  transition: color var(--transition-theme);
`;

export const ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const li = styled.li`
  border: var(--border);
  border-radius: 50%;
  cursor: pointer;

  width: 1.5rem;
  height: 1.5rem;

  transform: border-color var(--transition-color);
`;
