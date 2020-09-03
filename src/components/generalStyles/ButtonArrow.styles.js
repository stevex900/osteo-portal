import styled, { css } from "styled-components";
import { device } from "../../components/mediaQuery/device";
export const ButtonArrow = styled.button`
  
  display: block;
  background-color: white;
  color: #3598cc;
  font-size: 5rem;
  height: 120px;
  max-height: 120px;
  min-width: 80px;
  max-width: 80px;
  line-height: 6rem;
  text-align: center;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 17%;
  line-height: 60%;
  border: none;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0);
  @media ${device.mobileS} {
    height: 120px;
    max-height: 120px;
    min-width: 23px;
    max-width: 80px;
  }
  @media ${device.laptop} {
    /* background-color: black; */
    height: 120px;
    max-height: 120px;
    min-width: 80px;
    max-width: 80px;
  }

  &:hover {
    font-size: 8rem;
    @media ${device.mobileS} {
      font-size: 5rem;
    }
    @media ${device.laptop} {
      font-size: 8rem;
    }
  }
  &:focus {
    outline: none;
  }
 
  ${({ secondary }) =>
    secondary &&
    css`
      margin-top: 0.1%;
    `}
/* =========================================================== */
  ${({ tertiary }) =>
    tertiary &&
    css`
      display: block;
      background-color: white;
      color: #3598cc;
      font-size: 5rem;
      height: 120px;
      max-height: 120px;
      min-width: 80px;
      max-width: 80px;
      line-height: 6rem;
      text-align: center;
      border-radius: 8px;

      line-height: 60%;
      border: none;
      transition: 0.5s;
      background-color: rgba(0, 0, 0, 0);
      @media ${device.mobileS} {
        margin-top: 8px;
        height: 120px;
        max-height: 120px;
        min-width: 23px;
        max-width: 80px;
      }
      @media ${device.laptop} {
        margin-top: 137px;
        height: 120px;
        max-height: 120px;
        min-width: 80px;
        max-width: 80px;
      }

      &:hover {
        font-size: 8rem;
        @media ${device.mobileS} {
          font-size: 5rem;
        }
        @media ${device.laptop} {
          font-size: 8rem;
        }
      }
      &:focus {
        outline: none;
      }
    `}
`;
