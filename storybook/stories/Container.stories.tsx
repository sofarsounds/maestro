import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { Container, Grid, Col } from '../../src';

const ColContent = styled.div`
  background: #ccc;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
`;

storiesOf('Container', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <div>
      <h1>Container</h1>
      <Container>
        <ColContent>Container</ColContent>
      </Container>
    </div>
  ))
  .add('Basic with grid', () => (
    <div>
      <h1>Container</h1>
      <Container>
        <Grid>
          {[...Array(12).keys()].map(x => (
            <Col key={x} sm={1}>
              <ColContent>{x + 1}</ColContent>
            </Col>
          ))}
        </Grid>
      </Container>
    </div>
  ));
