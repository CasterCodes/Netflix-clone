import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Container>
        <Header.Logo to={ROUTES.HOME} alt="netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Container>
      {children}
    </Header>
  );
};

export default HeaderContainer;
