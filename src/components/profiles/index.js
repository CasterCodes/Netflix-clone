import React from "react";
import { Container, Title, List, Picture, Name, User } from "./styles/profiles";

const Profiles = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Profiles.Title = ({ children, restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

Profiles.Picture = ({ ...restProps }) => {
  return <Picture {...restProps} />;
};

Profiles.User = ({ children, ...restProps }) => {
  return <User {...restProps}>{children}</User>;
};

Profiles.Name = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};

export default Profiles;
