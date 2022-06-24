import React, { useEffect } from "react";

import {
  NewMainWrapper,
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

import { mainVariant, textVariant, childVariant } from "../Animations/Variants";

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
    <NewMainWrapper>
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
    </NewMainWrapper>
  );
};

export default New;
