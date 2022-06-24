import styled, { css } from "styled-components";

export const MainButtonComponent = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 200px;
  width: 240px;
  height: 60px;
  text-transform: uppercase;
  font-family: "NeuePlakText-Black";
  font-size: 1.4rem;
  cursor: pointer;
  color: ${({ blue }) => (blue ? "#fff" : "#000")};
  background-color: ${({ blue }) => (blue ? "#1d65c1" : "#fff")};
  border-style: ${({ blue }) => (blue ? "none" : "solid")};
  border-width: ${({ blue }) => (blue ? "0px" : "1px")};

  ${(props) =>
    props.transparent &&
    css`
      background-color: transparent;
      color: #fff;
      border-color: #898989;
      border-width: 2px;
    `}

  ${(props) =>
    props.greyBorder &&
    css`
      border-color: #c5c5c5;
      border-width: 2px;
    `}

    ${(props) =>
    props.blackText &&
    css`
      color: #000;
    `}
       ${(props) =>
    props.noBorder &&
    css`
      border-width: 0px;
      width: 350px;
    `}

     ${(props) =>
    props.maxWidth &&
    css`
      width: 450px;
      justify-content: space-around;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

export const TextWrapper = styled.div`
  margin-right: 10px;
`;
