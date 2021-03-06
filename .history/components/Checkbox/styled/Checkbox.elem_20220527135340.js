import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  display: none;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  background: ${(props) => (props.checked ? "#3578E5" : "#fff")};
  border-radius: 50%;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
