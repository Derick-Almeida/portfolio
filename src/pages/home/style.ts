import styled from "styled-components";

export const main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  min-height: 75vh;
  max-width: 100%;
  overflow-x: hidden;
  padding: 2rem 0;

  font-size: calc(1.5vw + 2vh + 1vmin);
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: calc(1.5vw + 1vh + 1vmin);
    flex-direction: row;
    padding: 8rem 12%;
    gap: 0;
  }
`;

export const container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media (min-width: 425px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const img = styled.img`
  width: 60%;
  object-fit: contain;
  user-select: none;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
