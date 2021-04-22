import React, { useState, useContext, createContext } from "react";
import {
  Inner,
  Item,
  Container,
  Title,
  Text,
  Body,
  Header,
  Frame,
} from "./styles/accordion";

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return <Inner {...restProps}>{children}</Inner>;
};
Accordion.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Accordion.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}>
      {children}
      {toggleShow ? (
        <img src="images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow && <Body {...restProps}>{children}</Body>;
};
Accordion.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
export default Accordion;
