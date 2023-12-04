import styled from "styled-components";

export const div = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;

  background-color: transparent;
`;

export const a = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  text-shadow: 0 0 2px var(--black), 0 0 4px var(--black), 0 0 8px var(--black),
    0 0 16px var(--black);

  transform-origin: center;
`;

export const p = styled.p`
  color: var(--white);
  font-weight: 600;
  font-size: 1.2rem;
`;

export const span = styled.span`
  display: flex;
  gap: 0.2rem;
  align-items: center;

  color: var(--main-color);
  font-size: 0.8rem;

  transition: color 0.6s;
`;

export const img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: top;
`;

export const card = styled.li`
  width: 100%;
  height: calc(10vw + 1vmin);

  border: var(--border);
  border-radius: 0.5rem;

  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    ${div} {
      background-color: var(--opaque);
      transition: background-color 0.4s;

      ${a} {
        transform: scale(1);
        transition: transform 0.4s;
      }
    }

    ${img} {
      transform: scale(1.1);
      filter: blur(2px);
      transition: transform 0.6s, filter 0.4s;
    }
  }

  &:not(:hover) {
    ${div} {
      background-color: transparent;
      transition: background-color 0.6s;

      ${a} {
        transform: scale(0);
        transition: transform 0.6s;
      }
    }

    ${img} {
      transform: scale(1);
      filter: blur(0);
      transition: transform 0.6s, filter 0.6s;
    }
  }
`;
