import styled from "styled-components";
import { Container } from "../../../utils/GlobalStyles";
import { motion } from "framer-motion";

export const ProductivityWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-bottom: 200px;
`;

export const ProdContainer = styled(Container)`
  display: flex;
  height: 475px;
  padding: 0;
`;

export const ProdComponent = styled(motion.div)`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TextComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left: 120px; */
  height: 100%;
  width: 100%;
  font-family: "NeuePlakText-semiBold";
`;

export const MainText = styled(motion.h1)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  max-width: 480px;
  font-size: 44px;
  line-height: 0.9;
  margin-bottom: 25px;
`;

export const SideText = styled(motion.h2)`
  width: 205px;
  height: 81px;
  font-size: 16px;
  font-family: "NeuePlakText-semiBold";
  margin-bottom: 20px;
`;

export const ButtonComponent = styled(motion.div)``;
