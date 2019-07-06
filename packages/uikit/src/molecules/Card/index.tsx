import React from 'react';
import { Link } from 'react-router-dom';

import { Body2 } from '../../atoms/Typography';

import Container from './CardContainer';
import Image from './CardImage';
import Content from './CardContent';
import { Title, Footer } from './CardElements';

interface CardProps {
  linkTo?: string;
  children: any;
}

const Card: React.SFC<CardProps> = ({ linkTo, children }) => {
  if (!linkTo) {
    return <Container>{children}</Container>;
  }

  return (
    <Link to={linkTo}>
      <Container>{children}</Container>
    </Link>
  );
};

export default {
  Container: Card,
  Image,
  Content,
  Title,
  Preview: Body2,
  Footer
};
