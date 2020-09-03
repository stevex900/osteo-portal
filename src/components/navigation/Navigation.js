import React from "react";
import logo from "../../assets/logo2.png";
import { ReactComponent as Hamburger } from "../../assets/menu/hamburgerS.svg";
import { connect } from "react-redux";
import { menuActiveChange } from "../../redux/text/text.actions";
import { selectActive } from "../../redux/text/text.selectors";
import {
  Nav,
  NavFixed,
  NavLinkContainer as NavLink,
  Ul,
  Li,
  Img,
  Container,
  HamburgerContainer,
  ContainerHamburgerWindow,
} from "./navigation.styles";

const list = [
  { name: "Home", path: "/", exact: true },
  { name: "O mnie", path: "/aboutMe" },
  { name: "Osteopatia", path: "/osteopathy" },
  { name: "Oferta", path: "/offer" },
  { name: "Galeria", path: "/gallery" },
  { name: "Kontakt", path: "/contact" },
  { name: "Admin", path: "/admin" },
];

const Navigation = ({ menuActiveChange, active }) => {
  const handleChange = () => {
    menuActiveChange(!active);
  };
  const handleClose = () => {
    menuActiveChange(null);
  };
  const menu = list.map((item) => (
    <Li key={item.name}>
      <NavLink
        onClick={handleClose}
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </Li>
  ));

  return (
    <>
      <Nav>
        <Container secondary>
          <Img src={logo} alt="logo" />
          <Ul>{menu}</Ul>
        </Container>
        <Container primary>
          <HamburgerContainer>
            <Hamburger onClick={handleChange} />
          </HamburgerContainer>
          <Img src={logo} alt="logo" />
        </Container>
        {active && (
          <ContainerHamburgerWindow>
            <Ul secondary>{menu}</Ul>
          </ContainerHamburgerWindow>
        )}
      </Nav>
      <NavFixed />
    </>
  );
};
const mapStateToProps = (state) => ({ active: selectActive(state) });
const mapDispatchToProps = (dispatch) => ({
  menuActiveChange: (item) => dispatch(menuActiveChange(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
