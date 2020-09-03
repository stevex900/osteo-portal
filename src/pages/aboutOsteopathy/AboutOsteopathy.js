import React from "react";

import { ButtonContainer, ButtonNavLink } from "./aboutOsteopathy.styles";

import { withRouter } from "react-router";

const AboutOsteopathy = () => {
  return (
    <ButtonContainer>
      <ButtonNavLink to={"/osteopathy/osteopathyHistory"}>
        Krótki rys historyczny
      </ButtonNavLink>
      <ButtonNavLink to={"/osteopathy/whatIsOsteopathy"}>
        Czym jest osteopatia
      </ButtonNavLink>
      <ButtonNavLink to={"/osteopathy/whatCanBeCured"}>
        Co leczy osteopatia
      </ButtonNavLink>
      <ButtonNavLink to={"/contact"}>Kontakt ze mną</ButtonNavLink>
    </ButtonContainer>
  );
};

export default withRouter(AboutOsteopathy);

/* <ButtonNavLink secondary to={"/osteopathy/osteopathyHistory"}>
          Krótki rys historyczny
        </ButtonNavLink> */

/* <ButtonContainer>
        <Button
          secondary
          historyOsteo
          onClick={() => {
            history.push("/osteopathy/osteopathyHistory");
          }}
        >
          Krótki rys historyczny
        </Button>
        <Button
          secondary
          onClick={() => {
            history.push("/osteopathy/whatIsOsteopathy");
          }}
        >
          Czym jest osteopatia
        </Button>
        <Button
          secondary
          onClick={() => {
            history.push("/osteopathy/whatCanBeCured");
          }}
        >
          Co leczy osteopatia
        </Button>
        <Button
          secondary
          onClick={() => {
            history.push("/contact");
          }}
        >
          Skontaktuj się ze mną
        </Button>
      </ButtonContainer> */
// ====================================================
//   <ButtonContainer>
//   <ButtonNavLink secondary to={"/osteopathy/osteopathyHistory"}>
//     Krótki rys historyczny
//   </ButtonNavLink>
//   <ButtonNavLink secondary to={"/osteopathy/whatIsOsteopathy"}>
//     Czym jest osteopatia
//   </ButtonNavLink>
//   <ButtonNavLink secondary to={"/osteopathy/whatCanBeCured"}>
//     Co leczy osteopatia
//   </ButtonNavLink>
//   <Button
//     secondary
//     onClick={() => {
//       history.push("/contact");
//     }}
//   >
//     Skontaktuj się ze mną
//   </Button>
// </ButtonContainer>
