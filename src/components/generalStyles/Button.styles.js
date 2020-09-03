import styled, { css } from "styled-components";
import { device } from "../mediaQuery/device";
export const Button = styled.button`
  background-color: #f7fafb;
  color: #3598cc;

  height: 12%;
  width: 25%;
  border-radius: 8px;
  border: none;
  transition: 0.5s;
  
  &:hover {
    background-color: #3598cc;
    color: #f7fafb;
    border-radius: 8px;
    height: 14%;
    width: 27%;
  }
  &:focus {
    outline: none;
  }
  ${({ home }) =>
    home &&
    css`
      margin-left: 60%;
      height: 50px;
      width: 170px;
      margin-top: 5%;

      &:hover {
        background-color: #3598cc;
        color: #f7fafb;
        border-radius: 8px;
        height: 60px;
        width: 180px;
      }
      &:focus {
        outline: none;
      }
      @media ${device.mobileS} {
        margin-left: 60%;
        height: 50px;
        width: 160px;
        margin-top: 5%;
      }
      @media ${device.laptop} {
      }
      @media ${device.laptopL} {
      }
      @media ${device.laptopXL} {
      }
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      border: 4px solod black;
      width: 100%;
      height: 150px;
    `}
  ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: #3598cc;
      color: #f7fafb;
      margin-left: 70%;

      &:hover {
        background-color: #f7fafb;
        border: 1px solid #3598cc;
        color: #3598cc;
        height: 12%;
        width: 25%;
      }
    `}
`;
export default Button;

// import styled, { css } from "styled-components";
// const Button = styled.button`
//   background-color: #ffd82b;
//   width: 220px;
//   height: 47px;
//   border: none;
//   border-radius: 50px;
//   font-family: "Montserrat";
//   font-weight: 500;
//   font-size: 16px;
//   text-transform: uppercase;

//   ${({ secondary }) =>
//     secondary &&
//     css`
//       background-color: #e6e6e6;
//       width: 105px;
//       height: 30px;
//       font-size: 10px;
//     `}
// `;
