import styled, { css } from "styled-components";
import { device } from "../mediaQuery/device";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  height: 94px;
  width: 100vw;
  position: fixed;
  z-index: 3;
  background-color: #f7fafb;
`;
export const NavFixed = styled.nav`
  width: 100%;
  height: 94px;
  min-height: 94px;
`;

export const HamburgerContainer = styled.div`
  left: 75%;
  top: 50%;
  /* transform: translateY(-50%); */
  position: absolute;
`;
export const Container = styled.div`
  @media ${device.mobileS} {
    ${({ primary }) =>
      primary &&
      css`
        display: flex;
        margin: 0 auto;
        top: 24%;
        /* transform: translateY(-50%) */
        max-width: 95%;
        position: relative;
      `}
    ${({ secondary }) =>
      secondary &&
      css`
        display: none;
        margin: 0 auto;
        max-width: 95%;
        position: relative;
      `}
  }
  @media ${device.laptop} {
    ${({ primary }) =>
      primary &&
      css`
        display: none;
        margin: 0 auto;
        max-width: 95%;
        position: relative;
      `}
    ${({ secondary }) =>
      secondary &&
      css`
        display: flex;
        margin: 0 auto;
        max-width: 95%;
        position: relative;
        z-index: 8;
      `}
  }
`;

export const ContainerHamburgerWindow = styled.div`
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  top: 90px;
  background-color: #f7fafb;
`;
export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  max-width: 90%;
  width: 65%;
  margin: 0 auto;
  margin-right: 0;
  @media ${device.laptop} {
    width: 100%;
    margin-left: 20%;
  }
  @media ${device.laptopL} {
    width: 100%;
    margin-left: 30%;
    margin-right: 5%;
    /* background-color: red; */
  }
  @media ${device.laptopXL} {
    margin-left: 40%;
  }
  @media ${device.desktop} {
    margin-left: 40%;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      flex-direction: column;
    `}
`;

export const Img = styled.img`
  max-width: 100%;
  top: 50%;
  transform: translateY(-50%);
  height: auto;
  overflow: hidden;
  object-fit: cover;
  /* object-position: 0 -50px; */
  margin-left: 10%;
  position: absolute;
  @media ${device.mobileS} {
    margin-left: -1%;
    top: 20px;
  }
  @media ${device.laptop} {
    margin-top: 0;
    max-width: 100%;
    top: 50%;
    margin-left: -1%;
    transform: translateY(-50%);
    height: auto;
  }
  @media ${device.laptopL} {
    margin-left: 3%;
  }
  @media ${device.laptopXL} {
    margin-left: 3%;
  }
`;

export const Li = styled.li`
  width: 10%;
  height: 100%;
  @media ${device.laptop} {
    width: 15%;
  }
  @media ${device.laptopL} {
    width: 15%;
  }
  @media ${device.laptopXL} {
    width: 14%;
  }
`;

export const NavLinkContainer = styled(NavLink)`
  display: block;
  /* background-color: gray; */
  text-align: center;
  line-height: 400%;
  text-decoration: none;
  /* color: #51a7ff; */
  color: #2a93c9;
  height: 100%;
  font-size: 1.4rem;
  &.active {
    border-bottom: 5px solid blue;
  }
  &:hover {
    background-color: #e6f0ff;
  }
  @media ${device.mobileS} {
    line-height: 250%;
    font-size: 1rem;
    width: 120px;
  }
  @media ${device.laptop} {
    line-height: 400%;
    height: 100%;
    font-size: 1.4rem;
    width: 100%;
  }
`;
//
