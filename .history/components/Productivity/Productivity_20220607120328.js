import React, { useEffect } from "react";

import {
  ProdContainer,
  ProdComponent,
  ImageWrapper,
  TextWrapper,
  MainText,
  SideText,
  TextComponent,
} from "./styled/Productivity.elem";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import MainButton from "../MainButton/MainButton";

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
      ease: [0.1, 0.25, 0.3, 1],
    },
  },
};

const Productivity = () => {
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
    <ProdContainer>
      <ProdComponent
        ref={functionRef}
        animate={animation}
        initial="initial"
        variants={mainVariant}
      >
        <ImageWrapper>
          <Image
            src="/images/Productivity/1.jpg"
            width={746}
            height={480}
            alt="productivity1"
            layout="responsive"
          />
        </ImageWrapper>
      </ProdComponent>
      <ProdComponent>
        <TextComponent>
          <TextWrapper>
            <MainText>
              POZNAJ WIĘCEJ ROZWIĄZAŃ W ZAKRESIE PRODUKTYWNOŚCI
            </MainText>
            <SideText>
              Zobacz, jak jeszcze Quest może pomóc Ci pracować efektywniej.
            </SideText>

            <MainButton text={"więcej informacji"} arrow greyBorder />
          </TextWrapper>
        </TextComponent>
      </ProdComponent>
    </ProdContainer>
  );
};

export default Productivity;
