import styled from "styled-components";
import { colorChange } from "../../animations";

export const container = styled.div`
  padding: 0 10% 5rem 10%;
`;

export const box = styled.div`
  display: grid;
  grid-template-areas:
    ". . image . ."
    ". . image . ."
    ". . image . ."
    ". . image . ."
    ". . . . .";
  grid-gap: 2rem;
`;

export const img = styled.img`
  grid-area: image;
  width: 100%;
  animation: ${colorChange} 10s linear infinite;
`;
