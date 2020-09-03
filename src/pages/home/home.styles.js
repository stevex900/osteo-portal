import styled from "styled-components";
import { device } from "../../components/mediaQuery/device";
import img1 from "../../assets/sea.jpg";
import img2 from "../../assets/nature.jpg";

//==========================================================
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7fafb;
  /* background-color: red; */
  /* max-height: 200vh; */
  color: #2a93c9;
`;
export const ArrowAndMottoContainer = styled.div`
  display: flex;
  align-items: center;

  /* background-color: red; */
  @media ${device.mobileS} {
    min-width: 100vw;
    margin-top: 15%;
  }
  @media ${device.laptop} {
    margin-top: 0;
    min-width: 60vw;
    max-width: 100vw;
    left: 30%;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    min-height: 70%;
    position: absolute;
  }
  @media ${device.laptopL} {
  }
  @media ${device.laptopXL} {
  }
  @media ${device.desktop} {
  }
`;
export const MottoContainer = styled.div`
  min-width: 80%;
  max-width: 80%;
  min-height: 220px;
  max-height: 220px;
  position: relative;
  /* background-color: gray; */
`;
export const FirstContainer = styled.div`
  background-image: url(${img2});
  background-attachment: fixed;
  background-position: 100% 300%;
  min-height: 32%;
  position: relative;
  @media ${device.mobileS} {
    min-height: 320px;
    max-height: 320px;
    background-position: 29% 90%;
  }
  @media ${device.laptop} {
    min-height: 400px;
    max-height: 400px;

    background-position: 40% 160%;
  }
  @media ${device.laptopL} {
    min-height: 400px;
    max-height: 400px;
    background-position: 60% 180%;
  }
  @media ${device.laptopXL} {
    min-height: 400px;
    max-height: 400px;
    background-position: 90% 330%;
  }
  @media ${device.desktop} {
    min-height: 400px;
    max-height: 400px;
    background-position: 80% 530%;
  }
`;
export const Arrow = styled.h1`
  display: block;
  font-size: 90px;
  cursor: pointer;
  display: block;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
`;

//================================================================

//====================================================
export const CombineContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7fafb;
  /* background-color: red; */
  color: #2a93c9;
  margin-top: 1%;
  margin-bottom: 6%;
  /* min-height: 1000px; */
`;
//=================================================
export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
//=================================================
export const Container1 = styled.div`
  margin: 0 auto;

  display: flex;
  background-color: white;
  justify-content: space-evenly;
  text-align: center;
  border-bottom: 7px solid #2a93c9;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  @media ${device.mobileS} {
    max-width: 100%;
  }
  @media ${device.laptop} {
    max-width: 40%;
  }
`;
export const Div3 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  text-align: left;
`;
export const Ul = styled.ul`
  text-align: left;
  list-style: none;
`;
export const Li = styled.li``;
//=======================================================
export const Container2 = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 2%;
  margin: 0 auto;
  padding: 1% 3%;
  background-color: white;
`;
export const Img2 = styled.img`
  display: block;
  /* margin-top: 11%;
  margin-bottom: 11%; */
`;
export const Container3 = styled.div`
  background-color: white;
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
export const Div4 = styled.div`
  margin-left: 2%;
  margin-right: 2%;
`;
//========================================================
export const Div = styled.div`
  max-height: 100%;
`;
export const CombineContainer2 = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  background-color: #f7fafb;
  background-position: 50% 50%;
  color: #2a93c9;
  background-image: url(${img1});
  /* flex-grow: 2; */
  background-attachment: fixed;
  @media ${device.mobileS} {
    min-height: 150px;
    max-height: 1500px;
  }
  @media ${device.laptop} {
    min-height: 450px;
    max-height: 450px;
  }
  @media ${device.laptopL} {
  }
  @media ${device.laptopXL} {
    min-height: 550px;
    max-height: 550px;
  }
`;
export const Container4 = styled.div`
  width: 30%;
  margin-left: 13%;
  max-height: 100%;
  /* background-color: red; */
  position: absolute;
  @media ${device.mobileS} {
    width: 60%;
    top: 10%;
    position: relative;
  }
  @media ${device.laptop} {
    position: absolute;
    width: 60%;
    top: 40%;
    /* transform: translateY(-50%); */
  }
  @media ${device.laptopL} {
    width: 50%;
  }
  @media ${device.laptopXL} {
    top: 30%;
  }
`;
export const ImgLogo = styled.img`
  /* position: absolute; */
  left: 60%;
  top: 5%;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
`;
