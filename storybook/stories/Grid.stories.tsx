import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { Grid, Col } from '../../src';

const ColContent = styled.div`
  background: #ccc;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  height: 100%;
`;

const Space = styled.div`
  height: 25px;
`;

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
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

      <Space />

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

      <Space />

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

      <Space />

      <h2>Row Span</h2>
      <Grid>
        <Col xs={12} sm={6} rowSpan={2}>
          <ColContent>A column that will take 2 rows in height.</ColContent>
        </Col>
        <Col xs={12} sm={6}>
          <ColContent>A column that will take 1 row.</ColContent>
        </Col>
        <Col xs={12} sm={6}>
          <ColContent>A column that will take 1 row.</ColContent>
        </Col>
        <Col xs={12} sm={4}>
          <ColContent>A column that will take 1 row.</ColContent>
        </Col>
        <Col xs={12} sm={4}>
          <ColContent>A column that will take 1 row.</ColContent>
        </Col>
        <Col xs={12} sm={4}>
          <ColContent>A column that will take 1 row.</ColContent>
        </Col>
      </Grid>

      <Space />
    </div>
  ));
