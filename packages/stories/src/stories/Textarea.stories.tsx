import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import {
  Textarea
} from 'uikit';

storiesOf('Textarea', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Textarea
      disabled={boolean('Disabled', false)}
      hasError={boolean('Has Error', false)}
      placeholder={text('Placeholder', 'Type me hard...')}
    />
  ))
