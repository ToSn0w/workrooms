import React from "react";

import {
  ElementComponent,
  ImageComponent,
  MainText,
  SideText,
  ButtonComponent,
} from "./styled/ScrollElement.elem";

import MainButton from "../MainButton/MainButton";

import Image from "next/image";

const ScrollElement = ({ details }) => {
  const { image, alt, title, subtitle, position, button, buttonText, bigSize } =
    details;
  return (
    <ElementComponent>
      <ImageComponent position={position} bigSize={bigSize}>
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
      {button ? <ButtonComponent></ButtonComponent> : null}
    </ElementComponent>
  );
};

export default ScrollElement;
