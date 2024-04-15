import styled from "styled-components";

export const header = styled.header`
  position: sticky;
  top: 0;
  min-height: 5rem;
  padding: 0 5%;
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const button = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;

  border: none;
  background: transparent;

  color: var(--text-color);
  font-size: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
