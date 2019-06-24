import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuaternaryButton,
  LinkButton,
  Textfield,
  Textarea,
  Select
} from 'uikit';

const Container = styled.div`
  padding: 20px;
`;

const Inversion = styled(Container)`
  background: #000;
`;

storiesOf('03 / Atoms|Form Elements', module)
  .addDecorator(withKnobs)
  .add('Buttons', () => (
    <div>
      <Container>
        <PrimaryButton
          onClick={action('Primary Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
        >
          {text('Label', 'Button')}
        </PrimaryButton>
      </Container>

      <Container>
        <SecondaryButton
          onClick={action('Secondary Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
        >
          {text('Label', 'Button')}
        </SecondaryButton>
      </Container>

      <Container>
        <TertiaryButton
          onClick={action('Tertiary Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
        >
          {text('Label', 'Button')}
        </TertiaryButton>
      </Container>

      <Inversion>
        <QuaternaryButton
          onClick={action('Tertiary Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
        >
          {text('Label', 'Button')}
        </QuaternaryButton>
      </Inversion>

      <Container>
        <LinkButton
          onClick={action('Link Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
        >
          {text('Label', 'Button')}
        </LinkButton>
      </Container>
    </div>
  ))
  .add('Textfield', () => (
    <div>
      <Textfield
        disabled={boolean('Disabled', false)}
        hasError={boolean('Has Error', false)}
        placeholder={text('Placeholder', 'Type me hard...')}
      />
    </div>
  ))
  .add('Textarea', () => (
    <div>
      <Textarea
        rows={number('Containers', 5)}
        disabled={boolean('Disabled', false)}
        hasError={boolean('Has Error', false)}
        placeholder={text('Placeholder', 'Type me hard...')}
      />
    </div>
  ))
  .add('Select', () => (
    <div>
      <Select
        disabled={boolean('Disabled', false)}
        hasError={boolean('Has Error', false)}
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
    </div>
  ));
