import styled from "styled-components";

export const container = styled.section`
  width: 100%;
  padding: 7rem 5%;
`;

export const h2 = styled.h2`
  text-align: center;
  color: var(--text-color);
  font-size: clamp(2rem, 3vw, 4rem);
  margin-bottom: 3rem;

  transition: color var(--transition-theme);
`;

export const ul = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 850px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;
