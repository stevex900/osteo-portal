import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../components/mediaQuery/device";
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  width: 100%;
  justify-content: space-between;
  margin-top: 8%;
  @media ${device.mobileS} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    flex-direction: column;
    min-width: 20vw;
    width: 100%;
    justify-content: space-between;
    margin-top: 8%;
    min-width: 23vw;
    width: 60%;
  }
  @media ${device.laptopXL} {
    min-width: 20vw;
    width: 100%;
  }
`;
export const ButtonNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  background-color: #3598cc;
  color: #f7fafb;
  text-align: center;
  width: 100%;
  border-radius: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
  transition: 0.5s;
  @media ${device.mobileS} {
    &:hover {
      background-color: #3598cc;
      color: #f7fafb;
      border: 1px solid #3598cc;
      border-radius: 8px;
      /* transform: translate(5%); */
    }
    &:focus {
      outline: none;
      border-radius: 8px;
    }
    &.active {
      background-color: #f7fafb;
      color: #3598cc;
      border: 1px solid #3598cc;
      border-radius: 8px;
      /* transform: translate(5%); */
    }
  }
  @media ${device.laptop} {
    font-size: 18px;
    line-height: 290%;
    padding: 20px;
    height: 100px;
    &:hover {
      background-color: #3598cc;
      color: #f7fafb;
      border: 1px solid #3598cc;
      border-radius: 8px;
      transform: translate(5%);
    }
    &:focus {
      outline: none;
      border-radius: 8px;
    }
    &.active {
      background-color: #f7fafb;
      color: #3598cc;
      border: 1px solid #3598cc;
      border-radius: 8px;
      transform: translate(5%);
    }
  }
  @media ${device.laptopXL} {
    line-height: 150%;
    font-size: 30px;
    padding: 50px;
    width: 100%;
    height: 150px;
    border-radius: 8px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
