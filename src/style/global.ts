import { createGlobalStyle } from "styled-components";
import hexagon from "../assets/hex_bg.jpg";

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
    
    --main-color: #00abf0;
    --text-color: #333333;
    --secod-text-color: #555555;
    --page-color-left: linear-gradient(90deg, #ffffff, #dddddd);
    --page-color-right: linear-gradient(270deg, #ffffff, #dddddd);
    --border: .125rem solid var(--main-color);
    --box-shadow: 0 0 .6rem rgba(0, 0, 0, .2);

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
   overflow: hidden;

   display: flex;
   justify-content: center;
   align-items: center;

   background: url(${hexagon}) no-repeat center;
   background-size: cover;
 }

 html {
   ::selection{
      /* background: var(--grey);
      color: var(--white); */
   }
 }
`;
