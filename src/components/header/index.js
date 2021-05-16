import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Logo,
  Container,
  Background,
  ButtonLink,
  Feature,
  Text,
  Link,
  Group,
  Dropdown,
  Profile,
  Picture,
  FeatureCallOut,
} from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
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

Header.Feature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Header.TextLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Header.FeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Picture = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={src} />;
};

Header.Profile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

export default Header;
