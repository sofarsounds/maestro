import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components';

import { ProgressBar } from '../../src';

const Container = styled.div``;

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .add('Default', () => (
    <>
      <h1>ProgressBar</h1>
      <Container>
        <ProgressBar width={text('Width', '200px')} percentage={number('Percentage', 37)} />
      </Container>
    </>
  ));
