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

const Productivity = () => {
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
    <ProdContainer>
      <ProdComponent
        ref={aboutRef}
        animate={animation}
        initial="hidden"
        variants={textVariant}
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
