import styled from "styled-components";

export const footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10vh;
  background-color: var(--bg-footer);

  font-size: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
