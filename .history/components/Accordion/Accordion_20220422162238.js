import React, { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/Image";

import {
  AccordionHeader,
  HeaderWrapper,
  AccordionContent,
  BreakLine,
} from "./styled/Accordion.elem.js";

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const [breakLine, setBreakLine] = useState();

  const handleClick = () => {
    if (isOpen === true) {
      setExpanded(false);
      setBreakLine(true);
    } else {
      setExpanded(details.id);
      setBreakLine(false);
    }
  };

  return (
    <>
      <BreakLine breakLine={breakLine} />
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
    </>
  );
};

export default Accordion;
