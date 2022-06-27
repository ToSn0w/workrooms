import React, { useEffect } from "react";

import {
  ProductivityWrapper,
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

import { mainVariant, textVariant, childVariant } from "../Animations/Variants";

const Productivity = () => {
  //animations
  const animation = useAnimation();
  //intersection-observer
  const [functionRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("animate");
    }
  }, [animation, inView]);
  return (
    <ProductivityWrapper>
      <motion.div
        ref={functionRef}
        animate={animation}
        initial="initial"
        variants={mainVariant}
      >
        <ProdContainer>
          <ProdComponent>
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
                <MainText
                  variants={textVariant}
                  initial="initial"
                  animate="animate"
                >
                  POZNAJ WIĘCEJ ROZWIĄZAŃ W ZAKRESIE PRODUKTYWNOŚCI
                </MainText>
                <SideText variants={childVariant}>
                  Zobacz, jak jeszcze Quest może pomóc Ci pracować efektywniej.
                </SideText>
                <ButtonComponent variants={childVariant}>
                  <MainButton text={"więcej informacji"} arrow greyBorder />
                </ButtonComponent>
              </TextWrapper>
            </TextComponent>
          </ProdComponent>
        </ProdContainer>
      </motion.div>
    </ProductivityWrapper>
  );
};

export default Productivity;
