import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

import { Snackbar } from '../../src';

storiesOf('Snackbar', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=10%3A35',
    },
  })
  .add('Snackbar', () => (
    <>
      <h1>Snackbar</h1>
      <Snackbar onCancel={() => action('on cancel triggered')}>
        {text(
          'Content',
          'No internet connection detected. Sofar will automatically try to reconnect when it detects an internet connection (error code:4)'
        )}
      </Snackbar>
    </>
  ));
