import React, { useState } from "react";

import {
  FooterWrapper,
  FooterContainer,
  FooterComponent,
  MetaLogoWrapper,
  MainFooterComponent,
  FooterNavigation,
  FooterNavElementWrapper,
  FooterMenu,
  FooterSideElement,
  FooterElement,
  MainTitle,
  NewsletterWrapper,
  NewsletterComponent,
  NewsletterTitle,
  NewsButton,
  TextWrapper,
  ContentWrapper,
  SelectComponent,
  SelectText,
  Select,
  IconsComponent,
  Icon,
  FooterLegalContainer,
  LegalComp,
  LegalWrapper,
  FacebookCopyright,
  FooterLegal,
  ArrowDownImage,
} from "./styled/Footer.elem";

import FooterNavElement from "./FooterNavElement";

import FooterMenuElement from "./FooterMenuElement";

import Checkbox from "../Checkbox/Checkbox";

import Image from "next/image";

import {
  footerNavIDs,
  footerMenuIDsOne,
  footerMenuIDsTwo,
  footerMenuIDsThree,
  footerTitles,
} from "./FooterData";

const Footer = () => {
  const { firstTitle, secondTitle, thirdTitle } = footerTitles;

  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <FooterWrapper>
      <FooterComponent>
        <FooterContainer>
          <MetaLogoWrapper>
            <Image
              src="/images/MetaLogo.svg"
              alt="main-logo"
              height={22}
              width={144}
              layout="fixed"
            />
          </MetaLogoWrapper>
          <MainFooterComponent>
            <FooterNavigation>
              <FooterNavElementWrapper>
                {footerNavIDs.map((details) => {
                  return (
                    <>
                      <FooterNavElement key={details.id} details={details} />
                    </>
                  );
                })}
              </FooterNavElementWrapper>
            </FooterNavigation>
            <FooterMenu>
              <FooterSideElement>
                <FooterElement>
                  <MainTitle>{firstTitle}</MainTitle>
                  {footerMenuIDsOne.map((details) => {
                    return (
                      <>
                        <FooterMenuElement key={details.id} details={details} />
                      </>
                    );
                  })}
                </FooterElement>
                <FooterElement>
                  <MainTitle>{secondTitle}</MainTitle>
                  {footerMenuIDsTwo.map((details) => {
                    return (
                      <>
                        <FooterMenuElement key={details.id} details={details} />
                      </>
                    );
                  })}
                </FooterElement>
                <FooterElement>
                  <MainTitle>{thirdTitle}</MainTitle>
                  {footerMenuIDsThree.map((details) => {
                    return (
                      <>
                        <FooterMenuElement key={details.id} details={details} />
                      </>
                    );
                  })}
                </FooterElement>
              </FooterSideElement>
            </FooterMenu>
          </MainFooterComponent>
          <NewsletterWrapper>
            <NewsletterComponent></NewsletterComponent>
            <NewsletterComponent>
              <TextWrapper>
                <NewsletterTitle>
                  Otrzymuj wiadomości i aktualizacje
                </NewsletterTitle>
                <NewsButton>
                  <Image
                    src="/images/arrow-right.png"
                    alt="horizon-workrooms"
                    height="24"
                    width="24"
                    layout="fixed"
                  />
                </NewsButton>
              </TextWrapper>
              <ContentWrapper>
                <SelectComponent>
                  <Select>
                    <Checkbox
                      checked={checked}
                      handleCheckbox={handleCheckbox}
                    />
                  </Select>
                  <SelectText>
                    Zaznaczając to pole, akceptujesz Regulamin i Zasady ochrony
                    prywatności Oculusa. Subskrypcję możesz zakończyć w dowolnej
                    chwili.
                  </SelectText>
                </SelectComponent>
                <IconsComponent>
                  <Icon>
                    <Image
                      src="/images/FooterIcons/Facebook.svg"
                      alt="facebook-logo"
                      height={100}
                      width={100}
                      layout="fixed"
                    />
                  </Icon>
                  {/* <Icon>
                    <Image
                      src="/images/FooterIcons/Twitch.svg"
                      alt="twitch-logo"
                      height={100}
                      width={100}
                      layout="fixed"
                    />
                  </Icon> */}
                </IconsComponent>
              </ContentWrapper>
            </NewsletterComponent>
          </NewsletterWrapper>
        </FooterContainer>{" "}
        <FooterLegal>
          {" "}
          <FooterLegalContainer>
            <FacebookCopyright>© Facebook Technologies, LLC.</FacebookCopyright>{" "}
            <LegalWrapper>
              <LegalComp>Prywatność</LegalComp>{" "}
              <LegalComp>Informacje prawne</LegalComp>
              <LegalComp>
                Stany Zjednoczone{" "}
                <ArrowDownImage src={"/images/arrow-down2.png"} />
              </LegalComp>{" "}
              <LegalComp>
                Polski <ArrowDownImage src={"/images/arrow-down2.png"} />
              </LegalComp>{" "}
            </LegalWrapper>{" "}
          </FooterLegalContainer>
        </FooterLegal>
      </FooterComponent>
    </FooterWrapper>
  );
};

export default Footer;
