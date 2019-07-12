import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

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
    <div style={{ width: '100%' }}>
      <Subnav.Container>
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
      </Subnav.Container>
    </div>
  ));
