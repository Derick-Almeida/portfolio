import styled from "styled-components";

export const header = styled.header`
  color: var(--white);
  text-transform: capitalize;
  font-size: 1.6rem;
  padding: 2vh 10%;

  box-shadow: 0 -10px 25px var(--aqua);
`;

export const ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const li = styled.li`
  font-family: var(--shrikhand);
  font-style: italic;
  font-weight: bold;

  -webkit-text-stroke: 1px var(--black);

  transition: 0.4s;

  &:hover {
    cursor: pointer;

    text-shadow: 0 0 15px var(--aqua), 0 0 5px var(--aqua);
    -webkit-text-stroke: 1px var(--aqua);
    color: var(--black);
  }
`;
