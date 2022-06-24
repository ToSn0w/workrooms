import React from "react";

import { NavElement, NavElementWrapper } from "./styled/FooterNavElement.elem";

const FooterNavElement = ({ details }) => {
  const { title, link } = details;
  return (
    <NavElementWrapper>
      <NavElement href={link}>{title}</NavElement>;
    </NavElementWrapper>
  );
};

export default FooterNavElement;
