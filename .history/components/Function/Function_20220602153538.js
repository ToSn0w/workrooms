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
const headerVariant = {
  initial: { translateY: 0, opacity: 0 },
  animate: { translateY: -30, opacity: 1, duration: 0.5 },
};

const Function = () => {
  //animations
  const animation = useAnimation();
  //intersection-observer
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <FunctionContainer>
      <FunctionComponent
        ref={aboutRef}
        animate={animation}
        initial="hidden"
        variants={textVariant}
      >
        <ContentWrapper>
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
