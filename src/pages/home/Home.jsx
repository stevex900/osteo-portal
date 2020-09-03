import React, { useEffect } from "react";
import { selectTextList, selectIndex } from "../../redux/text/text.selectors";
import { connect } from "react-redux";
import img2 from "../../assets/small-logos/icons.png";
import logo from "../../assets/logo2.png";
import { Button } from "../../components/generalStyles/Button.styles";
import { ButtonArrow } from "../../components/generalStyles/ButtonArrow.styles";
import { arrowTextChange } from "../../redux/text/text.actions";
import { withRouter } from "react-router";
import { H1, H2, H3 } from "../../components/generalStyles/Fonts.styles";
import {
  Img2,
  MainContainer,
  FirstContainer,
  ArrowAndMottoContainer,
  MottoContainer,
  CombineContainer,
  CombineContainer2,
  Container1,
  Container2,
  Container3,
  Container4,
  Div1,
  Div2,
  Div3,
  Div4,
  P,
  Ul,
  Li,
  ImgLogo,
} from "./home.styles";
const Home = ({ motto, index, arrowTextChange, history }) => {
  let mottoTexts = [...motto];
  const oneMotto = mottoTexts.map((item) => (
    <H1 secondary>{item.mottoValue}</H1>
  ));
  // const autoTextChange = () => {
  //   setInterval(handleArrowRight, 1000);
  // };

  useEffect(() => {
    setTimeout(autoTextChange);
  });
  const handleArrowLeft = () => {
    if (index >= oneMotto.length - 2) {
      --index;
    } else index = oneMotto.length - 1;
    arrowTextChange(index);
    clearInterval(autoTextChange);
  };
  const handleArrowRight = () => {
    if (index <= oneMotto.length - 2) {
      ++index;
    } else index = 0;
    arrowTextChange(index);
    console.log(oneMotto.length);
    clearInterval(autoTextChange);
  };
  const autoTextChange = setInterval(handleArrowRight, 4000);
  return (
    <MainContainer>
      <FirstContainer>
        <ArrowAndMottoContainer>
          <ButtonArrow secondary leftArrow onClick={handleArrowLeft}>
            &#8249;
          </ButtonArrow>
          {/* <button onClick={autoTextChange}>KLIK</button> */}
          <MottoContainer> {oneMotto[index]}</MottoContainer>
          <ButtonArrow secondary rightArrow onClick={handleArrowRight}>
            &#8250;
          </ButtonArrow>
        </ArrowAndMottoContainer>
      </FirstContainer>
      <CombineContainer>
        <Container1>
          <Div1>
            <H1>Godziny Przyjęć</H1>
            <Ul>
              <Li>
                <span style={{ color: "black" }}>Poniedziałek - Piątek:</span>
                <span style={{ color: "black" }}></span>
                <span style={{ marginRight: 0 }}>8:00 - 20:00</span>
              </Li>
              <Li>
                <span style={{ color: "black" }}>Sobota:</span>{" "}
                <span style={{ color: "black" }}></span>
                <span style={{ marginRight: 0 }}>Nagłe przypadki</span>
              </Li>
              <Li>
                <span style={{ color: "black" }}>Niedziela:</span>{" "}
                <span style={{ color: "black" }}></span>
                <span>Nagłe przypadki</span>
              </Li>
            </Ul>
          </Div1>
          <Div2>
            <H1>Plan Leczenia</H1>
            <P>
              Twój plan leczenia jest zaprojektowany z myślą o stałym postępie,
              a każda faza jest szybko wdrażana.
            </P>
          </Div2>
          <Div3>
            <H1>Nagłe przypadki</H1>
            <P>Telefon: 513 045 677</P>
          </Div3>
        </Container1>
        <Container2>
          <Img2 icon src={img2} alt="img" />
          {/* <H1 primary>Usługi</H1> */}
        </Container2>
        <Container3>
          <Div4>
            <H1>Doświadczony Osteopata</H1>
            <P>
              Twoje zdrowie jest najważniejszym zasobem. Powinieneś powierzyć to
              tylko najlepszym profesjonalistom.
            </P>
          </Div4>
          <Div4>
            <H1>Spersonalizowane leczenie</H1>
            <P>
              Pomagam nie tylko osobom, ze świerzymi dolegliwościami, ale i
              również z powikłaniami po wcześniejszej terapii
            </P>
          </Div4>
          <Div4>
            <H1>Jakość i bezpieczeństwo</H1>
            <P>
              Jestem certyfikowanym osteopatą oraz fizjoterapeutą. Dzięki
              10-letnim studiom oraz wieloletniemu doświadczeniu, jestem
              przeszkolona aby pomagać w każdej sytuacji.
            </P>
          </Div4>
          <Div4>
            <H1>Regularne wizyty</H1>
            <P>
              Podstawa to regularne leczenie. Nie pozwalam pacjentom czekać
              miesiącami na kolejną wizytę. Myślę o stałym postępie, a każda
              faza leczenia, wdrażana jest w prawidłowym momencie.
            </P>
          </Div4>
        </Container3>
      </CombineContainer>

      <CombineContainer2>
        <Container4>
          <ImgLogo src={logo} alt="logo" />
          <H1 tertiary>Zapraszam Serdecznie!</H1>
          <H2 primary>
            Oferuję szerokie spektrum osteopatyczne dla pacjentów wychodzących i
            przychodzących.
          </H2>
          <H3 primary>
            Moje główne obszary specjalizacji to lorem ipsumlorem ipsumlorem
            ipsum Zajmuję się również lorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </H3>
          <Button
            home
            onClick={() => {
              history.push("/contact");
            }}
          >
            SKONTAKTUJ SIĘ
          </Button>
        </Container4>
      </CombineContainer2>
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  motto: selectTextList(state),
  index: selectIndex(state),
});
const mapDispatchToProps = (dispatch) => ({
  arrowTextChange: (item) => dispatch(arrowTextChange(item)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
