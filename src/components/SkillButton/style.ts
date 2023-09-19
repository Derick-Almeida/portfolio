import styled from "styled-components";

export const span = styled.span`
  color: var(--white);
  border: 2px solid var(--white);
  border-radius: 8px;
  padding: 5px 10px;

  font-size: 1.5rem;
  font-family: var(--days-one);
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.4s;

  &:hover {
    cursor: default;
    -webkit-text-stroke: 1px var(--aqua);
    text-shadow: 0 0 10px var(--aqua);
    box-shadow: 0 0 15px var(--aqua);

    color: var(--black);
    border: 2px dashed var(--aqua);
  }
`;
