import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Divider } from '../../src';
import { Boundary } from '../helpers/components';

storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>Divider</h1>
      <Boundary>
        <Divider space={number('Space', 11)} />
      </Boundary>
    </>
  ));
