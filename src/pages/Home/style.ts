import styled from "styled-components";
import { colorChange } from "../../animations";

export const container = styled.div`
  color: var(--white);
  padding: 5vh 10%;
`;

export const box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const img = styled.img`
  width: 45%;
`;

export const p = styled.p`
  font-family: var(--shrikhand);
  font-size: 3rem;
  margin-bottom: 1rem;

  > b {
    font-family: inherit;
    font-weight: 400;
    color: var(--aqua);
    animation: ${colorChange} 10s linear infinite;
  }
`;

export const span = styled.span`
  display: inline-block;
  font-size: 1.6rem;
`;
