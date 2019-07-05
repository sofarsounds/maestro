import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs } from '@storybook/addon-knobs';
import { Pagination, Select, Option } from 'uikit';

let citiesData = [
  { name: 'London', value: 'london' },
  { name: 'Cardiff', value: 'cardiff' },
  { name: 'Bristol', value: 'bristol' }
];

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
    <Select placeholder="Select a city">
      {({ onSelect }: any) =>
        citiesData.map((cityData, index) => (
          <Option
            key={index}
            value={cityData.value}
            onClick={onSelect}
            name={cityData.name}
          />
        ))
      }
    </Select>
  </div>
));
