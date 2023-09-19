import styled from "styled-components";

interface CardStyleProps {
  $img: string;
}

export const li = styled.li<CardStyleProps>`
  border: 2px solid var(--white);
  border-radius: 8px;
  height: 35vh;
  width: 48%;

  background: url(${(props) => props.$img}) top no-repeat;
  background-size: cover;

  position: relative;
  overflow: hidden;
`;

export const div = styled.div`
  background-color: var(--opaque);
  box-shadow: 0 0 25px 25px var(--opaque);

  position: absolute;
  bottom: 0;

  min-width: 100%;
  min-height: 50%;

  text-align: center;
`;

export const h2 = styled.h2`
  color: var(--white);
  font-size: 2rem;
  font-family: var(--days-one);
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

export const buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
