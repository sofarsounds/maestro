import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  select,
  number,
  boolean
} from '@storybook/addon-knobs';
import styled from 'styled-components';

import { Container } from '../../src';

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
  ));
