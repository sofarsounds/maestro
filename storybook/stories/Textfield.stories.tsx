import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Textfield } from '../../src';

storiesOf('Textfield', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>Textfield</h1>
      <Textfield
        disabled={boolean('Disabled', false)}
        hasError={boolean('Has Error', false)}
        placeholder={text('Placeholder', 'Type me hard...')}
      />
    </>
  ));
