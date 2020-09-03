import React from "react";
import {
  MainContainer,
  Container1,
  Container2,
  CombineContainer,
} from "./osteopathyHistory.styles";
import { H1, H2 } from "../../../components/generalStyles/Fonts.styles";
const OsteopathyHistory = () => {
  return (
    <MainContainer>
      <CombineContainer>
        <Container1>
          <H1 quinary>Jak to właściwie się zaczęło?</H1>
        </Container1>
        <Container2>
          <H2>
            Osteopatia została założona pod koniec XIX wieku przez lekarza i
            chirurga Andrew Taylora Still, w Kirksville, w stanie Missouri.
            Odkrył on, że aby osiągnąć najwyższą możliwą formę zdrowia,
            wszystkie części ciała powinny współpracować harmonijnie. Jego celem
            było przywrócenie ciału optymalnego zdrowia przy minimalnym zabiegu
            chirurgicznym i lekarskim, częściowo pod wpływem świadomości, że
            ówczesne zabiegi medyczne były w dużej mierze nieskuteczne, a w
            niektórych przypadkach szkodliwe. Z biegiem czasu, podczas którego
            leczył pacjentów z szerokim zakresem schorzeń, od czerwonki do rwy
            kulszowej i zapalenia stawów, z różnymi wynikami, zyskał reputację
            skutecznego lekarza. Pacjenci z całej Ameryki przybyli na leczenie
            do Kirksville. Wkrótce popyt stał się tak wysoki, że zbudowano
            pensjonaty i zmieniono trasy pociągów, aby zaspokoić liczbę osób
            szukających leczenia.
          </H2>
        </Container2>
      </CombineContainer>
    </MainContainer>
  );
};

export default OsteopathyHistory;
