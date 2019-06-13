import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  LinkButton
} from '../../../uikit/src';

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
  .add('Textfield', () => <div>Atoms...</div>)
  .add('Textarea', () => <div>Atoms...</div>);
