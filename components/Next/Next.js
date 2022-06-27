import React, { useEffect } from "react";

import {
  NextWrapper,
  NextContainer,
  NextComponent,
  TextWrapper,
  NextTextComponent,
  MainText,
  SideText,
  ImageWrapper,
  ButtonComponent,
} from "./styled/Next.elem";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import MainButton from "../MainButton/MainButton";

import { mainVariant, textVariant, childVariant } from "../Animations/Variants";

const Next = () => {
  //animations
  const animation = useAnimation();
  //intersection-observer
  const [functionRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px",
  });
  //useEffect
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    }
  }, [animation, inView]);

  return (
    <NextWrapper>
      <motion.div
        ref={functionRef}
        animate={animation}
        initial="initial"
        variants={mainVariant}
      >
        <NextContainer>
          <NextTextComponent>
            <MainText
              variants={textVariant}
              initial="initial"
              animate="animate"
            >
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
      </motion.div>
    </NextWrapper>
  );
};

export default Next;
