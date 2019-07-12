import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { PrimaryButton, OutlineButton, LinkButton } from './index'

const Container = styled.div`
  padding: 20px;
`;

const Inversion = styled(Container)`
  background: #000;
`;

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <Container>
      <PrimaryButton
        onClick={action('Primary Button clicked')}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
        small={boolean('Small', false)}
        data-qaid="button"
      >
        {text('Label', 'Button')}
      </PrimaryButton>
    </Container>
  ))
  .add('Outline', () => (
    <Container>
      <OutlineButton
        onClick={action('Secondary Button clicked')}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
        small={boolean('Small', false)}
      >
        {text('Label', 'Button')}
      </OutlineButton>
    </Container>
  ))
  .add('Inverted', () => (
    <Inversion>
      <OutlineButton
        colour="white"
        onClick={action('Secondary Button clicked')}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
        small={boolean('Small', false)}
      >
        {text('Label', 'Button')}
      </OutlineButton>
    </Inversion>
  ))
  .add('Link', () => (
    <Container>
      <LinkButton
        onClick={action('Secondary Button clicked')}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
        small={boolean('Small', false)}
      >
        {text('Label', 'Button')}
      </LinkButton>
    </Container>
  ));
