import React from "react";

import Scroll from "../Scroll/Scroll";
import { scrollIDs } from "./DataOne";

import { ScrollWrapper } from "./styled/ScrollComponent.elem";

const ScrollComponent = ({ padding }) => {
  return (
    <ScrollWrapper>
      <Scroll scrollIDs={scrollIDs} padding={padding} />;
    </ScrollWrapper>
  );
};

export default ScrollComponent;
