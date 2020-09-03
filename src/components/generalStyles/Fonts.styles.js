import styled, { css } from "styled-components";
import { device } from "../mediaQuery/device";
export const H1 = styled.h1`
  font-weight: normal;
  /* display: block; */
    ${({ primary }) =>
      primary &&
      css`
        color: black;
      `}
    ${({ secondary }) =>
      secondary &&
      css`
        color: white;
        position: absolute;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);

        @media ${device.mobileS} {
          font-size: 1.3rem;
        }
        @media ${device.laptop} {
          font-size: 1.7rem;
        }
        @media ${device.laptopXL} {
          font-size: 2rem;
        }
      `}
    ${({ tertiary }) =>
      tertiary &&
      css`
        color: white;
        margin-bottom: 9%;
        @media ${device.laptop} {
          margin-top: -20%;
          font-size: 1.7rem;
        }
        @media ${device.laptopXL} {
          margin-top: -10%;
        }
      `}
    ${({ quaternary }) =>
      quaternary &&
      css`
        text-align: center;
        color: white;
      `};
      ${({ quinary }) =>
        quinary &&
        css`
          color: white;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50% -50%);
          font-size: 2.4rem;
        `};
`;

export const H2 = styled.h2`
  font-weight: normal;
  ${({ primary }) =>
    primary &&
    css`
      color: white;
      margin-bottom: 5%;
      @media ${device.laptop} {
        font-size: 1.4rem;
      }
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      color: #2a93c9;
    `}
`;
export const H3 = styled.h3`
  font-weight: normal;
  ${({ primary }) =>
    primary &&
    css`
      color: white;
    `}
`;
