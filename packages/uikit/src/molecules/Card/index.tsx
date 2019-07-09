import React from 'react';
import { Link } from 'react-router-dom';

import Container from './CardContainer';
import Image from './CardImage';
import Content from './CardContent';
import { Title, Preview, Footer } from './CardElements';

interface CardProps {
  linkTo?: string;
  inverted?: boolean;
  children: any;
}

const Card: React.SFC<CardProps> = ({ linkTo, inverted = false, children }) => {
  if (!linkTo) {
    return <Container inverted={inverted}>{children}</Container>;
  }

  return (
    <Link to={linkTo}>
      <Container inverted={inverted}>{children}</Container>
    </Link>
  );
};

export default {
  Container: Card,
  Image,
  Content,
  Title,
  Preview,
  Footer
};
