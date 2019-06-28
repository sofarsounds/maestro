import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Pagination } from 'uikit';

storiesOf('05 / Molecules|Pagination', module).add('Pagination', () => (
  <div>
    <h1>Pagination</h1>

    <div>
      <Pagination
        currentPage={1}
        onPageChange={p => {
          action(`Page changed to ${p}`);
        }}
        totalRecords={40}
      />
    </div>

    <br />
    <br />

    <div>
      <Pagination
        currentPage={2}
        onPageChange={p => {
          action(`Page changed to ${p}`);
        }}
        totalRecords={80}
      />
    </div>

    <br />
    <br />

    <div>
      <Pagination
        currentPage={12}
        onPageChange={p => {
          action(`Page changed to ${p}`);
        }}
        totalRecords={300}
      />
    </div>
  </div>
));
