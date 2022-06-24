import styled from "styled-components";
import { motion } from "framer-motion";

import { Container } from "../../../utils/GlobalStyles";

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const ScrollContainer = styled(Container)`
  padding-top: 250px;
  overflow: hidden;
  font-family: "NeuePlakText-SemiBold";
  cursor: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 120 120' xml:space='preserve' height='120px' width='120px' shape-rendering='geometricPrecision'%3E%3Cstyle type='text/css'%3E .st1%7Bfill:none;stroke:%23000000;stroke-width:2;stroke-opacity:0.15%7D%0A%3C/style%3E%3Ccircle class='st1' cx='60' cy='60' r='44'/%3E%3Ccircle cx='59.9' cy='59.9' r='3.5'/%3E%3Cpath d='M116,63.5v-8l4,4L116,63.5z'/%3E%3Cpath d='M4,63.5v-8l-4,4L4,63.5z'/%3E%3C/svg%3E%0A")
      60 60,
    auto;
`;

export const ScrollComponent = styled(motion.div)`
  display: flex;
  height: 892.23px;
  width: 100%;
`;
