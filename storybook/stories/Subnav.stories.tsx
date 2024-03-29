import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Subnav } from '../../src';

const links = [
  'All',
  'Backstage Pass',
  'City Secrets',
  'Highlights of the Month',
  'People of Sofar',
  'Other People',
  'Concert Reviews',
  'Another Link'
];

storiesOf('Subnav', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>Subnav</h1>
      <div style={{ width: '100%', border: '1px dotted #ccc' }}>
        <Subnav>
          {links.map(l => (
            <Subnav.Link
              key={l}
              active={l === 'Backstage Pass'}
              to="/"
              href="/"
              as="a"
            >
              {l}
            </Subnav.Link>
          ))}
        </Subnav>
      </div>
    </>
  ));
