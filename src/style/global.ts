import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--inter);
 }

 :root {
    --black: #000000;
    --white: #FFFFFF;
    --grey: #AAAAAA;
    --aqua: #00FFFF;
    --bg: #2f363e;

    --black-opaque-1: #00000040;
    --black-opaque-2: #00000080;
    --black-opaque-3: #000000bf;
    --white-opaque-1: #ffffff33;
    --white-opaque-2: #ffffff40;

    --days-one: 'Days One', sans-serif;
    --inter: 'Inter', sans-serif;
    --monoton: 'Monoton', cursive;
    --shrikhand: 'Shrikhand', cursive;
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

 body {
   min-width: 100%;
   max-width: 100%;
   min-height: 100vh;
   overflow: hidden auto;
   background-color: var(--bg);
 }

 html {
   scroll-behavior: smooth;
   
   &::-webkit-scrollbar{
      width: 10px;
   }
   
   &::-webkit-scrollbar-thumb{
      background-color: var(--white);
      border-radius: 50px;
   }
 }
`;
