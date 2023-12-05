import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
  }

  > div {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: url("https://i.pinimg.com/originals/03/da/61/03da614443104922590bd774b79b6e33.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
