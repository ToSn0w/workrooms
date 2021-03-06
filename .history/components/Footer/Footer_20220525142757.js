import React from "react";

import {
  FooterContainer,
  FooterComponent,
  MetaLogoWrapper,
  MainFooterComponent,
  FooterNavigation,
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
  SelectButton,
  SelectInput,
  SelectText,
  IconsComponent,
} from "./styled/Footer.elem";

import FooterNavElement from "./FooterNavElement";

import FooterMenuElement from "./FooterMenuElement";

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
  return (
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
            {footerNavIDs.map((details) => {
              return (
                <>
                  <FooterNavElement key={details.id} details={details} />
                </>
              );
            })}
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
                Otrzymuj wiadomo??ci i aktualizacje
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
                <SelectInput>
                  <SelectButton></SelectButton>
                </SelectInput>
                <SelectText>
                  Zaznaczaj??c to pole, akceptujesz Regulamin i Zasady ochrony
                  prywatno??ci Oculusa. Subskrypcj?? mo??esz zako??czy?? w dowolnej
                  chwili.
                </SelectText>
              </SelectComponent>
              <IconsComponent></IconsComponent>
            </ContentWrapper>
          </NewsletterComponent>
        </NewsletterWrapper>
      </FooterContainer>
    </FooterComponent>
  );
};

export default Footer;
