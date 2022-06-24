import React from "react";

import {
  ElementComponent,
  ImageComponent,
  MainText,
  SideText,
} from "./styled/ScrollElement.elem";

import Image from "next/image";

const ScrollElement = ({ details }) => {
  return (
    <ElementComponent>
      <ImageComponent vertical horizontal>
        <Image src={details.image} alt={details.alt} width={144} height={144} />
      </ImageComponent>
      <MainText>{details.title}</MainText>
      <SideText>{details.subtitle}</SideText>
    </ElementComponent>
  );
};

export default ScrollElement;
