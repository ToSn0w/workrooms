import React from "react";

import { NavElement } from "./styled/FooterNavElement.elem";

const FooterNavElement = ({ details }) => {
  const { title, link } = details;
  return <NavElement href={link}>{title}</NavElement>;
};

export default FooterNavElement;
