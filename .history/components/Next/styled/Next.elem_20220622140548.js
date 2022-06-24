import styled from "styled-components";

import { Container } from "../../../utils/GlobalStyles";
import { motion } from "framer-motion";

export const NextContainer = styled(Container)`
  height: 686.17px;
  background: linear-gradient(
    90deg,
    rgba(157, 29, 226, 1) 0%,
    rgba(248, 228, 255, 1) 0%,
    rgba(255, 244, 230, 1) 100%
  );
  display: flex;
  margin-top: 120px;
`;

export const NextComponent = styled(motion.div)`
  width: 60%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: scrolly 10s ease infinite;
`;

export const NextTextComponent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainText = styled(motion.h1)`
  height: 110px;
  font-size: 44px;
  line-height: 0.9;
  font-family: "NeuePlakText-Bold";
`;

export const SideText = styled(motion.h2)`
  width: 374px;
  height: 81px;
  font-size: 16px;
  font-family: "NeuePlakText-semiBold";
  margin-bottom: 30px;
`;

export const ImageWrapper = styled(motion.div)`
  position: absolute;
  width: 125%;
  height: 100%;
  @keyframes scrolly {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(calc(5%));
    }
    75% {
      transform: translateY(calc(-5%));
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const ButtonComponent = styled(motion.div)``;
