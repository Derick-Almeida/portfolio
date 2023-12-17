import styled, { css } from "styled-components";

interface IButtonStyleProps {
  variant: string;
}

export const button = styled.button<IButtonStyleProps>`
  padding: 0.8rem 1.2rem;
  border: var(--border);
  border-radius: 0.3rem;
  position: relative;

  font-size: clamp(1rem, 1.5vw, 2rem);
  font-weight: 600;
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > a {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  ${({ variant }) => {
    switch (variant) {
      case "contained": {
        return css`
          background-color: var(--main-color);
          color: var(--bg-color);

          transition: background-color var(--transition-color), color var(--transition-theme),
            border-color var(--transition-color);

          &:hover {
            background-color: var(--bg-color);
            color: var(--main-color);
          }
        `;
      }

      case "outlined": {
        return css`
          background-color: var(--bg-color);
          color: var(--main-color);

          transition: background-color var(--transition-theme), color var(--transition-color),
            border-color var(--transition-color);

          &:hover {
            background-color: var(--main-color);
            color: var(--bg-color);
          }
        `;
      }

      default: {
        return css`
          border: 0.125rem solid var(--text-color);
          background-color: var(--bg-color);
          color: var(--text-color);

          transition: background-color var(--transition-theme), color var(--transition-theme),
            border-color var(--transition-theme);

          &:hover {
            background-color: var(--text-color);
            color: var(--bg-color);
          }
        `;
      }
    }
  }}
`;
