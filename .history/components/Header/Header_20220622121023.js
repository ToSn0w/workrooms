import React, { useEffect } from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  initial: { translateY: 0, opacity: 0 },
  animate: { translateY: -30, opacity: 1, duration: 0.5 },
};

const textVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
      staggerChildren: 2,
    },
  },
  hidden: { opacity: 0, y: 72 },
};

const navLowerElements = {
  initial: {
    translateY: -30,
    opacity: 0,
    transition: { when: "afterChildren" },
  },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.6,
      staggerChildren: 0.5,
      ease: [0.1, 0.25, 0.3, 1],
    },
  },
};

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
            <br /> JAKIEGO JESZCZE <br /> NIE BY??O
          </Title>
          <Subtitle>
            Horizon Workrooms (beta) to przestrze?? w VR, w kt??rej cz??onkowie
            zespo??u mog?? si?? ze sob?? kontaktowa??, wsp????pracowa?? i wsp??lnie
            rozwija?? pomys??y. Spotkaj si?? ze wsp????pracownikami przy jednym
            stole, nawet je??li znajduj?? si?? po drugiej stronie globu.
          </Subtitle>
          <SmallText>Wymagane urz??dzenie Quest 2.</SmallText>
        </TextWrapper>
        {inView ? (
          <ButtonsComponent
            variants={navLowerElements}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={navLowerElements}>
              <MainButton
                text="zarejestruj si??"
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
  );
};

export default Header;
