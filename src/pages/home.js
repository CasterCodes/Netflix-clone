import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import AccordionContainer from "../containers/accordion";
import HeaderContainer from "../containers/header";
import { OptForm, Feature } from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programms and more.</Feature.Title>
          <Feature.Subtitle>
            Watch Anywhere. Cancel at any time
          </Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Enter your email" />
            <OptForm.Button>Try It Now !</OptForm.Button>
            <OptForm.Text>
              Ready to watch ? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
