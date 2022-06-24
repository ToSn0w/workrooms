import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "../../../utils/GlobalStyles";

export const StartContainer = styled(Container)`
  display: flex;
`;

export const StartComponent = styled.div`
  height: 357px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 354px;
`;

export const MainText = styled.h1`
  font-size: 36px;
  font-family: "NeuePlakText-SemiBold";
  text-transform: uppercase;
  text-align: center;
`;

export const SideText = styled.h2`
  text-align: center;
  color: #898989;
  font-family: "NeuePlakText-SemiBold";
  padding: 30px 0;
`;

export const ButtonWrapper = styled(motion.div)``;


