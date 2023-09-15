import { keyframes } from "styled-components";

export const colorChange = keyframes`
    0%{
        filter: hue-rotate(0deg);
    }100% {
        filter: hue-rotate(360deg);
    }
`;
