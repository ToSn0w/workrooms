import styled from "styled-components";
import { motion } from "framer-motion";

import { Container } from "../../../utils/GlobalStyles";

export const FunctionWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-bottom: 200px;
`;

export const FunctionContainer = styled(Container)`
  font-family: "NeuePlakText-SemiBold";
`;

export const FunctionComponent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  background-image: url("/images/meeting.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
`;

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  padding: 0 70px;
  color: #fff;
`;

export const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
`;

export const TitleText = styled(motion.p)`
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 80px;
  margin-bottom: 100px;
`;

export const MainText = styled(motion.p)`
  font-size: 5rem;
  line-height: 0.9;
  width: 600px;
  margin-bottom: 10px;
`;

export const SideText = styled(motion.p)`
  font-size: 1.5rem;
  padding: 30px 0;
  width: 300px;
`;

export const ButtonComponent = styled(motion.div)`
  padding: 30px 0px;
`;

export const Wrapper = styled(motion.div)``;
