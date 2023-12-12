import { createGlobalStyle } from "styled-components";

interface IStyleProps {
  themeColor: string;
}

export default createGlobalStyle<IStyleProps>`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--inter);
 }

 :root {
    --black: #000000;
    --white: #FFFFFF;

    --bg-color: #FFFFFF;
    --main-color: ${({ themeColor }) => themeColor};
    --text-color: #333333;
    --second-text-color: #555555;

    --border: .125rem solid var(--main-color);
    --box-shadow: 0 0 .6rem rgba(0, 0, 0, .2);
    --opaque: rgba(0, 0, 0, .5);

    --transition-color: .6s;
    --transition-theme: .4s;

    --days-one: 'Days One', sans-serif;
    --inter: 'Inter', sans-serif;
    --shrikhand: 'Shrikhand', cursive;
 }

 [data-theme="dark"]{
   --bg-color: #000000;
   --text-color: #FFFFFF;

   --second-text-color: #555555;
   --box-shadow: 0 .1rem .4rem rgba(255, 255, 255, .4);
   --opaque: rgba(255, 255, 255, .2);

 }

 body {
   min-width: 100%;
   max-width: 100%;
   min-height: 100vh;
   overflow-x: hidden;

   background-color: var(--bg-color);
   transition: background-color var(--transition-theme);
 }

 html {
   ::-webkit-scrollbar {
      width: 10px;
   }
   
   ::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: #DDDDDD;
   }
 }
 
 a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
 }

 button {
    cursor: pointer;
 }

 ul, ol, li {
    list-style: none;
 }

`;
