import styled from "styled-components";
import { Container } from "../../../utils/GlobalStyles";
import { motion } from "framer-motion";

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 83px 70px 13px;
`;

export const MainVideoComponent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

// export const VideoWrapper = styled.div``;

export const MainVideo = styled.video`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
`;

export const SecondaryComponent = styled(motion.div)`
  font-family: "NeuePlakText-SemiBold";
  padding: 50px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
`;

export const Title = styled.p`
  line-height: 0.9444;
  font-size: 72px;
  min-width: 640px;
`;

export const Subtitle = styled.p`
  font-size: 28px;
  line-height: 0.9;
  padding-top: 50px;
  padding-bottom: 30px;
  min-width: 640px;
`;

export const SmallText = styled.p`
  font-size: 1.2rem;
  color: #898989;
`;

export const ButtonsComponent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 50px;
`;
