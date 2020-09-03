import styled from "styled-components";
import img from "../../../assets/massage.jpg";
export const MainContainer = styled.div`
  height: 100%;
`;
export const CombineContainer = styled.div`
  border-left: 7px solid #2a93c9;
  padding-left: 3%;
`;

export const Container2 = styled.div`
  height: 300px;
  width: 60%;
  background-image: url(${img});
  background-position: center;
  margin: 0 auto;
`;
export const Container1 = styled.div`
  min-height: 30%;
  background-position: center;
  margin-top: 2%;
  text-align: left;
  background-attachment: fixed;
`;
export const Img = styled.img`
  display: block;
  width: 50%;
  height: auto;
  margin: 0 auto;
`;
export default MainContainer;
