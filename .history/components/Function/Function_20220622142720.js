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

import { mainVariant, childVariant } from "../Animations/Variants";

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
    <motion.div
      ref={functionRef}
      animate={animation}
      initial="initial"
      variants={mainVariant}
    >
      <FunctionContainer>
        <FunctionComponent>
          <ContentWrapper variants={mainVariant}>
            <TitleText variants={childVariant}>funkcje</TitleText>
            <MainComponent variants={childVariant}>
              <MainText variants={childVariant}>
                USPRAWNIJ WSPÓLNĄ PRACĘ
              </MainText>
              <SideText variants={childVariant}>
                Workrooms zapewnia narzędzia, które Twój zespół może wykorzystać
                do zdalnej współpracy – od udostępniania ekranu po tablicę w VR.
              </SideText>

              <ButtonComponent variants={childVariant}>
                <MainButton
                  transparent
                  arrow
                  text={" więcej informacji"}
                  whiteArrow
                ></MainButton>
              </ButtonComponent>
            </MainComponent>
          </ContentWrapper>
        </FunctionComponent>
      </FunctionContainer>
    </motion.div>
  );
};

export default Function;
