import styled from "styled-components";
import { Props } from ".";

export const container = styled.div<Props>`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: -1;
  opacity: calc(0.2);
`;
