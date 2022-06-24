import React from "react";

import {
  ElementComponent,
  ImageComponent,
  MainText,
  SideText,
} from "./styled/ScrollElement.elem";

import Image from "next/image";

const ScrollElement = ({ details }) => {
  const { image, alt, title, subtitle } = details;
  return (
    <ElementComponent>
      <ImageComponent vertical horizontal>
        <Image src={image} alt={alt} width={420} height={600} />
      </ImageComponent>
      <MainText>{title}</MainText>
      <SideText>{subtitle}</SideText>
    </ElementComponent>
  );
};

export default ScrollElement;
