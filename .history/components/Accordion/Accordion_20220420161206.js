import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  AccordionHeader,
  HeaderWrapper,
  AccordionContent,
  BreakLine,
  ImageComponent,
} from "./styled/Accordion.elem.js";

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  return (
    <>
      <BreakLine />
      <HeaderWrapper>
        <AccordionHeader
          onClick={() => setExpanded(isOpen ? false : details.id)}
          animate={{ y: isOpen ? "-8px" : "0" }}
          transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          {details.title}
        </AccordionHeader>
      </HeaderWrapper>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "8%" : "0" }}
        transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <span>{details.subtitle}</span>
      </AccordionContent>
      <ImageComponent>
        <Image
          src={}
          alt="main-logo"
          height={22}
          width={144}
        />
      </ImageComponent>
    </>
  );
};

export default Accordion;
