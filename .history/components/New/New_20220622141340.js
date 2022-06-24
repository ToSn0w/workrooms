import React, { useEffect } from "react";

import {
  NewContainer,
  NewComponent,
  NewWrapper,
  TextComponent,
  MainText,
  SideText,
  ScrollComponent,
  ButtonComponent,
} from "./styled/New.elem";

import MainButton from "../MainButton/MainButton";

import Scroll from "../Scroll/Scroll";
import { scrollIDs } from "./DataTwo";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

//Framermotion variants
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
      staggerChildren: 0.4,
      ease: [0.1, 0.25, 0.3, 1],
    },
  },
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

const childVariant = {
  initial: {
    translateY: -30,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.1, 0.25, 0.3, 1],
    },
  },
};

const New = () => {
  //animations
  const animation = useAnimation();
  //intersection-observer
  const [functionRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-600px",
  });
  //useEffect
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
      <NewContainer>
        <NewWrapper>
          <NewComponent>
            <TextComponent>
              <MainText
                variants={textVariant}
                initial="initial"
                animate="animate"
              >
                Sprawdź, co nowego
              </MainText>
              <SideText variants={childVariant}>
                Nieustannie pracujemy nad rozwijaniem kolejnych innowacji –
                przekonaj się, co ostatnio wprowadziliśmy.
              </SideText>
              <ButtonComponent variants={childVariant}>
                <MainButton
                  arrow
                  greyBorder
                  text="zarejestruj się, aby otrzymywać wiadomości"
                  maxWidth
                />
              </ButtonComponent>
            </TextComponent>
            <ScrollComponent>
              <Scroll scrollIDs={scrollIDs} />
            </ScrollComponent>
          </NewComponent>
        </NewWrapper>
      </NewContainer>
    </motion.div>
  );
};

export default New;
