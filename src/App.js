import React from "react";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutMe/AboutMe";
import Admin from "./pages/admin/Admin";
import Contact from "./pages/contact/Contact";

import Offer from "./pages/offer/Offer";
import Gallery from "./pages/gallery/Gallery";
import AboutOsteopathy from "./pages/aboutOsteopathy/AboutOsteopathy";
import AboutOsteopathyBack from "./pages/aboutOsteopathy/AboutOsteopathyBack";
import {
  Container,
  OsteoMainContainer,
  OsteoContainer,
  FixedContainer,
  RouteContainer,
  TopContainer,
} from "./app.styles";
import { Route } from "react-router-dom";

import OsteopathyHistory from "./pages/aboutOsteopathy/osteopathyHistory/osteopathyHistory";
import WhatIsOsteopathy from "./pages/aboutOsteopathy/whatIsOsteopathy/whatIsOsteopathy";
import WhatCanBeCured from "./pages/aboutOsteopathy/whatCanBeCured/whatCanBeCured";
const App = () => {
  return (
    <Container>
      {<Navigation />}
      <TopContainer>
        <Route path="/" component={Home} exact={true} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/admin" component={Admin} />
        <Route path="/contact" component={Contact} />

        <Route path="/offer" component={Offer} />
        <Route path="/gallery" component={Gallery} />
        <OsteoMainContainer>
          {/* <FixedContainer></FixedContainer> */}
          <RouteContainer>
            <Route main path="/osteopathy" component={AboutOsteopathy} />
          </RouteContainer>
          <Route main path="/osteopathy" component={AboutOsteopathyBack} />
          <OsteoContainer>
            <Route
              secondary
              path="/osteopathy/osteopathyHistory"
              component={OsteopathyHistory}
            />
            <Route
              secondary
              path="/osteopathy/whatIsOsteopathy"
              component={WhatIsOsteopathy}
            />
            <Route
              secondary
              path="/osteopathy/whatCanBeCured"
              component={WhatCanBeCured}
            />
          </OsteoContainer>
        </OsteoMainContainer>
      </TopContainer>
      <Footer />
    </Container>
  );
};

export default App;
