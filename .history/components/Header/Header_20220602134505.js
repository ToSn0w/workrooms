import React from "react";
import Image from "next/image";

import {
  HeaderContainer,
  MainVideoComponent,
  MainVideo,
  SecondaryComponent,
  TextWrapper,
  Title,
  Subtitle,
  SmallText,
  ButtonsComponent,
  ImageWrapper,
} from "./styled/Header.elem";

import MainButton from "../MainButton/MainButton";

//Framer Motion variants

const headerVariant = {
  initial: { translateY: 0, opacity: 1 },
  animate: { translateY: -30, opacity: 0 },
};

const Header = () => {
  return (
    <HeaderContainer>
      <MainVideoComponent
        variant={headerVariant}
        initial={initial}
        animate={animate}
      >
        <MainVideo autoPlay muted loop>
          <source src="/videos/mainVideo.mp4" type="video/mp4" />
        </MainVideo>

        <ImageWrapper>
          <Image
            src="/images/horizonMain.png"
            alt="horizon-workrooms"
            height="138"
            width="540"
            layout="fixed"
          />
        </ImageWrapper>
      </MainVideoComponent>
      <SecondaryComponent>
        <TextWrapper>
          <Title>
            MIEJSCE DO PRACY,
            <br /> JAKIEGO JESZCZE <br /> NIE BYŁO
          </Title>
          <Subtitle>
            Horizon Workrooms (beta) to przestrzeń w VR, w której członkowie
            zespołu mogą się ze sobą kontaktować, współpracować i wspólnie
            rozwijać pomysły. Spotkaj się ze współpracownikami przy jednym
            stole, nawet jeśli znajdują się po drugiej stronie globu.
          </Subtitle>
          <SmallText>Wymagane urządzenie Quest 2.</SmallText>
        </TextWrapper>
        <ButtonsComponent>
          <MainButton text="zarejestruj się" arrow blue></MainButton>
          <MainButton text="obejrzyj film" arrow></MainButton>
        </ButtonsComponent>
      </SecondaryComponent>
    </HeaderContainer>
  );
};

export default Header;
