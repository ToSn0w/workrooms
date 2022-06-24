import React, { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/Image";

import {
  AccordionHeader,
  HeaderWrapper,
  AccordionContent,
  BreakLine,
  ImageComponent,
  ImageWrapper,
} from "./styled/Accordion.elem.js";

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const imagePath = details.image;
  const imageAlt = details.alt;
  return (
    <>
      <BreakLine />
      <HeaderWrapper>
        <AccordionHeader
          onClick={() => setExpanded(isOpen ? false : details.id)}
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
      <ImageWrapper>
        <ImageComponent>
          <Image src={imagePath} alt={imageAlt} width={150} height={150} />
        </ImageComponent>
      </ImageWrapper>
    </>
  );
};

export default Accordion;
