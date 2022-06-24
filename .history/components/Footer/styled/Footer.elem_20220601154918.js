import styled from "styled-components";

import { Container } from "../../../utils/GlobalStyles";

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 723px;
  width: 100%;
`;

export const FooterComponent = styled.footer`
  height: 100%;
  width: 100%;
  background-color: #1c1e21;
`;

export const MetaLogoWrapper = styled.div`
  display: flex;
  margin: 50px 0;
  filter: invert(1);
`;

export const MainFooterComponent = styled.div`
  display: flex;
`;

export const FooterNavigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const FooterMenu = styled.div`
  display: flex;
  width: 50%;
`;

export const FooterMenuElement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterSideElement = styled.div`
  display: flex;
`;

export const FooterElement = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

export const MainTitle = styled.h1`
  font-size: 16px;
  color: #fff;
  font-family: "NeuePlakText-SemiBold";
  text-transform: uppercase;
  width: 100%;
`;

export const NewsletterWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const NewsletterComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  flex-direction: column;
  height: auto;
`;

export const NewsletterTitle = styled.h1`
  font-size: 20px;
  color: #fff;
  font-family: "NeuePlakText-SemiBold";
`;

export const NewsButton = styled.button`
  filter: invert(1);
  background-color: #e3e1de;
  /* width: 60px;
  height: 40px; */
  padding: 6px 16px;
  border: 2px solid black;
  border-radius: 50px;
  border-color: #696969;
  margin-top: 10px;
  justify-self: end;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 5%;
`;

export const SelectComponent = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

export const SelectInput = styled.input``;

export const SelectCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const Select = styled.label`
  margin-right: 15px;
`;

export const Tick = styled.svg``;

export const SelectText = styled.p`
  color: #696969;
  width: 100%;
  font-size: 16px;
  font-family: "NeuePlakText-SemiBold";
  line-height: 1;
  user-select: none;
`;

export const IconsComponent = styled.div`
  width: 60%;
`;

// legal

export const FooterLegalContainer = styled.div`
  background-color: #000;
`;

export const FooterLegal = styled.div`
  display: flex;
  height: 90px;
  width: 100%;
  color: #696969;
`;

export const LegalComp = styled.div``;

export const LegalWrapper = styled.div``;

export const FacebookCopyright = styled.h1``;

export const ArrowDownImage = styled.div``;
