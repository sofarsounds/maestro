import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Container, Grid, Col } from 'uikit';

const ColContent = styled.div`
  background: #ccc;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
`;

const Spacer = styled.div`
  height: 50px;
`;

storiesOf('02 / Layout|Grid', module).add('Grid', () => (
  <div>
    <Grid>
      <Col>
        <ColContent>Col 1</ColContent>
      </Col>
      <Col>
        <ColContent>Col 2</ColContent>
      </Col>
      <Col>
        <ColContent>Col 3</ColContent>
      </Col>
    </Grid>

    <Spacer />

    <Grid>
      <Col xs={12} sm={6} md={3}>
        <ColContent>Col 1</ColContent>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <ColContent>Col 2</ColContent>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <ColContent>Col 3</ColContent>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <ColContent>Col 4</ColContent>
      </Col>
    </Grid>
  </div>
));

storiesOf('02 / Layout|Container', module)
  .addDecorator(withKnobs)
  .add('Container', () => (
    <div>
      <Container
        size={select(
          'Size',
          ['default', 'small', 'large', 'fullscreen'],
          'default'
        )}
      >
        <ColContent>Container</ColContent>
      </Container>
    </div>
  ));
