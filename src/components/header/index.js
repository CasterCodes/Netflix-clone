import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Logo, Container, Background, ButtonLink } from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background>{children}</Background> : children;
};

Header.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default Header;
