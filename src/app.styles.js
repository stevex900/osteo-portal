import styled from "styled-components";
import { device } from "./components/mediaQuery/device";
export const FixedContainer = styled.div`
  background-color: gray;
  width: 50%;
`;
export const TopContainer = styled.div``;
export const RouteContainer = styled.div`
  z-index: 1;
  position: fixed;
  @media ${device.mobileS} {
    top: 12%;
    left: 0;
  }
  @media ${device.laptop} {
    top: 12.3%;
    left: 2%;
  }
  @media ${device.laptopL} {
    top: 11.5%;
    left: 2;
  }
  @media ${device.laptopXL} {
    top: 9.7%;
  }
`;
export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  /* position: relative; */
  align-content: stretch;
`;

export const OsteoMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
  flex-grow: 2;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    padding-left: 2%;
    padding-right: 2%;
    flex-grow: 2;
  }
`;
export const OsteoContainer = styled.div`
  max-width: 70%;
  width: 70%;
`;
