import React from "react";

import {
  CheckboxContainer,
  CheckboxIconComponent,
  StyledCheckbox,
  CheckboxIcon,
} from "./styled/Checkbox.elem";

const [checked, setChecked] = useState(false);

const handleCheckbox = (e) => {
  setChecked(e.target.checked);
};

const Checkbox = ({ checked }) => (
  <CheckboxContainer>
    <StyledCheckbox type="checkbox" />
    <CheckboxIconComponent>
      {checked ? <CheckboxIcon></CheckboxIcon> : null}
    </CheckboxIconComponent>
  </CheckboxContainer>
);

export default Checkbox;
