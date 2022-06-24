import React, { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/Image";

import {
  AccordionComponent,
  AccordionHeader,
  HeaderWrapper,
  AccordionContent,
  BreakLine,
  ImageComponent,
} from "./styled/Accordion.elem.js";

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;

  const handleClick = () => {
    setExpanded(isOpen ? null : details.id);
  };

  return (
    <>
      <AccordionComponent>
        <BreakLine
          animate={{
            height: isOpen ? "3px" : "1px",
            backgroundColor: isOpen ? "#000" : "#e6e6e6",
          }}
          transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
        />
        <HeaderWrapper>
          <AccordionHeader
            onClick={handleClick}
            animate={{ y: isOpen ? "-10px" : "0" }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            {details.title}
          </AccordionHeader>
        </HeaderWrapper>
        <AccordionContent
          key="content"
          animate={{ height: isOpen ? "15%" : "0" }}
          transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <span>{details.subtitle}</span>
        </AccordionContent>
        {/* {isOpen ? <ImageComponent /> : null} */}
      </AccordionComponent>
    </>
  );
};

export default Accordion;
