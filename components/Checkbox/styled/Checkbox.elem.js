import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  display: block;
  border-width: 2px;
  border-style: solid;
  border-color: #1d65c1;
  border-radius: 50%;
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
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const CheckboxIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 40%;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.checked ? "#1d65c1" : "transparent")};
  line-height: 100%;

  svg {
    fill: #fff;
    display: block;
    height: 24px;
    width: 24px;
    overflow: hidden;
    pointer-events: none;
  }
`;
