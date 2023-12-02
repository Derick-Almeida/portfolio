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
  display: flex;
  flex-direction: column;

  max-height: 80%;
  padding: 0 1rem 0 2rem;

  position: relative;
  overflow: hidden auto;
`;
