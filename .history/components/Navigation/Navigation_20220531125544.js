import Image from "next/image";
import { useState, useEffect } from "react";
import {
  NavWrapper,
  NavComponent,
  NavContainer,
  NavLogoComp,
  NavMainComponent,
  NavIcons,
  UserIcon,
  BasketIcon,
  NavElement,
  ArrowDownImage,
  ArrowWrapper,
  MenuComponent,
  ElementWrapper,
  MenuElement,
  MenuTitle,
  //lower navigation
  NavLowerComponent,
  NavLowerElements,
  NavLowerElement,
  NavLowerButton,
  MenuSideText,
  MenuIconOne,
  MenuIconTwo,
  TextWrapper,
} from "./styled/Navigation.elem";

//framer motion
import { useViewportScroll, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(false);

  const { scrollY } = useViewportScroll();

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  };
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  //variants for the nav
  const variants = {
    visible: { translateY: 0 },
    hidden: { translateY: -120 },
  };

  return (
    <NavWrapper
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.2 }}
    >
      <NavComponent>
        <NavContainer>
          <NavLogoComp>
            <Image
              src="/images/MetaLogo.svg"
              alt="main-logo"
              height={22}
              width={144}
              layout="fixed"
            />
          </NavLogoComp>
          <NavMainComponent>
            <NavElement
            // onMouseEnter={() => {
            //   setShow(true);
            //   setRotate(true);
            // }}
            // onMouseLeave={() => {
            //   setShow(false);
            //   setRotate(false);
            // }}
            >
              produkty
              <ArrowWrapper rotate={rotate}>
                <ArrowDownImage src={"/images/arrow-down2.png"} />
              </ArrowWrapper>
            </NavElement>
            <NavElement>materiały</NavElement>
            <NavElement>aplikacje i gry</NavElement>
            <NavElement>pomoc</NavElement>
          </NavMainComponent>
          <NavIcons>
            <UserIcon>
              <Image
                src="/images/UserLogo.svg"
                alt="user-logo"
                height={44}
                width={44}
                layout="fixed"
              />
            </UserIcon>
            <div className="break"></div>
            <BasketIcon>
              <Image
                src="/images/BasketIcon.svg"
                alt="basket-icon"
                height={44}
                width={44}
                layout="fixed"
              />
            </BasketIcon>
          </NavIcons>
        </NavContainer>
      </NavComponent>
      <div className="divider"></div>
      <AnimatePresence>
        {show ? (
          <MenuComponent
            onMouseEnter={() => {
              setShow(true);
              setRotate(true);
            }}
            onMouseLeave={() => {
              setShow(false);
              setRotate(false);
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.2 }}
          >
            <ElementWrapper>
              <MenuElement>
                <MenuIconOne src={"/images/questIcon.png"} />
                <TextWrapper>
                  <MenuTitle>Meta Quest 2</MenuTitle>
                  <MenuSideText>Autonomiczne google VR</MenuSideText>
                </TextWrapper>
              </MenuElement>
              <MenuElement>
                <MenuIconTwo src={"/images/joystick.png"} />
                <TextWrapper>
                  <MenuTitle>Akcesoria</MenuTitle>
                  <MenuSideText>Popraw swoje wrażenia w VR</MenuSideText>
                </TextWrapper>
              </MenuElement>
            </ElementWrapper>
            <div className="breakLine"></div>
          </MenuComponent>
        ) : null}
      </AnimatePresence>
      <NavLowerComponent>
        <NavLowerElements>
          <NavLowerElement>informacje ogólne</NavLowerElement>
          <NavLowerElement>funkcje</NavLowerElement>
          <NavLowerElement>pierwsze kroki</NavLowerElement>
          <NavLowerElement>zaloguj się</NavLowerElement>
        </NavLowerElements>
        <NavLowerButton>zarejestruj się</NavLowerButton>
      </NavLowerComponent>
    </NavWrapper>
  );
};

export default Navigation;
