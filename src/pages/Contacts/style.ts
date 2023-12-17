import styled from "styled-components";
import { float, shadowPulse } from "../../animations";

export const container = styled.section`
  width: 100%;
  padding: 5rem 5% 3rem 5%;
  overflow: hidden;

  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const div = styled.div`
  position: relative;
  width: 50%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const h2 = styled.h2`
  text-align: center;
  color: var(--text-color);
  font-size: clamp(2rem, 3vw, 4rem);
  margin-bottom: 1rem;

  transition: color var(--transition-theme);
`;

export const form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  > input,
  textarea {
    border-radius: 0.3rem;
    border: var(--border);

    caret-color: var(--main-color);

    padding: clamp(0.8rem, 1.3vw, 1.5rem) clamp(1rem, 1.5vw, 2rem);
    outline: none;
    resize: none;

    font-size: clamp(1rem, 1.5vw, 2rem);

    color: var(--text-color);
    background-color: var(--bg-color);

    transition: border-color var(--transition-color), background-color var(--transition-theme),
      color var(--transition-theme);
  }
`;

export const img = styled.img`
  width: 90%;
  object-fit: contain;
  user-select: none;

  filter: drop-shadow(2px 2px 2px var(--main-color)) drop-shadow(1px 1px var(--text-color));
  transition: filter var(--transition-color);

  animation: ${float} 3s linear infinite;
`;

export const shadow = styled.span`
  position: absolute;
  bottom: 5%;
  right: 35%;

  width: 20%;
  height: 1rem;

  border-radius: 50%;
  background: var(--main-color);

  transition: background-color var(--transition-color);

  animation: ${shadowPulse} 3s linear infinite;

  @media (max-width: 700px) {
    bottom: 0;
  }
`;
