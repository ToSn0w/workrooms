import React from "react";

import {
  ElementComponent,
  ImageComponent,
  MainText,
  SideText,
} from "./styled/ScrollElement.elem";

import Image from "next/image";

const ScrollElement = ({ title, subtitle, image, alt }) => {
  return (
    <ElementComponent>
      <ImageComponent vertical horizontal>
        <Image src={image} alt={alt} layout="fill" />
      </ImageComponent>
      <MainText>{title}</MainText>
      <SideText>{subtitle}</SideText>
    </ElementComponent>
  );
};

export default ScrollElement;
