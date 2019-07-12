import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Textfield } from '../../src';

storiesOf('Textfield', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Textfield
      disabled={boolean('Disabled', false)}
      hasError={boolean('Has Error', false)}
      placeholder={text('Placeholder', 'Type me hard...')}
    />
  ));
