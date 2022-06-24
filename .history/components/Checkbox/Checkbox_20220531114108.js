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
      <CheckboxIcon>
        {checked ? <svg src={"/images/arrow-down.svg"} /> : null}
      </CheckboxIcon>
    </CheckboxIconComponent>
  </CheckboxContainer>
);

export default Checkbox;
