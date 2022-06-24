import styled from "styled-components";

export const NavElement = styled.a`
  width: 30%;
  font-size: 44px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "NeuePlakText-SemiBold";
  line-height: 1;
  color: #fff;
  transition: color 0.3s ease;
`;

export const NavElementWrapper = styled.div`
  width: 50%;
  height: 100%;
  transition: color 0.3s ease;

  &:hover {
    color: #898989;
  }
`;
