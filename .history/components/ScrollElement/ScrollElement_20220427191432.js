import React from "react";

import {
  ElementComponent,
  ImageComponent,
  MainText,
  SideText,
} from "./styled/ScrollElement.elem";

import Image from "next/image";

const ScrollElement = ({
  mainText,
  sideText,
  imageDir,
  imageAlt,
  vertical,
  horizontal,
}) => {
  return (
    <ElementComponent>
      <ImageComponent vertical horizontal>
        <Image src={imageDir} alt={imageAlt} layout="fill" />
      </ImageComponent>
      <MainText>{mainText}</MainText>
      <SideText>{sideText}</SideText>
    </ElementComponent>
  );
};

export default ScrollElement;
