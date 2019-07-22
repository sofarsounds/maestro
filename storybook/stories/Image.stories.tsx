import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Image } from '../../src';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div style={{ maxWidth: '600px' }}>
      <h1>Responsive Image</h1>
      <Image
        src={text(
          'URL',
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        )}
      />
    </div>
  )).add('With Caption', () => (
    <div style={{ maxWidth: '600px' }}>
      <h1>Responsive Image</h1>
      <Image
        src={text(
          'URL',
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        )}
        caption={text(
          'Caption',
          'A caption'
        )}
      />
    </div>
  ));
