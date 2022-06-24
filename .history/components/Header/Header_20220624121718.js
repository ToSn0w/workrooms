import React, { useEffect } from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  HeaderComponent,
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

import {
  headerVariant,
  textVariant,
  navLowerElements,
} from "../Animations/Variants";

const Header = () => {
  //animations
  const animation = useAnimation();
  //intersection-observer
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-600px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HeaderComponent>
      <HeaderContainer>
        <MainVideoComponent
          variants={headerVariant}
          initial="initial"
          animate="animate"
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
        <SecondaryComponent
          ref={aboutRef}
          animate={animation}
          initial="hidden"
          variants={textVariant}
        >
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
          {inView ? (
            <ButtonsComponent
              variants={navLowerElements}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={navLowerElements}>
                <MainButton
                  text="zarejestruj się"
                  arrow
                  blue
                  whiteArrow
                ></MainButton>
              </motion.div>
              <motion.div variants={navLowerElements}>
                <MainButton text="obejrzyj film" arrow></MainButton>
              </motion.div>
            </ButtonsComponent>
          ) : null}
        </SecondaryComponent>
      </HeaderContainer>
    </HeaderComponent>
  );
};

export default Header;
