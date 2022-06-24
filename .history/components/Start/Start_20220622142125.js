import React, { useEffect } from "react";

import MainButton from "../MainButton/MainButton";
import {
  StartContainer,
  StartComponent,
  TextWrapper,
  MainText,
  SideText,
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
    <StartContainer>
      <StartComponent>
        <TextWrapper>
          <MainText>Chcesz rozpocząć?</MainText>
          <SideText>
            Wypróbuj naszą wersję beta i przenieś współpracę, komunikację i
            nawiązywanie kontaktów na wyższy poziom.
          </SideText>
        </TextWrapper>
        <MainButton text="zarejestruj się teraz" arrow greyBorder midWidth />
      </StartComponent>
    </StartContainer>
  );
};

export default Start;
