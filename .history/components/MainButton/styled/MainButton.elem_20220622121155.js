import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const MainButtonComponent = styled(motion.button)`
  display: flex;
  justify-content: center;
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

  &:hover {
    background-color: #fff;
    color: #000;
    transition: background-color 0.3s ease;
  }

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
    `}

      ${(props) =>
    props.midWidth &&
    css`
      width: 280px;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;

  ${(props) =>
    props.maxWidth &&
    css`
      width: 90%;
    `}
`;

export const TextWrapper = styled.div`
  /* margin-right: 10px; */
`;

export const ArrowWrapper = styled.div`
  display: flex;

  ${(props) =>
    props.whiteArrow &&
    css`
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(39deg)
        brightness(106%) contrast(101%);
    `}
`;
