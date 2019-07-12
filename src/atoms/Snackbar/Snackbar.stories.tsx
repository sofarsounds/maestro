import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import Snackbar from './index'

storiesOf('Snackbar', module)
  .addDecorator(withKnobs)
  .add('Snackbar', () => (
    <Snackbar onCancel={() => action('on cancel triggered')}>
      {text(
        'Content',
        'No internet connection detected. Sofar will automatically try to reconnect when it detects an internet connection (error code:4)'
      )}
    </Snackbar>
  ));
