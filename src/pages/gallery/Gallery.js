import React from "react";
// import Swiper from "react-id-swiper";
import { ButtonArrow } from "../../components/generalStyles/ButtonArrow.styles";
import { H1 } from "../../components/generalStyles/Fonts.styles";
import {
  selectPicturesList,
  selectNumber,
  selectShowImage,
} from "../../redux/gallery/galleryRedux.selectors";
import {
  arrowPictureChange,
  showAndHidePictureAction,
} from "../../redux/gallery/galleryRedux.actions";
import imgLupa from "../../assets/gallery/lupa.png";
import {
  Container,
  Img,
  ImgContainer,
  ShowImgContainer,
  TextContainer,
  MainContainer,
} from "./gallery.styles";
import { connect } from "react-redux";

const Gallery = ({
  arrowPictureChange,
  showAndHidePictureAction,
  photos,
  number,
  showImage,
}) => {
  const handleShowPicture = () => {
    console.log("powiększenie obrazu");
    showAndHidePictureAction(!showImage);
  };

  let photosList = [...photos];
  const pictureList = photosList.map((item) => (
    <Img
      onClick={handleShowPicture}
      key={item.id}
      src={item.picture}
      alt="zdjęcie"
    />
  ));
  const showPictureList = photosList.map((item) => (
    <Img
      tertiary
      onClick={handleShowPicture}
      key={item.id}
      src={item.picture}
      alt="zdjęcie"
    />
  ));

  const handleArrowLeft = () => {
    if (number >= pictureList.length - 2) {
      --number;
    } else number = pictureList.length - 1;
    arrowPictureChange(number);
  };

  const handleArrowRight = () => {
    if (number <= pictureList.length - 2) {
      ++number;
    } else number = 0;
    arrowPictureChange(number);
    console.log(pictureList.length);
  };

  return (
    <MainContainer>
      <TextContainer>
        <H1>Galeria</H1>
      </TextContainer>
      {showImage && (
        <ShowImgContainer onClick={handleShowPicture}>
          {showPictureList[number]}
        </ShowImgContainer>
      )}
      <Container>
        <ButtonArrow tertiary onClick={handleArrowLeft}>
          &#8249;
        </ButtonArrow>
        <Img secondary src={imgLupa} alt="" />
        <ImgContainer>{pictureList[number]}</ImgContainer>
        <ButtonArrow tertiary onClick={handleArrowRight}>
          &#8250;
        </ButtonArrow>
      </Container>
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  photos: selectPicturesList(state),
  number: selectNumber(state),
  showImage: selectShowImage(state),
});
const mapDispatchToProps = (dispatch) => ({
  arrowPictureChange: (item) => dispatch(arrowPictureChange(item)),
  showAndHidePictureAction: (item) => dispatch(showAndHidePictureAction(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
// https://github.com/kidjp85/react-id-swiper/issues/185

// ========================================

// import "swiper/css/swiper.css";
// const params = {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSliders: true,
//   slidePerView: "auto",
//   loop: true,
//   // watchOverflow: true,

//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   spaceBetween: 20,
//   containerClass: "customized-swiper-container",
//   // breakpoints: {
//   //   480: {
//   //     slidesPerView: 1,
//   //     spaceBetween: 20,
//   //   },
//   // },
// };

// return (
//   <Container>
//     <Swiper primary {...params}>
//       <Img src={img1} alt="" />
//       <Img src={img2} alt="" />
//       <Img src={img3} alt="" />
//       <Img src={img1} alt="" />
//     </Swiper>
//   </Container>
// );
// };
