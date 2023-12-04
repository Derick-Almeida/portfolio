import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const h1 = styled.h1`
  text-align: center;
  color: var(--text-color);
  margin-bottom: 2rem;
`;

export const ul = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;

  max-height: 80%;

  overflow: hidden auto;
`;
