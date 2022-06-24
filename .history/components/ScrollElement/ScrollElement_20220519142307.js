import React from "react";

import {
  ElementComponent,
  ImageComponent,
  MainText,
  SideText,
  ScrollButton,
} from "./styled/ScrollElement.elem";

import Image from "next/image";

const ScrollElement = ({ details }) => {
  const { image, alt, title, subtitle, position, button } = details;
  return (
    <ElementComponent>
      <ImageComponent position={position}>
        <Image
          src={image}
          alt={alt}
          draggable={false}
          layout="fill"
          objectFit="contain"
        />
      </ImageComponent>
      <MainText>{title}</MainText>
      <SideText>{subtitle}</SideText>
      {button ? <ScrollButton></ScrollButton> : none}
    </ElementComponent>
  );
};

export default ScrollElement;
