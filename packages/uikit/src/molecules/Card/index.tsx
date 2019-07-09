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
  'data-qaid'?: string;
}

const Card: React.SFC<CardProps> = ({
  linkTo,
  inverted = false,
  children,
  'data-qaid': qaId
}) => {
  if (!linkTo) {
    return (
      <Container inverted={inverted} data-qaid={qaId}>
        {children}
      </Container>
    );
  }

  return (
    <Link to={linkTo}>
      <Container inverted={inverted} data-qaid={qaId}>
        {children}
      </Container>
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
