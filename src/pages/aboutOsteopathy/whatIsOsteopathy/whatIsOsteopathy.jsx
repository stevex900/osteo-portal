import React from "react";

import { H2 } from "../../../components/generalStyles/Fonts.styles";
import {
  MainContainer,
  Container1,
  Container2,
  CombineContainer,
} from "./whatIsOsteopathy.styles";
const WhatIsOsteopathy = () => {
  return (
    <MainContainer>
      <CombineContainer>
        <Container1>
          <H2>
            Osteopatia jest bezinwazyjną terapią manualną, której celem jest
            poprawa zdrowia wszystkich układów ciała poprzez manipulowanie i
            wzmacnianie układu mięśniowo-szkieletowego. Osteopata skupia się na
            stawach, mięśniach kręgosłupie i nie tylko. Leczenie ma pozytywny
            wpływ na układ nerwowy, krwionośny i limfatyczny. Medycyna manualna
            oznacza, że ​​zarówno diagnoza, jak i leczenie odbywają się rękami.
            Osteopatia jest terapią uzupełniającą. Jest stosowana obok
            konwencjonalnego leczenia w celu poprawy zdrowia. Jednak lekarze
            osteopatyczni są również wykwalifikowani i mają więcej szkoleń niż
            inni terapeuci uzupełniający, tacy jak naturopaci czy
            fizjoterapeuci.
          </H2>
        </Container1>
        <Container2>{/* <Img src={img} alt="" /> */}</Container2>
        <Container1>
          {" "}
          <H2>
            Osteopatia przyjmuje holistyczne podejście do opieki zdrowotnej
            obejmujące całe ciało. Wykorzystuje ręczne „praktyczne” techniki w
            celu poprawy krążenia i korekty zmienionej biomechaniki, bez użycia
            leków. Lekarz osteopatyczny nie koncentruje się tylko na obszarze
            problemowym, ale stosuje techniki manualne w celu zrównoważenia
            wszystkich układów ciała oraz zapewnienia ogólnego dobrego zdrowia i
            dobrego samopoczucia. Diagnozowanie i leczenie stanów za pomocą tych
            technik nosi nazwę Osteopathic Manipulative Medicine. Techniki
            obejmują rozciąganie, delikatny nacisk i odporność, znane jako
            osteopatyczna medycyna manipulacyjna. Lekarz osteopatyczny może
            również wydawać leki na receptę i stosować metody chirurgiczne w
            celu wsparcia całościowego, ręcznego leczenia. Wielu lekarzy
            osteopatycznych służy również jako lekarze podstawowej opieki
            zdrowotnej w takich dziedzinach, jak medycyna rodzinna, medycyna
            wewnętrzna i pediatria.
          </H2>
        </Container1>
      </CombineContainer>
    </MainContainer>
  );
};

export default WhatIsOsteopathy;
