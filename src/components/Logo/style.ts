import styled from "styled-components";

export const h1 = styled.h1`
  font-weight: bold;
  font-style: italic;
  text-transform: capitalize;
  font-size: 2rem;

  > i {
    color: var(--theme-color);
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
