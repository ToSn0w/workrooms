import React from "react";
import Image from "next/image";

import {
  MainButtonComponent,
  Wrapper,
  TextWrapper,
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
}) => {
  return (
    <MainButtonComponent
      transparent={transparent}
      blue={blue}
      greyBorder={greyBorder}
      blackText={blackText}
      noBorder={noBorder}
      maxWidth={maxWidth}
    >
      <Wrapper noBorder={noBorder} maxWidth={maxWidth}>
        <TextWrapper>{text}</TextWrapper>
        {arrow ? (
          <Image
            src="/images/arrow-right.png"
            alt="horizon-workrooms"
            height="24"
            width="24"
            layout="fixed"
          />
        ) : null}
      </Wrapper>
    </MainButtonComponent>
  );
};

export default MainButton;
