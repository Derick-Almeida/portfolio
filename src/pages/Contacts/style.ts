import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const h1 = styled.h1`
  text-align: center;
  color: var(--text-color);
  margin-bottom: 2rem;
`;

export const input = styled.input``;

export const textarea = styled.textarea``;

export const form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  ${input},${textarea} {
    border: var(--border);
    border-radius: 0.3rem;
    width: 100%;

    color: var(--text-color);
    outline: none;

    padding: 0.8rem;
    resize: none;

    transition: border-color 0.6s;

    &::placeholder {
      color: var(--second-text-color);
    }
  }
`;

export const p = styled.p`
  position: absolute;
  top: 0;
  left: 50%;

  opacity: 0;
  transform: translateX(-50%) scale(0.5);

  transition: 0.5s;
`;

export const span = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;

  padding: 0.3rem;
  z-index: 9;

  border: var(--border);
  border-radius: 0.3rem;
  background: transparent;

  color: var(--main-color);
  font-size: 1.1rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: border-color 0.6s, background-color 0.6s, color 0.6s;

  &:hover {
    cursor: pointer;

    background-color: var(--main-color);
    color: var(--white);

    ${p} {
      color: var(--main-color);

      top: -100%;
      transform: translateX(-50%) scale(1);
      opacity: 1;
    }
  }
`;
