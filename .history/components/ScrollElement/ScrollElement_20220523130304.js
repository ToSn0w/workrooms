import React from "react";

import {
  ElementComponent,
  ImageComponent,
  MainText,
  SideText,
  ButtonComponent,
  TextWrapper,
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
      {button ? (
        <ButtonComponent>
          <TextWrapper> {buttonText}</TextWrapper>
          <Image
            src="/images/arrow-right.png"
            alt="horizon-workrooms"
            height="24"
            width="24"
            layout="fixed"
          />
          ;
        </ButtonComponent>
      ) : null}
    </ElementComponent>
  );
};

export default ScrollElement;
