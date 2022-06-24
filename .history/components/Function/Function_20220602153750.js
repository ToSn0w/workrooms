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
  initial: { translateY: -30, opacity: 0 },
  animate: { translateY: 0, opacity: 1, duration: 0.8 },
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
        variants={headerVariant}
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
