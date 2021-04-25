import React from "react";

import { Container, Button, Input, Text } from "./styles/optform";

const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default OptForm;
