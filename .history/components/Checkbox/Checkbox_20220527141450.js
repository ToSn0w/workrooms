import React from "react";

import {
  CheckboxContainer,
  CheckboxIcon,
  StyledCheckbox,
} from "./styled/Checkbox.elem";

const Checkbox = ({ checked }) => (
  <CheckboxContainer>
    <StyledCheckbox checked={checked}></StyledCheckbox>
    <CheckboxIcon></CheckboxIcon>
  </CheckboxContainer>
);

export default Checkbox;
