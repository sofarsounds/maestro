import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Menu, MenuHeader, MenuItem } from '../../src';
import groupBy from '../../src/util/groupBy';

import { Spacer } from '../helpers/components';
import { cities } from '../helpers/cities';

const groupedCities = groupBy(cities, c => c.substring(0, 1));

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

      <Spacer />

      <Menu
        width={text('Width', '200px')}
        bordered={boolean('Bordered', false)}
        depth={number('Shadow Depth', 3)}
      >
        {Object.keys(groupedCities).map(firstLetter => (
          <div key={firstLetter}>
            <MenuHeader>{firstLetter}</MenuHeader>
            {groupedCities[firstLetter].map((c: string) => (
              <MenuItem key={c}>{c}</MenuItem>
            ))}
          </div>
        ))}
      </Menu>

      <Spacer />
    </>
  ));
