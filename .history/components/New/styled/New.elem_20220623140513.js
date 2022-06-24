import styled from "styled-components";
import { Container } from "../../../utils/GlobalStyles";
import { motion } from "framer-motion";

export const NewMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 200px;
`;

export const NewContainer = styled(Container)`
  height: 1250px;
  display: flex;
  padding: 120px 0 170px 50px;
`;

export const NewWrapper = styled.div``;

export const NewComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TextComponent = styled.div`
  width: 534px;
`;

export const MainText = styled(motion.h1)`
  text-transform: uppercase;
  font-size: 44px;
  font-family: "NeuePlakText-SemiBold";
`;

export const SideText = styled(motion.h2)`
  font-family: "NeuePlakText-SemiBold";
  color: #898989;
  margin: 35px 0;
  margin-right: 45px;
  width: 370px;
`;

export const ScrollComponent = styled.div`
  padding-top: 60px;
  margin-left: -50px;
`;

export const ButtonComponent = styled(motion.div)``;
