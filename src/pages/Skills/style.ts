import styled from "styled-components";

export const container = styled.div`
  padding: 5rem 10%;
`;

export const box = styled.div`
  margin-top: 5rem;

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
`;
