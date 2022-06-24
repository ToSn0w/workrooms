import React, { useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  RemoteContainer,
  RemoteComponent,
  MainText,
  TextWrapper,
  MainRemoteComponent,
  AccordionWrapper,
  ImageWrapper,
  ImageContainer,
} from "./styled/Remote.elem";

import Accordion from "../Accordion/Accordion";

import Image from "next/Image";

const Remote = () => {
  const accordionIDs = [
    {
      id: 0,
      title: "Bierz udział w spotkaniach twarzą w twarz z domu",
      subtitle:
        "Przekształć swoje domowe biuro w nową ulubioną salę konferencyjną, a biurko we wspólny stół, przy którym możesz spotkać się z zespołem.",
      image: "/images/Remote/ImageOne.jpg",
      alt: "remote111",
    },
    {
      id: 1,
      title: "Uwolnij produktywność",
      subtitle:
        "Dzięki goglom Quest 2 i aplikacji Pulpit zdalny Oculus możesz używać komputera do współpracy ze swoim zespołem w VR. *",
      image: "/images/Remote/ImageTwo.jpg",
      alt: "remote222",
    },
    {
      id: 2,
      title: "Dołącz lub połącz się telefonicznie",
      subtitle:
        "Nie możesz pojawić się w VR? Dołącz do spotkania za pośrednictwem rozmowy wideo na laptopie lub komputerze.",
      image: "/images/Remote/ImageThree.jpg",
      alt: "remote333",
    },
  ];

  const [expanded, setExpanded] = useState(0);

  //animations
  const animation = useAnimation();
  //intersection-observer
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  return (
    <RemoteContainer>
      <RemoteComponent>
        <TextWrapper>
          <MainText>
            NOWY SPOSÓB NA <br /> ZDALNĄ PRACĘ <br /> ZESPOŁOWĄ
          </MainText>
        </TextWrapper>
        <MainRemoteComponent>
          <AccordionWrapper>
            {accordionIDs.map((details) => {
              return (
                <>
                  <Accordion
                    key={details.id}
                    details={details}
                    expanded={expanded}
                    setExpanded={setExpanded}
                  />
                  {details.id === expanded ? (
                    <ImageWrapper>
                      <Image
                        src={details.image}
                        alt={details.alt}
                        height={720}
                        width={530}
                      />
                    </ImageWrapper>
                  ) : null}
                </>
              );
            })}
          </AccordionWrapper>
        </MainRemoteComponent>
      </RemoteComponent>
      ;
    </RemoteContainer>
  );
};

export default Remote;
