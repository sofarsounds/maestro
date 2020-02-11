import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Menu, MenuItem } from '../../src';
import { cities } from '../helpers/cities';

storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .add('Playground', () => (
    <>
      <h1>Menu</h1>
      <Menu
        width={text('Width', '200px')}
        bordered={boolean('Bordered', false)}
        depth={number('Shadow Depth', 3)}
      >
        {cities.slice(0, number('Number of items', 5)).map(c => (
          <MenuItem key={c}>{c}</MenuItem>
        ))}
      </Menu>
    </>
  ));
