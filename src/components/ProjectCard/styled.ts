import styled from "styled-components";

export const div = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  > p {
    color: var(--white);
    font-weight: 600;
    font-size: 1.2rem;

    transform: scale(0);
    transform-origin: center;

    text-shadow: 0 0 2px var(--black), 0 0 4px var(--black), 0 0 8px var(--black),
      0 0 16px var(--black);
  }
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

      > p {
        transform: scale(1);
        transition: transform 0.4s;
      }
    }

    > a img {
      transform: scale(1.1);
      filter: blur(2px);
      transition: transform 0.6s, filter 0.4s;
    }
  }

  &:not(:hover) {
    ${div} {
      background-color: transparent;
      transition: background-color 0.6s;

      > p {
        transform: scale(0);
        transition: transform 0.6s;
      }
    }

    > a img {
      transform: scale(1);
      filter: blur(0);
      transition: transform 0.6s, filter 0.6s;
    }
  }

  > a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
