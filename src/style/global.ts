import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :root{
      --black: #000;
      --bg-color: #111111;
      --text-color: #ffffff;
      --theme-color: #14E956;
      --sm: 425px;
      --md: 768px;
      --lg: 1024px;
  }

  body {
      background-color: var(--bg-color);
      color: var(--text-color);
      max-width: 100%;
      overflow-x: hidden;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  button{
    cursor: pointer;
  }

  ul,ol,li{
    list-style: none;
  }
`;

export default GlobalStyle;
