import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Pagination } from '../../src';

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
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
