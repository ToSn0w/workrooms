import React, { useState, useRef, useEffect } from "react";

import {
  ScrollWrapper,
  ScrollContainer,
  ScrollComponent,
} from "./styled/Scroll.elem";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ScrollElement from "../ScrollElement/ScrollElement";

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

const Scroll = ({ scrollIDs }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  //animations
  const animation = useAnimation();
  //intersection-observer
  const [functionRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("animate");
    }
  }, [animation, inView]);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <ScrollWrapper>
      <motion.div
        ref={functionRef}
        animate={animation}
        initial="initial"
        variants={mainVariant}
      >
        <ScrollContainer>
          <ScrollComponent
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragPropagation
            dragElastic={0.00001}
          >
            {scrollIDs.map((details) => {
              return <ScrollElement key={details.id} details={details} />;
            })}
          </ScrollComponent>
        </ScrollContainer>
      </motion.div>
    </ScrollWrapper>
  );
};

export default Scroll;
