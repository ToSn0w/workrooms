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
