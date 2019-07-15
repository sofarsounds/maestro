import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Textarea } from '../../src';

storiesOf('Textarea', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>Textarea</h1>
      <Textarea
        disabled={boolean('Disabled', false)}
        hasError={boolean('Has Error', false)}
        placeholder={text('Placeholder', 'Type me hard...')}
      />
    </>
  ));
