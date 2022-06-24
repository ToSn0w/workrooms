import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  display: block;
`;

export const StyledCheckbox = styled.input`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  -webkit-appearance: none;
`;

export const CheckboxIconComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-width: 2px;
  border-style: solid;
  border-color: #1d65c1;
`;

export const CheckboxIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #1d65c1;
`;
