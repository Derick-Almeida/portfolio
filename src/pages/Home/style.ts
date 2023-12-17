import styled from "styled-components";

export const container = styled.section`
  width: 100%;
  height: clamp(35rem, 85vh, 45rem);
  padding: 10rem 5% 5rem 5%;
  overflow: hidden;

  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    gap: 3rem;
    height: auto;
  }
`;

export const div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 3vh, 2rem);

  max-width: 60%;
  min-width: 40%;

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const p = styled.p`
  color: var(--text-color);
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: 400;
  font-weight: 600;
  width: 100%;

  transition: color var(--transition-theme);

  &.sub {
    color: var(--second-text-color);
    font-size: clamp(1.2rem, 1.5vw, 2rem);
    font-weight: 400;
  }
`;

export const span = styled.span`
  color: var(--main-color);
  font-family: var(--days-one);
  font-weight: 400;

  transition: color var(--transition-color);
`;

export const buttonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 1.5rem;

  margin-top: 1rem;
`;
