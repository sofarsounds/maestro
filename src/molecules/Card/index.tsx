import React from 'react';
import { Link } from 'react-router-dom';

import Container from './CardContainer';
import Image, { ImageProps } from './CardImage';
import Content from './CardContent';
import { Title, Preview, Footer } from './CardElements';

interface CardProps {
  linkTo?: string;
  inverted?: boolean;
  children: any;
  'data-qaid'?: string;
}

interface Composition {
  Image: React.SFC<ImageProps>;
  Content: React.SFC;
  Title: React.SFC;
  Preview: React.SFC;
  Footer: React.SFC;
}

const Card: React.SFC<CardProps> & Composition = ({
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
      <Container clickable inverted={inverted} data-qaid={qaId}>
        {children}
      </Container>
    </Link>
  );
};

Card.Image = Image;
Card.Content = Content;
Card.Title = Title;
Card.Preview = Preview;
Card.Footer = Footer;

export default Card;
