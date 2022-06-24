//Framermotion variants
export const mainVariant = {
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
export const textVariant = {
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

export const childVariant = {
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
// header variants
export const headerVariant = {
  initial: { translateY: -30, opacity: 0 },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: { duration: 4, ease: [0.1, 0.25, 0.3, 1] },
  },
};

export const navLowerElements = {
  initial: {
    translateY: -30,
    opacity: 0,
    transition: { when: "afterChildren" },
  },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.6,
      staggerChildren: 0.5,
      ease: [0.1, 0.25, 0.3, 1],
    },
  },
};
