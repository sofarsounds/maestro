import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import {
  Select,
  Option
} from 'uikit';

let citiesData = [
  { name: 'London', value: 'london' },
  { name: 'Cardiff', value: 'cardiff' },
  { name: 'Bristol', value: 'bristol' }
];

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Playground', () => (
    <div>
    <Select
      readonly
      handleOptionClick={action('Callback')}
      placeholder="Select a city"
    >
      {({ optionClick }: any) =>
        citiesData.map((cityData, index) => (
          <Option key={index} value={cityData.value} onClick={optionClick}>
            {cityData.name}
          </Option>
        ))
      }
    </Select>
    </div>
  ))
