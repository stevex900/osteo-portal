import React from "react";
import { H1, H2, H3 } from "../../../components/generalStyles/Fonts.styles";
import {
  MainContainer,
  Container1,
  CombineContainer,
} from "./whatCanBeCured.styles";
const WhatCanBeCured = () => {
  return (
    <MainContainer>
      <CombineContainer>
        <Container1>
          <H1 primary>
            Osteopatia może zapewnić ulgę i leczenie w szerokim zakresie chorób.
            Obejmują one:
          </H1>
        </Container1>
        <Container1>
          <H2>
            <span>&#8250;</span> artretyzm
          </H2>
        </Container1>
        <Container1>
          <H2>
            <span>&#8250;</span> ból stóp, kostek, bioder i kolan
          </H2>
        </Container1>
        <Container1>
          <H2>
            <span>&#8250;</span> ból pleców, ból szyi i rwa kulszowa
          </H2>
        </Container1>
        <Container1>
          <H2>
            <span>&#8250;</span> ból dłoni, ramion i łokci
          </H2>
        </Container1>
        <Container1>
          <H2>
            <span>&#8250;</span> bóle głowy
          </H2>
        </Container1>
        <Container1>
          <H2>
            <span>&#8250;</span> tenis i łokieć golfisty
          </H2>
        </Container1>
        <Container1>
          <H2>
            <span>&#8250;</span>
            <span> </span>
            problemy z postawą wynikające z ciąży, urazów sportowych, jazdy
            samochodem, wysiłku lub problemów trawiennych
          </H2>
        </Container1>
        <Container1>
          <H2>
            <span>&#8250;</span> nerwoból
          </H2>
        </Container1>
        <Container1>
          <H3>
            Osteopaci mogą również wykryć stany, których nie można wyleczyć
            przez osteopatię, aby skierować pacjentów do innych specjalistów.
          </H3>
        </Container1>
      </CombineContainer>
    </MainContainer>
  );
};

export default WhatCanBeCured;
