import React from "react";
import Image from "next/image";

import {
  MainButtonComponent,
  Wrapper,
  TextWrapper,
  ArrowWrapper,
} from "./styled/MainButton.elem";

const MainButton = ({
  text,
  arrow,
  blue,
  transparent,
  greyBorder,
  blackText,
  noBorder,
  maxWidth,
  midWidth,
  whiteArrow,
}) => {
  return (
    <MainButtonComponent
      transparent={transparent}
      blue={blue}
      greyBorder={greyBorder}
      blackText={blackText}
      noBorder={noBorder}
      maxWidth={maxWidth}
      midWidth={midWidth}
    >
      <Wrapper noBorder={noBorder} maxWidth={maxWidth}>
        <TextWrapper blue={blue}>{text}</TextWrapper>
        {arrow ? (
          <ArrowWrapper whiteArrow={whiteArrow}>
            <Image
              src="/images/arrow-right.png"
              alt="horizon-workrooms"
              height="24"
              width="24"
              layout="fixed"
            />
          </ArrowWrapper>
        ) : null}
      </Wrapper>
    </MainButtonComponent>
  );
};

export default MainButton;
