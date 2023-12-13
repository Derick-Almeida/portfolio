import styled from "styled-components";

export const container = styled.section`
  width: 100%;
  padding: 10rem 5% 5rem 5%;
  overflow: hidden;

  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;

export const div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  max-width: 60%;
  min-width: 40%;

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const p = styled.p`
  color: var(--text-color);
  font-weight: 400;
  font-size: 1.5rem;
  font-weight: 600;

  transition: color var(--transition-theme);

  &.sub {
    color: var(--second-text-color);
    font-size: 1.2em;
    font-weight: 400;
  }
`;

export const span = styled.span`
  color: var(--main-color);
  font-family: var(--days-one);
  font-weight: 400;

  transition: color var(--transition-color);
`;

export const buttonsContainer = styled.div``;
