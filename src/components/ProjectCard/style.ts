import styled from "styled-components";

export const div = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  height: 100%;
  padding: 0 10%;

  background: linear-gradient(0deg, var(--main-color), transparent);
  transform: translateY(100%);
  transition: transform 0.4s;
`;

export const img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const li = styled.li`
  overflow: hidden;
  width: 100%;
  height: clamp(12rem, 16vw, 20rem);

  position: relative;
  border-radius: 0.5rem;
  text-align: center;
  color: var(--white);

  box-shadow: var(--box-shadow);

  transition: box-shadow var(--transition-theme);

  &:hover {
    ${div} {
      transform: translateY(0%);
    }

    ${img} {
      filter: brightness(0.2);
      transition: filter 0.4s;
    }
  }
`;

export const h3 = styled.h3`
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  font-family: var(--days-one);
  white-space: nowrap;
`;

export const p = styled.p`
  font-size: clamp(1rem, 1.3vw, 1.5rem);
  font-weight: 600;
`;

export const a = styled.a`
  background-color: var(--white);
  color: var(--black);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: clamp(0.5rem, 1vw, 1rem);
  font-size: clamp(1rem, 1.3vw, 1.5rem);
  border-radius: 50%;

  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background-color: var(--main-color);
    color: var(--white);
  }
`;
