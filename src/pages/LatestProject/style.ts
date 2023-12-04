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

export const h2 = styled.h2`
  font-size: 1.5rem;
  color: var(--text-color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0.5rem 0 1rem 0;
`;

export const p = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--text-color);
`;

export const a = styled.a`
  color: var(--main-color);

  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;

  transition: color 0.6s;
`;

export const img = styled.img`
  border: var(--border);
  border-radius: 0.5rem;

  width: 100%;
  height: 12rem;
  object-fit: cover;
  object-position: top;
  transition: border-color 0.6s;
`;

export const buttonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;
