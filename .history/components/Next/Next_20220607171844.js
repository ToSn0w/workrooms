import React, { useEffect } from "react";

import {
  NextContainer,
  NextComponent,
  TextWrapper,
  NextTextComponent,
  MainText,
  SideText,
  ImageWrapper,
  ButtonComponent,
} from "./styled/Next.elem";

import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
} from "framer-motion";
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
  //useEffect
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    }
  }, [animation, inView]);

  //parallax
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 0.5, 1], [0, 500, 1000]);

  return (
    <motion.div
      ref={functionRef}
      animate={animation}
      initial="initial"
      variants={mainVariant}
    >
      <NextContainer>
        <NextTextComponent>
          <MainText variants={textVariant} initial="initial" animate="animate">
            ZRÓB PIERWSZY KROK
          </MainText>
          <SideText variants={childVariant}>
            Wkrocz do Workrooms, korzystając z naszego najbardziej
            zaawansowanego systemu rzeczywistości wirtualnej Quest 2.
          </SideText>
          <ButtonComponent variants={childVariant}>
            <MainButton text={"kup teraz"} arrow transparent blackText />
          </ButtonComponent>
        </NextTextComponent>
        <NextComponent>
          <ImageWrapper style={{ y: y1 }}>
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
    </motion.div>
  );
};

export default Next;
