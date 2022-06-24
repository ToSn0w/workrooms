import styled, { css } from "styled-components";

export const ElementComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 742.23px;
  margin-right: 130px;
`;

export const ImageComponent = styled.div`
  position: relative;
  height: ${({ position }) => (position ? "600px" : "338.78px")};
  width: ${({ position }) => (position ? "420px" : "530px")};

  cursor: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 120 120' height='120px' width='120px' xml:space='preserve' shape-rendering='geometricPrecision'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D .st1%7Bfill:none;stroke:%23FFFFFF;stroke-width:2;%7D%0A%3C/style%3E%3Ccircle class='st1' cx='60' cy='60' r='44'/%3E%3Ccircle class='st0' cx='59.9' cy='59.9' r='3.5'/%3E%3Cpath class='st0' d='M116,63.5v-8l4,4L116,63.5z'/%3E%3Cpath class='st0' d='M4,63.5v-8l-4,4L4,63.5z'/%3E%3C/svg%3E%0A")
      60 60,
    auto;

  ${(props) =>
    props.bigSize &&
    css`
      width: 420px;
      height: 420px;
    `}
`;

export const MainText = styled.h1`
  font-size: 28px;
  padding: 20px 0;
  font-family: "NeuePlakText-Bold";
`;
export const SideText = styled.h2`
  font-size: 16px;
  font-family: "NeuePlakText-SemiBold";
  color: #898989;
`;

export const ButtonComponent = styled.a`
  display: flex;
  align-items: center;
  height: 20px;
  margin: 30px 0;
  font-family: "NeuePlakText-Bold";
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 10px;
`;

export const IconWrapper = styled.div`
  margin: 0 10px;
`;
