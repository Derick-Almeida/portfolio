import { keyframes } from "styled-components";

export const rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const float = keyframes`
    0%,100%{
        transform: translateY(2%);
    }
    50%{
        transform: translateY(-2%);
    }
`;

export const shadowPulse = keyframes`
    0%,100%{
        transform: scale(1);
        filter: blur(3px);
    }
    50%{
        transform: scale(1.4);
        filter: blur(8px);
    }
`;
