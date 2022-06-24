import React, { useEffect } from "react";

import MainButton from "../MainButton/MainButton";
import {
  StartContainer,
  StartComponent,
  TextWrapper,
  MainText,
  SideText,
  ButtonWrapper,
  FooterDiv,
} from "./styled/Start.elem";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { mainVariant, textVariant, childVariant } from "../Animations/Variants";

const Start = () => {
  //animations
  const animation = useAnimation();
  //intersection-observer
  const [functionRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-600px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("animate");
    }
  }, [animation, inView]);

  return (
    <motion.div
      ref={functionRef}
      animate={animation}
      initial="initial"
      variants={mainVariant}
    >
      <StartContainer>
        <StartComponent>
          <TextWrapper variants={mainVariant}>
            <MainText variants={childVariant}>Chcesz rozpocząć?</MainText>
            <SideText variants={childVariant}>
              Wypróbuj naszą wersję beta i przenieś współpracę, komunikację i
              nawiązywanie kontaktów na wyższy poziom.
            </SideText>
          </TextWrapper>
          <ButtonWrapper variants={childVariant}>
            <MainButton
              text="zarejestruj się teraz"
              arrow
              greyBorder
              midWidth
            />
          </ButtonWrapper>
        </StartComponent>
      </StartContainer>
      <FooterDiv></FooterDiv>
    </motion.div>
  );
};

export default Start;
