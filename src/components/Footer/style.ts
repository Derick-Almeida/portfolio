import styled from "styled-components";

export const footer = styled.footer`
  width: 100%;
  height: 3rem;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  background-color: var(--main-color);

  transition: background-color var(--transition-color);
`;

export const p = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--white);
  font-family: var(--days-one);
`;
