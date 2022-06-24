import React, { useEffect } from "react";

import {
  NextContainer,
  NextComponent,
  TextWrapper,
  NextTextComponent,
  MainText,
  SideText,
  ImageWrapper,
} from "./styled/Next.elem";

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
      duration: 0.8,
      ease: [0.1, 0.25, 0.3, 1],
    },
  },
};

const Next = () => {
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
    <NextContainer>
      <NextTextComponent
        ref={functionRef}
        animate={animation}
        initial="initial"
        variants={mainVariant}
      >
        <MainText>ZRÓB PIERWSZY KROK</MainText>
        <SideText>
          Wkrocz do Workrooms, korzystając z naszego najbardziej zaawansowanego
          systemu rzeczywistości wirtualnej Quest 2.
        </SideText>
        <MainButton text={"kup teraz"} arrow transparent blackText />
      </NextTextComponent>
      <NextComponent
        ref={functionRef}
        animate={animation}
        initial="initial"
        variants={mainVariant}
      >
        <ImageWrapper>
          <Image
            src="/images/mainGoogles.png"
            width={798}
            height={635}
            alt="mainGoogles"
            layout="responsive"
          />
        </ImageWrapper>
      </NextComponent>
    </NextContainer>
  );
};

export default Next;
