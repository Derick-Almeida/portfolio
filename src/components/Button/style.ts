import styled from "styled-components";

export const button = styled.button`
  background-color: var(--grey);

  border-radius: 8px;
  border: 2px solid var(--white);
  padding: 5px 10px;

  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    min-width: 50px;
    min-height: 15px;
    background-color: var(--aqua);

    position: absolute;
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.4s;
  }

  &:hover::before {
    transform: scale(4);
  }
`;

export const p = styled.p`
  color: var(--black);
  font-size: 1.2rem;
  font-weight: 400;
  font-family: var(--days-one);

  position: relative;
  z-index: 9;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;
