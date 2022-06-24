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
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.subtitle}
      </AccordionContent>
    </>
  );
};

export default Accordion;
