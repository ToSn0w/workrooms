import React from "react";

import {
  ElementComponent,
  ImageComponent,
  MainText,
  SideText,
} from "./styled/ScrollElement.elem";

import Image from "next/image";

const ScrollElement = ({ details }) => {
  const { image, alt, title, subtitle, position } = details;
  return (
    <ElementComponent>
      <ImageComponent position>
        <Image
          src={image}
          alt={alt}
          width="100%"
          height="100%"
          draggable={false}
        />
      </ImageComponent>
      <MainText>{title}</MainText>
      <SideText>{subtitle}</SideText>
    </ElementComponent>
  );
};

export default ScrollElement;
