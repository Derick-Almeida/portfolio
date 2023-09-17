import styled from "styled-components";
import { colorChange } from "../../animations";

export const container = styled.div`
  padding: 0 10% 10rem 10%;
`;

export const box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`;

export const div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
`;

export const img = styled.img`
  width: 60%;
  animation: ${colorChange} 10s linear infinite;
`;
