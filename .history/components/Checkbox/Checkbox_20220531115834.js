import React from "react";

import {
  CheckboxContainer,
  CheckboxIconComponent,
  StyledCheckbox,
  CheckboxIcon,
} from "./styled/Checkbox.elem";

import Image from "next/image";

const Checkbox = ({ checked, handleCheckbox }) => (
  <CheckboxContainer onClick={handleCheckbox}>
    <StyledCheckbox type="checkbox" />
    <CheckboxIconComponent>
      <CheckboxIcon checked={checked}>
        {checked ? (
          <Image
            src={"/images/tick.svg"}
            alt="tick"
            width="24px"
            height="24px"
          />
        ) : null}
      </CheckboxIcon>
    </CheckboxIconComponent>
  </CheckboxContainer>
);

export default Checkbox;
