import React, { useEffect } from "react";

import {
  ProdContainer,
  ProdComponent,
  ImageWrapper,
  TextWrapper,
  MainText,
  SideText,
  TextComponent,
  ButtonComponent,
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
      duration: 0.6,
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
      <ProdComponent
        ref={functionRef}
        animate={animation}
        initial="initial"
        variants={mainVariant}
      >
        <TextComponent>
          <TextWrapper>
            <MainText
              variants={textVariant}
              initial="initial"
              animate="animate"
            >
              POZNAJ WI??CEJ ROZWI??ZA?? W ZAKRESIE PRODUKTYWNO??CI
            </MainText>
            <SideText variants={childVariant}>
              Zobacz, jak jeszcze Quest mo??e pom??c Ci pracowa?? efektywniej.
            </SideText>
            <ButtonComponent variants={childVariant}>
              <MainButton text={"wi??cej informacji"} arrow greyBorder />
            </ButtonComponent>
          </TextWrapper>
        </TextComponent>
      </ProdComponent>
    </ProdContainer>
  );
};

export default Productivity;
