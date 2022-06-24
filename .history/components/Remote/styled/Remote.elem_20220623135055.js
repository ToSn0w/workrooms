import styled from "styled-components";
import { Container } from "../../../utils/GlobalStyles";
import { motion } from "framer-motion";

export const RemoteWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* margin-bottom: 250px; */
`;

export const RemoteContainer = styled(Container)``;

export const RemoteComponent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1050px;
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  height: 30%;
`;

export const MainText = styled.p`
  font-size: 5rem;
  font-family: "NeuePlakText-Black";
  line-height: 0.9;
`;

export const MainRemoteComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 50%;
  top: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 101px;
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: -780px;
`;

export const ImageContainer = styled.div`
  position: absolute;
`;
