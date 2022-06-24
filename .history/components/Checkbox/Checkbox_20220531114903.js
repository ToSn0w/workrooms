import React from "react";

import {
  CheckboxContainer,
  CheckboxIconComponent,
  StyledCheckbox,
  CheckboxIcon,
} from "./styled/Checkbox.elem";

import Image from "next/image";

const Checkbox = ({ checked }) => (
  <CheckboxContainer>
    <StyledCheckbox type="checkbox" />
    <CheckboxIconComponent>
      <CheckboxIcon>{checked ? <Image src={ }/> : null}</CheckboxIcon>
    </CheckboxIconComponent>
  </CheckboxContainer>
);

export default Checkbox;
