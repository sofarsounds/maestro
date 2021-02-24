import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

import { Menu, MenuHeader, MenuItem } from '../../src';
import groupBy from '../../src/util/groupBy';

import { Spacer } from '../helpers/components';
import { cities } from '../helpers/cities';

const groupedCities = groupBy(cities, c => c.substring(0, 1));

storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=12%3A0',
    },
  })
  .add('Playground', () => (
    <>
      <h1>Menu</h1>

      <Menu
        width={text('Width', '200px')}
        bordered={boolean('Bordered', false)}
        depth={number('Shadow Depth', 3)}
        invertColor={boolean('Invert Color', false)}
      >
        {cities.slice(0, number('Number of items', 5)).map(c => (
          <MenuItem  invertColor={boolean('Invert Color', false)}  key={c}>
            {c}
          </MenuItem>
        ))}
      </Menu>

      <Spacer />

      <Menu
        width={text('Width', '200px')}
        bordered={boolean('Bordered', false)}
        depth={number('Shadow Depth', 3)}
        invertColor={boolean('Invert Color', false)}
      >
        {Object.keys(groupedCities).map(firstLetter => (
          <div key={firstLetter}>
            <MenuHeader invertColor={boolean('Invert Color', false)}>
              {firstLetter}
            </MenuHeader>
            {groupedCities[firstLetter].map((c: string) => (
              <MenuItem invertColor={boolean('Invert Color', false)} key={c}>
                {c}
              </MenuItem>
            ))}
          </div>
        ))}
      </Menu>

      <Spacer />
    </>
  ));
