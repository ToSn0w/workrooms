import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
// import { sharedColors } from "./styled/sharedValues";
// import { media } from "../utils/responsive";

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
    border: 0;
    font-style: normal;
  }
html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem=10px, 10px/16px = 62.5%
  scroll-behavior: smooth;

html, body {
    max-width: 100%;
    overflow-x: hidden;
}

//fonts
/* 
@font-face {
    font-family: 'NeuePlakText-Black';
    src: url('/fonts/NeuePlakText-Black.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

@font-face {
    font-family: 'NeuePlakText-Thin';
    src: url('/fonts/NeuePlakText-Thin.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  
@font-face {
    font-family: 'NeuePlakText-Bold';
    src: url('/fonts/NeuePlakText-Bold.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeuePlakText-SemiBold';
    src: url('/fonts/NeuePlakText-SemiBold.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  } */

}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1660px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
