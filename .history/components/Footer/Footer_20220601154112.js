import React, { useState } from "react";

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
  // SelectCheckmark,
  // Tick,
  // SelectInput,
  SelectText,
  Select,
  IconsComponent,
  // legal,
  LegalComp,
  LegalWrapper,
  FacebookCopyright,
  LanguageChangeComp,
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
                <Select>
                  <Checkbox checked={checked} handleCheckbox={handleCheckbox} />
                </Select>
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
        <Footerlegal>
          <FacebookCopyright>?? Facebook Technologies, LLC.</FacebookCopyright>{" "}
          <LegalWrapper>
            <LegalComp>Prywatno????</LegalComp>{" "}
            <LegalComp>Informacje prawne</LegalComp>
            <LegalComp>
              Stany Zjednoczone <Image />
            </LegalComp>
            <LegalComp>
              Polski
              <Image />
            </LegalComp>
          </LegalWrapper>
        </Footerlegal>
      </FooterContainer>
    </FooterComponent>
  );
};

export default Footer;
