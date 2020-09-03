import styled from "styled-components";
import img from "../../../assets/photo.jpg";
export const MainContainer = styled.div`
  height: 100%;
`;
export const CombineContainer = styled.div`
  border-left: 7px solid #2a93c9;
  padding-left: 3%;
`;

export const Container1 = styled.div`
  background-image: url(${img});
  min-height: 25vh;
  margin-top: 2%;
  position: relative;

  background-position: center;

  /* z-index: 8; */
  text-align: left;
  background-attachment: fixed;
`;
export const Container2 = styled.div``;
export default MainContainer;
