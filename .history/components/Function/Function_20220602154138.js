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
const variant = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
      staggerChildren: 2,
    },
  },
  initial: { opacity: 0, y: 72 },
};

const Function = () => {
  //animations
  const animation = useAnimation();
  //intersection-observer
  const [functionRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
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
        variants={variant}
      >
        <ContentWrapper
          variants={navLowerElements}
          initial="initial"
          animate="animate"
        >
          <TitleText>funkcje</TitleText>
          <MainComponent>
            <MainText>USPRAWNIJ WSPÓLNĄ PRACĘ</MainText>
            <SideText>
              Workrooms zapewnia narzędzia, które Twój zespół może wykorzystać
              do zdalnej współpracy – od udostępniania ekranu po tablicę w VR.
            </SideText>

            <ButtonComponent>
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
