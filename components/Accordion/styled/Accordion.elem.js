import styled from "styled-components";
import { motion } from "framer-motion";

export const AccordionComponent = styled(motion.div)`
  font-family: "NeuePlakText-SemiBold";
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const AccordionHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 2rem;
  color: #000;
  padding: 30px 0;
  cursor: pointer;
  font-family: "NeuePlakText-SemiBold";
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  span {
    display: block;
    width: 100%;
    font-size: 16px;
    color: #898989;
    font-family: "NeuePlakText-SemiBold";
  }
`;

export const BreakLine = styled(motion.hr)`
  width: 200%;
  height: 1px;
  background-color: #e6e6e6;
`;
