import { createGlobalStyle, css } from "styled-components";

interface Props {
  load: boolean;
}
const GlobalStyle = createGlobalStyle<Props>`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :root{
      --black: #000;
      --bg-color: #01061b;
      --bg-footer: #000416;
      --text-color: #ffffff;
      --theme-color: #14E956;
      --sm: 425px;
      --md: 768px;
      --lg: 1024px;
  }

  html {
    ::-webkit-scrollbar{
      width: 10px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: #000c41;
      border-radius: 5rem;
    }

    ${({ load }) =>
      load &&
      css`
        overflow: hidden;
      `}
  }

  body {
      background-color: var(--bg-color);
      color: var(--text-color);
      max-width: 100%;
      overflow-x: hidden;
      overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  ul,ol,li{
    list-style: none;
  }
`;

export default GlobalStyle;
