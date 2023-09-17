import styled from "styled-components";
import tubes from "../../assets/tubes.svg";
import { colorChange } from "../../animations";

export const div = styled.div`
  margin: 3rem 0;
  min-width: 100%;
  min-height: 20rem;
  background: url(${tubes}) no-repeat top fixed;
  background-size: cover;
  animation: ${colorChange} 10s linear infinite;
`;
