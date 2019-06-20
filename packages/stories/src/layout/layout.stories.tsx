import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Container, Grid, Col, Spacer } from 'uikit';

const ColContent = styled.div`
  background: #ccc;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
`;

const Space = styled.div`
  height: 25px;
`;

const Ruler = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
`;

interface RulerProps {
  small?: boolean;
}
const LineContainer = styled(Spacer)<RulerProps>`
  display: flex;
  flex-direction: ${({ small }) => (small ? 'column-reverse' : 'column')};
  align-items: center;
  height: 100%;
`;
const NumberDiv = styled.div`
  color: red;
  font-size: 12px;
`;
const Line = styled(Spacer)<RulerProps>`
  border-left: 1px solid red;
  height: ${({ small }) => (small ? '50%' : '100%')};
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

storiesOf('02 / Layout|Spacer', module)
  .addDecorator(withKnobs)
  .add('Spacer', () => (
    <div>
      <h1>Main Ruler</h1>
      <p>
        The main ruler uses multiple of 4s from 0 up to 80 as displayed below.
      </p>
      <Ruler>
        {Array.from({ length: 21 }, (e, i) => (
          <LineContainer small={i % 2 === 1} mr={4}>
            <NumberDiv>{i * 4}</NumberDiv>
            <Line small={i % 2 === 1} />
          </LineContainer>
        ))}
      </Ruler>

      <Space />

      <h1>Spacer Component</h1>
      <p>
        Spacer components takes "m" and "p" for "margin" and "padding".
        <br />
        You can then add t, r, l, b, x, y after m and p for top, right, left,
        bottom, horizontal, vertical
      </p>
      <ColContent style={{ textAlign: 'left', padding: 0 }}>
        <Spacer
          style={{
            border: '1px solid red',
            width: '150px',
            background: '#fff'
          }}
          m={text('Margin', null)}
          mt={text('Margin Top', null)}
          mr={text('Margin Right', null)}
          mb={text('Margin Bottom', null)}
          ml={text('Margin Left', null)}
          mx={text('Margin X', null)}
          my={text('Margin Y', null)}
          p={text('Padding', null)}
          pt={text('Padding Top', null)}
          pr={text('Padding Right', null)}
          pb={text('Padding Bottom', null)}
          pl={text('Padding Left', null)}
          px={text('Padding X', null)}
          py={text('Padding Y', null)}
        >
          Position Me
        </Spacer>
      </ColContent>
    </div>
  ));
