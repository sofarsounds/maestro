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
  height: 25px;
`;

storiesOf('02 / Layout|Grid', module).add('Grid', () => (
  <div>
    <h1>Grid</h1>

    <h2>A standard 12 column grid</h2>
    <Grid>
      {[...Array(12).keys()].map(x => (
        <Col key={x} sm={1}>
          <ColContent>{x + 1}</ColContent>
        </Col>
      ))}
    </Grid>

    <Spacer />

    <Grid>
      <Col sm={4}>
        <ColContent>One of three columns</ColContent>
      </Col>
      <Col sm={4}>
        <ColContent>One of three columns</ColContent>
      </Col>
      <Col sm={4}>
        <ColContent>One of three columns</ColContent>
      </Col>
    </Grid>

    <Spacer />

    <h2>Customise Grid Spacing</h2>
    <Grid gap="5px">
      <Col sm={6}>
        <ColContent>Row 1 / Column 1</ColContent>
      </Col>
      <Col sm={6}>
        <ColContent>Row 1 / Column 2</ColContent>
      </Col>
      <Col sm={6}>
        <ColContent>Row 2 / Column 1</ColContent>
      </Col>
      <Col sm={6}>
        <ColContent>Row 2 / Column 2</ColContent>
      </Col>
    </Grid>

    <h2>Custom Column Spacing</h2>
    <Grid colGap="80px">
      <Col sm={6}>
        <ColContent>Column 1</ColContent>
      </Col>
      <Col sm={6}>
        <ColContent>Column 2</ColContent>
      </Col>
    </Grid>

    <h2>Custom Row Spacing</h2>
    <Grid rowGap="80px">
      <Col>
        <ColContent>Row 1</ColContent>
      </Col>
      <Col>
        <ColContent>Row 2</ColContent>
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
