import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  LinkButton,
  Textfield,
  Textarea,
  Select,
  Badge
} from 'uikit';

storiesOf('03 / Atoms|Form Elements', module)
  .addDecorator(withKnobs)
  .add('Buttons', () => (
    <div>
      <PrimaryButton
        onClick={action('Primary Button clicked')}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
      >
        {text('Label', 'Button')}
      </PrimaryButton>

      <br />
      <br />

      <SecondaryButton
        onClick={action('Secondary Button clicked')}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
      >
        {text('Label', 'Button')}
      </SecondaryButton>

      <br />
      <br />

      <TertiaryButton
        onClick={action('Tertiary Button clicked')}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
      >
        {text('Label', 'Button')}
      </TertiaryButton>

      <br />
      <br />

      <LinkButton
        onClick={action('Link Button clicked')}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
      >
        {text('Label', 'Button')}
      </LinkButton>
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
  ));
