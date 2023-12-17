import styled from "styled-components";

export const container = styled.section`
  width: 100%;
  padding: 7rem 5% 2rem 5%;
`;

export const h2 = styled.h2`
  text-align: center;
  color: var(--text-color);
  font-size: clamp(2rem, 3vw, 4rem);
  margin-bottom: 5rem;

  transition: color var(--transition-theme);
`;

export const img = styled.img`
  max-width: 100%;
  max-height: calc(clamp(6rem, 9vw, 10rem) * 2);
  object-fit: contain;

  grid-area: zoro;
  user-select: none;
  transform: scale(1.5) translate(25%, -15%);

  filter: drop-shadow(2px 0px 1px var(--main-color)) drop-shadow(1px 1px var(--text-color));
  transition: filter var(--transition-color);

  @media (min-width: 1200px) {
    transform: scale(1.3) translate(25%, -10%);
  }

  @media (max-width: 275px) {
    transform: scale(1.3) translate(0, -15%);
  }
`;

export const ul = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 1rem);

  grid-template:
    "zoro zoro . . . ."
    "zoro zoro . . . ."
    ". . . . . ."
    ". . . . . .";

  @media (min-width: 1200px) {
    grid-template:
      "zoro zoro . . . . . ."
      "zoro zoro . . . . . ."
      ". . . . . . . .";
  }

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
