import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  display: block;
`;

// export const Icon = styled.svg`
//   fill: none;
//   stroke: white;
//   stroke-width: 2px;
// `;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clippath: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `;

export const StyledCheckbox = styled.input`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  -webkit-appearance: none;
  z-index: -1;
`;

export const CheckboxIconComponent = styled.div``;

export const CheckboxIcon = styled.span``;
