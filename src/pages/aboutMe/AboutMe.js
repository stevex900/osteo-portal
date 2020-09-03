import {
  MainContainer,
  // Img,
  Container,
  CombineContainer,
  H2,
  BackgroundContainer1,
  BackgroundContainer2,
} from "./aboutMe.styles";
// import img1 from "../../assets/aboutMe/smile1.jpg";
// import img2 from "../../assets/aboutMe/smile2.jpg";
import React from "react";

const AboutMe = () => {
  return (
    <MainContainer>
      <CombineContainer>
        <Container>
          <H2>
            atis, unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt,
            explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos, qui
            ratione voluptatem sequi nesciunt, neque porro quisquam est, qui
            dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt, ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae
            consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
            pariat
          </H2>
        </Container>
        {/* <Img src={img1} alt="foto 1" /> */}
        <BackgroundContainer1 primary></BackgroundContainer1>
      </CombineContainer>

      <CombineContainer secondary>
        {/* <Img src={img2} alt="foto 2" /> */}
        <BackgroundContainer2 secondary></BackgroundContainer2>
        <Container>
          <H2>
            2222, unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt,
            explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos, qui
            ratione voluptatem sequi nesciunt, neque porro quisquam est, qui
            dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt, ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae
            consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
            pariat
          </H2>
        </Container>
      </CombineContainer>
    </MainContainer>
  );
};

export default AboutMe;
