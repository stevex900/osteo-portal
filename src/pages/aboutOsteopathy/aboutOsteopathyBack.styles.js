import styled from "styled-components";
import { device } from "../../components/mediaQuery/device";

export const Container = styled.div`
  min-width: 20%;

  /* background-color: red; */
  height: 800px;
  @media ${device.mobileS} {
    height: 70px;
  }
  @media ${device.laptop} {
    height: 500px;
  }
  @media ${device.laptopL} {
    height: 800px;
  }
`;
export default Container;
