import React from "react";

import {
  CheckboxContainer,
  CheckboxIconComponent,
  StyledCheckbox,
  CheckboxIcon,
} from "./styled/Checkbox.elem";

const Checkbox = ({ checked }) => (
  <CheckboxContainer>
    <StyledCheckbox />
    <CheckboxIconComponent>
      <CheckboxIcon></CheckboxIcon>
    </CheckboxIconComponent>
  </CheckboxContainer>
);

export default Checkbox;
