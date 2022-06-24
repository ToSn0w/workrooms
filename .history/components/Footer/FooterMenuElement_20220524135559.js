import React from "react";

import { NavElement } from "./styled/FooterMenuElement.elem";

const FooterMenuElement = ({ details }) => {
  const { title, link } = details;
  return <NavElement href={link}>{title}</NavElement>;
};

export default FooterMenuElement;
