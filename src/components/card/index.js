import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Group,
  SubTitle,
  Title,
  Meta,
  Text,
  Item,
  Image,
  Entities,
  Feature,
  FeatureText,
  FeatureTitle,
  FeatureClose,
  Content,
  Maturity,
} from "./styles/card";

const FeautureContext = createContext();

const Card = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeautureContext.Provider
      value={{
        showFeature,
        itemFeature,
        setShowFeature,
        setItemFeature,
      }}>
      <Container {...restProps}>{children}</Container>
    </FeautureContext.Provider>
  );
};

Card.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};
Card.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Card.Subtitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Card.Meta = ({ children, ...restProps }) => {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeautureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}>
      {children}
    </Item>
  );
};

Card.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

Card.Entities = ({ children, ...restProps }) => {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } =
    useContext(FeautureContext);

  return (
    showFeature && (
      <Feature
        {...restProps}
        src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
        <Content>
          <FeatureTitle>{itemFeature.title}</FeatureTitle>
          <FeatureText>{itemFeature.description}</FeatureText>
          <FeatureClose onClick={() => setShowFeature(false)}>
            <img src="/images/icons/close.png" alt="close" />
          </FeatureClose>
        </Content>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
      </Feature>
    )
  );
};
export default Card;
