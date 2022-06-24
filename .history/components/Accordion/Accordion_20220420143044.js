import React, { useState } from "react";
import { motion } from "framer-motion";

import { AccordionHeader, AccordionContent } from "./styled/Accordion.elem.js";

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  return (
    <>
      <AccordionHeader onClick={() => setExpanded(isOpen ? false : details.id)}>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "5%" : "0" }}
        transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <span>{details.subtitle}</span>
      </AccordionContent>
    </>
  );
};

export default Accordion;