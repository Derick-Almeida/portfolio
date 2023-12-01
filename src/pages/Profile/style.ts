import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 100%;

  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const h1 = styled.h1`
  color: var(--text-color);
  text-align: center;
  font-size: 3rem;
`;

export const h3 = styled.h3`
  color: var(--main-color);
  font-size: 1.5rem;

  transition: color 0.6s;
`;

export const p = styled.p`
  margin: 1rem auto;
  color: var(--second-text-color);
  font-size: 1.2rem;

  > i {
    font-style: normal;
    color: var(--main-color);
    font-weight: 600;
    transition: color 0.6s;
  }
`;

export const buttonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;
