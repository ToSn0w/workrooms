import React from "react";

import { ElementComponent } from "./styled/ScrollElement.elem";

const ScrollElement = ({ mainText, sideText, vertical, horizontal }) => {
  return (
    <ElementComponent>
      <ImageComponent vertical horizontal>
        <Image src={mainText} />
      </ImageComponent>
      <MainText>{mainText}</MainText>
      <SideText>[sideText}</SideText>
    </ElementComponent>
  );
};

export default ScrollElement;
