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

export const NavComponent = styled.div`
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

export const NavLogoComp = styled.div`
  display: flex;
`;

export const NavLogo = styled.img``;

export const ArrowWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: #418af7;
  transform: ${(props) => (props.rotate === true ? "rotate(-180deg)" : "")};
  transition: transform 150ms ease;
`;

export const NavElement = styled(motion.a)`
  display: flex;
  align-items: center;
  padding: 0px 30px;
  font-size: 14px;
  height: 100%;
  padding: 50px 20px;
  cursor: pointer;
  font-family: "NeuePlakText-Black";

  &:hover {
    color: #418af7;
  }

  &:hover ${ArrowWrapper} {
    color: #418af7;
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
  height: auto;
  width: auto;
  &:hover {
    color: #696969;
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

export const NavLowerElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLowerElement = styled.p`
  padding: 20px;
  font-family: "NeuePlakText-Black";
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  color: #898989;

  &:first-child {
    color: #000;
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
  height: 108px;
  min-height: 0px;
  background-color: #fff;
  z-index: 0;

  .breakLine {
    width: 100%;
    height: 1px;
    background-color: #898989;
  }
`;

export const ElementWrapper = styled.div`
  display: flex;
  padding-bottom: 50px;
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
`;

export const MenuSideText = styled.h2`
  font-size: 16px;
  color: #898989;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
