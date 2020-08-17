import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

import { Textfield } from '../../src';

storiesOf('Textfield', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=12%3A42',
    },
  })
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
