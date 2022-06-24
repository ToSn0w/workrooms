import React from "react";

import Scroll from "../Scroll/Scroll";
import { scrollIDs } from "./DataOne";

const ScrollComponent = ({ padding }) => {
  return <Scroll scrollIDs={scrollIDs} padding={padding} />;
};

export default ScrollComponent;
