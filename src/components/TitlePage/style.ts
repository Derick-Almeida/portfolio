import styled from "styled-components";
import { colorChange } from "../../animations";

export const h2 = styled.h2`
  text-transform: uppercase;
  font-family: var(--monoton);
  font-size: 5rem;
  font-weight: 400;

  text-align: center;
  color: var(--aqua);
  opacity: 0.4;

  animation: ${colorChange} 10s linear infinite;
`;
