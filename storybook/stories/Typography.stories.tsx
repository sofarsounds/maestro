import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import {
  Title,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body,
  Body2,
  Overline,
  Caption
} from '../../src';

import { Boundary as Bound } from '../helpers/components';

const Boundary = styled(Bound)`
  margin-bottom: 25px;
`;

const Spacer = styled.div`
  height: 25px;
`;

const headingTags = [H1, H2, H3, H4, H5, H6];
const bodyTags = [Body, Body2];

storiesOf('Typography', module)
  .add('Title', () => (
    <>
      <h1>Titles</h1>
      <Boundary>
        <Title>{text('Content', 'I am a title element')}</Title>
      </Boundary>
    </>
  ))
  .add('Headings', () => (
    <>
      <h1>Headings</h1>
      {headingTags.map((T: any, key: number) => (
        <Boundary key={key}>
          <T>Heading {key + 1}</T>
        </Boundary>
      ))}
    </>
  ))
  .add('Body', () => (
    <>
      <h1>Body Tags</h1>
      {bodyTags.map((T: any, key: number) => (
        <Boundary key={key}>
          <T>Body {key + 1}</T>
        </Boundary>
      ))}
      <Boundary>
        <Overline>Overline Tag</Overline>
      </Boundary>
      <Boundary>
        <Caption>Caption Tag</Caption>
      </Boundary>
    </>
  ));
