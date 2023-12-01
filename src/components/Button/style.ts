import styled, { css } from "styled-components";

interface IButtonStyleProps {
  variant: string;
}

export const button = styled.button<IButtonStyleProps>`
  padding: 0.8rem 1.2rem;
  border: var(--border);
  border-radius: 0.3rem;

  font-size: 1rem;
  font-weight: 600;

  transition: background-color 0.6s, color 0.6s;

  ${({ variant }) => {
    switch (variant) {
      case "contained": {
        return css`
          background-color: var(--main-color);
          color: var(--white);

          &:hover {
            background-color: var(--white);
            color: var(--main-color);
          }
        `;
      }

      case "outlined": {
        return css`
          background-color: var(--white);
          color: var(--main-color);

          &:hover {
            background-color: var(--main-color);
            color: var(--white);
          }
        `;
      }

      default: {
        return css`
          border: 0.125rem solid var(--black);
          background-color: var(--white);
          color: var(--black);

          &:hover {
            background-color: var(--black);
            color: var(--white);
          }
        `;
      }
    }
  }}
`;
