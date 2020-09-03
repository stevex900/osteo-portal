import styled, { css } from "styled-components";
import { device } from "../../components/mediaQuery/device";
export const MainContainer = styled.div`
  min-height: 80vh;
  /* background-color: blue; */
  @media ${device.mobileS} {
  }
  @media ${device.laptop} {
  }
`;
export const ImgContainer = styled.div`
  z-index: 2;
`;
export const ShowImgContainer = styled.div`
  position: fixed;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 100vw;
`;
export const TextContainer = styled.div`
  margin: 0 auto;
  margin-top: 1%;
  /* background-color: gray; */
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  display: flex;
  margin-top: 6%;
  /* background-color: red; */
  @media ${device.mobileS} {
    max-width: 100vw;
  }
  @media ${device.laptop} {
    width: 800px;
  }
`;
export const Img = styled.img`
  z-index: 2;
  @media ${device.mobileS} {
    max-width: 70vw;
  }
  @media ${device.laptop} {
    /* width: 100%; */
  }
  &:hover {
    opacity: 0.6;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      z-index: 1;
      position: absolute;
      max-width: 15%;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media ${device.mobileS} {
        display: none;
      }
      @media ${device.laptop} {
        display: block;
        width: 40%;
      }
    `}
  ${({ tertiary }) =>
    tertiary &&
    css`
      margin: 0 auto;
      margin-left: 50%;
      transform: translate(-50%, 3%);
      width: 60%;
      height: auto;
      z-index: 3;
      @media ${device.mobileS} {
        min-width: 100vw;
        max-width: 100vw;
      }
      @media ${device.laptop} {
        min-width: 900px;
        max-width: 900px;
      }
      @media ${device.laptopL} {
        min-width: 1000px;
        max-width: 1000px;
      }
      @media ${device.laptopXL} {
        min-width: 1100px;
        max-width: 1100px;
      }

      &:hover {
        opacity: 1;
      }
    `}
`;

// filter: blur(4px);
//   -o-filter: blur(4px);
//   -ms-filter: blur(4px);
//   -moz-filter: blur(4px);
//   -webkit-filter: blur(4px);
