import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs } from '@storybook/addon-knobs';
import { Pagination, SelectComponent } from 'uikit';

storiesOf('05 / Molecules|Pagination', module)
  .addDecorator(withKnobs)
  .add('Pagination', () => (
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

storiesOf('05 / Molecules|Select Input', module).add('Select Input', () => (
  <div>
    <h1>Select</h1>

    <div>
      <SelectComponent />
    </div>
  </div>
));

storiesOf('05 / Molecules|Select', module).add('Select Input', () => {
  return (
    <div>
      <h1>Select</h1>

      <div>
        <SelectComponent />
      </div>
    </div>
  );
});
