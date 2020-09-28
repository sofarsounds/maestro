import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Spinner } from '../../src';
import { Boundary } from '../helpers/components';

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const invert = boolean('Invert', false);
    const size = text('Size', '25px');

    return (
      <>
        <h1>Spinner</h1>
        <Boundary
          style={{
            display: 'inline-block',
            background: invert ? '#000' : '#fff',
            padding: '20px'
          }}
        >
          <Spinner invert={invert} size={size} />
        </Boundary>
      </>
    );
  });
