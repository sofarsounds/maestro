import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import {
  PrimaryButton,
  OutlineButton,
  LinkButton,
  Textfield,
  Textarea,
  Badge,
  Divider,
  Snackbar
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
          small={boolean('Small', false)}
          data-qaid="button"
        >
          {text('Label', 'Button')}
        </PrimaryButton>
      </Container>

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

      <Container>
        <OutlineButton
          colour="black"
          onClick={action('Secondary Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
          small={boolean('Small', false)}
        >
          {text('Label', 'Button')}
        </OutlineButton>
      </Container>

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
        rows={number('Rows', 5)}
        disabled={boolean('Disabled', false)}
        hasError={boolean('Has Error', false)}
        placeholder={text('Placeholder', 'Type me hard...')}
      />
    </div>
  ));

storiesOf('03 / Atoms|Others', module)
  .addDecorator(withKnobs)
  .add('Badge', () => (
    <div>
      <h1>Badge</h1>

      <div style={{ display: 'flex' }}>
        <Badge clickable={boolean('Clickable', false)}>
          {text('Content', '1')}
        </Badge>
        <Badge colour="primary" clickable={boolean('Clickable', false)}>
          {text('Content', '1')}
        </Badge>
      </div>
    </div>
  ))
  .add('Divider', () => (
    <div>
      A Divider
      <Divider />
      More Content
    </div>
  ))
  .add('Snackbar', () => (
    <Snackbar onCancel={action('cancel clicked')}>
      No internet connection detected. Sofar will automatically try to reconnect
      when it detects an internet connection (error code:4)
    </Snackbar>
  ));
