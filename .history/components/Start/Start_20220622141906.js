import React from "react";

import MainButton from "../MainButton/MainButton";
import {
  StartContainer,
  StartComponent,
  TextWrapper,
  MainText,
  SideText,
} from "./styled/Start.elem";

import { mainVariant, textVariant, childVariant } from "../Animations/Variants";

const Start = () => {
  return (
    <StartContainer>
      <StartComponent>
        <TextWrapper>
          <MainText>Chcesz rozpocząć?</MainText>
          <SideText>
            Wypróbuj naszą wersję beta i przenieś współpracę, komunikację i
            nawiązywanie kontaktów na wyższy poziom.
          </SideText>
        </TextWrapper>
        <MainButton text="zarejestruj się teraz" arrow greyBorder midWidth />
      </StartComponent>
    </StartContainer>
  );
};

export default Start;
