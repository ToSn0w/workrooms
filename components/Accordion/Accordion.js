import React from "react";

import {
  AccordionHeader,
  HeaderWrapper,
  AccordionContent,
  BreakLine,
} from "./styled/Accordion.elem.js";

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;

  const handleClick = () => {
    setExpanded(isOpen ? null : details.id);
  };

  return (
    <>
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
        <span>{details.subtitle}</span>{" "}
      </AccordionContent>
    </>
  );
};

export default Accordion;
