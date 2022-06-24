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
      <ImageComponent>
        <Image
          src={image}
          alt={alt}
          width={position === 0 ? 420 : 420}
          height={position === 0 ? 600 : 420}
          draggable={false}
        />
      </ImageComponent>
      <MainText>{title}</MainText>
      <SideText>{subtitle}</SideText>
    </ElementComponent>
  );
};

export default ScrollElement;
