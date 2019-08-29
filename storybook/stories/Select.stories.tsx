import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Select, Option } from '../../src';

import cities from '../helpers/cities';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Playground', () => (
    <div style={{ height: '1000px' }}>
      <h1>Select</h1>

      <Select
        readonly
        handleOptionClick={action('Callback')}
        placeholder="Select a city"
        hasError={boolean('Has Error', false)}
        disableScrollWhenOpen={boolean('Disable Scroll', false)}
      >
        {({ optionClick }: any) =>
          cities.map((city, index) => (
            <Option key={index} value={city} onClick={optionClick}>
              {city}
            </Option>
          ))
        }
      </Select>
    </div>
  ));
