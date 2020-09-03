import img1 from "../../assets/aboutMe/smile1.jpg";
import img2 from "../../assets/aboutMe/smile2.jpg";
import styled, { css } from "styled-components";
import { device } from "../../components/mediaQuery/device";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.mobileS} {
    /* max-width: 100px; */
  }
  @media ${device.laptop} {
  }
`;
export const Img = styled.img`
  display: block;
  width: 600px;
  height: auto;
`;
export const BackgroundContainer1 = styled.div`
  width: 600px;
  min-height: 40vh;
  background-image: url(${img1});
  background-attachment: fixed;
  background-position: center;
  @media ${device.mobileS} {
    min-height: 60vh;
    width: 100vw;
  }
  @media ${device.laptop} {
    min-height: 0vh;
    width: 600px;
    height: auto;
  }
`;
export const BackgroundContainer2 = styled.div`
  background-image: url(${img2});
  background-attachment: fixed;
  background-position: center;
  @media ${device.mobileS} {
    min-height: 60vh;
    width: 100vw;
  }
  @media ${device.laptop} {
    min-height: 0vh;
    width: 600px;
    height: auto;
  }
`;
export const Container = styled.div`
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 600px;
  }
`;
export const CombineContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      @media ${device.mobileS} {
        flex-direction: column-reverse;
      }
      @media ${device.laptop} {
        flex-direction: row;
      }
    `}
`;
export const H2 = styled.h2`
  color: #2a93c9;
  font-weight: normal;
`;
