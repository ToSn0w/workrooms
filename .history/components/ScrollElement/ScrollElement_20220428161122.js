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
        <Image src={image} alt={alt} draggable={false} layout="fixed" />
      </ImageComponent>
      <MainText>{title}</MainText>
      <SideText>{subtitle}</SideText>
    </ElementComponent>
  );
};

export default ScrollElement;
