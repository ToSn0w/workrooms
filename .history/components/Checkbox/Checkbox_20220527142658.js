import React from "react";

import {
  CheckboxContainer,
  CheckboxIconComponent,
  StyledCheckbox,
  CheckboxIcon,
} from "./styled/Checkbox.elem";

const Checkbox = ({ checked }) => (
  <CheckboxContainer>
    <StyledCheckbox type="checkbox" />
    <CheckboxIconComponent>
      {checked ? <CheckboxIcon></CheckboxIcon> : null}
    </CheckboxIconComponent>
  </CheckboxContainer>
);

export default Checkbox;
