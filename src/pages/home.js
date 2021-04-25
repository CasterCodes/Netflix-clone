import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import AccordionContainer from "../containers/accordion";

const Home = () => {
  return (
    <>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
