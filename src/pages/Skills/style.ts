import styled from "styled-components";

export const container = styled.section`
  width: 100%;
  padding: 7rem 5% 2rem 5%;
`;

export const h2 = styled.h2`
  text-align: center;
  color: var(--text-color);
  font-size: 2rem;
  margin-bottom: 5rem;

  transition: color var(--transition-theme);
`;

export const img = styled.img`
  max-width: 100%;
  max-height: calc(6rem * 2);
  object-fit: contain;

  grid-area: zoro;
  user-select: none;
  transform: scale(1.5) translate(25%, -15%);

  @media (max-width: 275px) {
    transform: scale(1.3) translate(0, -15%);
  }
`;

export const ul = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  grid-template:
    "zoro zoro . . . ."
    "zoro zoro . . . ."
    ". . . . . ."
    ". . . . . .";

  @media (max-width: 850px) {
    grid-template:
      "zoro zoro . ."
      "zoro zoro . ."
      ". . . ."
      ". . . ."
      ". . . .";
  }

  @media (max-width: 600px) {
    grid-template:
      "zoro zoro . "
      "zoro zoro . "
      ". . . "
      ". . . "
      ". . . "
      ". . . ";
  }

  @media (max-width: 425px) {
    grid-template:
      "zoro zoro"
      "zoro zoro"
      ". ."
      ". ."
      ". ."
      ". ."
      ". ."
      ". ."
      ". .";
    gap: 1rem;
  }

  @media (max-width: 275px) {
    display: flex;
    flex-direction: column;
  }
`;
