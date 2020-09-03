import styled, { css } from "styled-components";
import { device } from "../../components/mediaQuery/device";
export const MainContainer = styled.div`
  position: relative;
  flex-direction: column;
  top: 7%;
  /* background-color: blue; */
  margin: 0 auto;

  @media ${device.mobileS} {
    top: 7%;
    height: 90%;
    width: 100%;
  }
  @media ${device.laptop} {
    top: 7%;
    height: 70%;
    width: 85%;
  }
`;
export const Layout = styled.div`
  /* position: relative; */
  /* display: flex; */
  flex-direction: column;
  /* background-color: red; */
  margin: 0 auto;

  margin-top: 2%;
  margin-bottom: 2%;

  width: 60%;
  border-bottom: 7px solid #2a93c9;
  @media ${device.mobileS} {
    min-height: 80vh;
    width: 100%;
    height: 70%;
  }
  @media ${device.laptop} {
    min-height: 80vh;
    width: 84%;
    height: 70%;
  }
  @media ${device.laptopL} {
    height: 70%;
    width: 70%;
  }
  @media ${device.laptopXL} {
  }
`;
export const Container = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 8px;
  @media ${device.mobileS} {
    width: 100%;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    right: 1px;
    font-size: 17px;
  }
  @media ${device.laptop} {
    height: 100%;
    width: 60%;
    top: 50%;
    transform: translateY(-50%);
    right: 1px;
    font-size: 24px;
  }

  ${({ empty }) =>
    empty &&
    css`
      background-color: black;
      opacity: 0.7;
      @media ${device.mobileS} {
        width: 100%;
        height: 100%;
      }
      @media ${device.laptop} {
        width: 60%;
        height: 95%;
      }
      @media ${device.laptopL} {
        height: 100%;
      }
      @media ${device.laptopXL} {
      }
    `}
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  margin-top: 5%;
`;
export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${({ secondary }) =>
    secondary &&
    css`
      height: 20%;
    `}
`;
export const Label = styled.label`
  color: white;
`;
export const TextArea = styled.textarea`
  width: 70%;
  height: 120%;
`;
export const Input = styled.input`
  width: 70%;
  margin-left: 4%;
`;
export const Img = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: -1;
  border-radius: 8px;
  @media ${device.mobileS} {
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
  @media ${device.laptopXL} {
  }
`;
