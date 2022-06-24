import styled from "styled-components";
import { Container } from "../../../utils/GlobalStyles";
import { motion } from "framer-motion";

export const NavWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;

  .divider {
    margin: auto;
    width: 90%;
    max-width: 80%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const NavComponent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  z-index: 200;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;

export const NavLogoComp = styled(motion.div)`
  display: flex;
`;

export const NavLogo = styled.img``;

export const ArrowWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  transform: ${(props) => (props.rotate === true ? "rotate(-180deg)" : "")};
  transition: transform 150ms ease;
`;

export const NavElement = styled(motion.a)`
  display: flex;
  align-items: center;
  padding: 0px 30px;
  font-size: 14px;
  color: #181a1b;
  height: 100%;
  padding: 50px 20px;
  cursor: pointer;
  font-family: "NeuePlakText-Black";

  &:hover {
    color: #418af7;
    transition: color 0.3s ease;
  }

  &:hover ${ArrowWrapper} {
    filter: invert(48%) sepia(31%) saturate(5826%) hue-rotate(201deg)
      brightness(103%) contrast(94%);
  }
`;

export const NavMainComponent = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  /* padding: 20px; */
  text-transform: uppercase;
`;

export const ElementsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #418af7;
    transition: color 0.3s ease;
  }
`;

export const ArrowDownImage = styled.img`
  height: 30%;
  width: 30%;
`;

export const NavIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  .break {
    display: flex;
    width: 1px;
    height: 30px;
    margin: 0 10px;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -12px;
`;

export const BasketIcon = styled.div`
  position: relative;
`;

//lower navigation

export const NavLowerComponent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 0;
  text-transform: uppercase;
  /* overflow-y: hidden;
  overflow-x: auto; */
`;

export const NavLowerElements = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #696969;
  }
`;

export const NavLowerElement = styled(motion.a)`
  padding: 20px;
  font-family: "NeuePlakText-Black";
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  color: #898989;

  &:first-child {
    color: #000;
  }
  &:hover {
    color: #418af7;
    transition: color 0.3s ease;
  }
`;

export const NavLowerButton = styled.button`
  display: inline-block;
  min-width: 160px;
  border-radius: 200px;
  padding: 16px 28px;
  margin-right: 20px;
  cursor: pointer;
  border-style: solid;
  color: #fff;
  background-color: #1d65c1;
  text-decoration: none;
  line-height: 1.34;
  font-size: 1.5rem;
  font-family: "NeuePlakText-Black";
  text-transform: uppercase;

  &:hover {
    background-color: #418af7;
    transition: background-color 0.3s ease;
  }
`;

//menu components

export const MenuComponent = styled(motion.div)`
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  min-height: 0px;
  background-color: #fff;
  z-index: 0;
  border-bottom: 1px solid;
  border-color: rgb(137, 137, 137, 0.4);
`;

export const ElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MenuElement = styled.div`
  display: flex;
  font-family: "NeuePlakText-SemiBold";
`;

export const MenuIconOne = styled.img`
  width: 60px;
  height: auto;
  margin: 0 30px;
`;

export const MenuIconTwo = styled.img`
  width: 50px;
  height: auto;
  margin: 0 30px;
`;

export const MenuTitle = styled.h1`
  font-size: 22px;

  &:hover {
    color: #418af7;
  }
`;

export const MenuSideText = styled.h2`
  font-size: 16px;
  color: #898989;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
