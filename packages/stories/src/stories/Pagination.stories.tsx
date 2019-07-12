import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Pagination } from 'uikit';

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add('Playground', () => (
    <Pagination
      currentPage={number('Current Page', 1)}
      onPageChange={p => action(`Page changed to ${p}`)}
      totalRecords={number('Total Records', 40)}
      perPage={number('Per Page', 8)}
    />
  ));
