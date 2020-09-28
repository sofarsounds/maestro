import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

import { Pagination } from '../../src';

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=12%3A361',
    },
  })
  .add('Playground', () => (
    <>
      <h1>Pagination</h1>
      <Pagination
        currentPage={number('Current Page', 1)}
        onPageChange={p => action(`Page changed to ${p}`)}
        totalRecords={number('Total Records', 40)}
        perPage={number('Per Page', 8)}
      />
    </>
  ));
