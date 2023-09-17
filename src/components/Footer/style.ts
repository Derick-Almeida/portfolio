import styled from "styled-components";
import { colorChange } from "../../animations";

export const footer = styled.footer`
  color: var(--white);
  font-family: var(--shrikhand);
  font-weight: 400;
  font-size: 1.5rem;

  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 10px 20px var(--aqua);
  animation: ${colorChange} 10s linear infinite;
`;
