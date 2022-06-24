import React, { useEffect } from "react";

import {
  FunctionContainer,
  FunctionComponent,
  ContentWrapper,
  MainComponent,
  TitleText,
  MainText,
  SideText,
  ButtonComponent,
} from "./styled/Function.elem";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import MainButton from "../MainButton/MainButton";

//Framermotion variants
// const variant = {
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.6, 0.05, -0.01, 0.9],
//     },
//   },
//   initial: { opacity: 0, y: 72 },
// };

const mainVariant = {
  initial: {
    translateY: -30,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: [0.1, 0.25, 0.3, 1],
    },
  },
};

const childVariant = {
  initial: {
    translateY: -30,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.1, 0.25, 0.3, 1],
    },
  },
};

const Function = () => {
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
    <FunctionContainer>
      <FunctionComponent
        ref={functionRef}
        animate={animation}
        initial="initial"
        variants={mainVariant}
      >
        <ContentWrapper variants={mainVariant}>
          <TitleText variants={childVariant}>funkcje</TitleText>
          <MainComponent variants={childVariant}>
            <MainText variants={childVariant}>USPRAWNIJ WSPÓLNĄ PRACĘ</MainText>
            <SideText variants={childVariant}>
              Workrooms zapewnia narzędzia, które Twój zespół może wykorzystać
              do zdalnej współpracy – od udostępniania ekranu po tablicę w VR.
            </SideText>

            <ButtonComponent variants={childVariant}>
              <MainButton
                transparent
                arrow
                text={" więcej informacji"}
              ></MainButton>
            </ButtonComponent>
          </MainComponent>
        </ContentWrapper>
      </FunctionComponent>
    </FunctionContainer>
  );
};

export default Function;
