import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Icon, Select, MenuItem } from '../../src';

import { cities, multiDimensional } from '../helpers/cities';
import { Spacer, Boundary } from '../helpers/components';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Standard', () => (
    <div style={{ paddingBottom: '500px' }}>
      <h1>Select</h1>

      <h2>Default</h2>

      <div style={{ width: '100%', display: 'flex' }}>
        <Boundary style={{ width: '300px', padding: '20px' }}>
          <Select
            handleOptionClick={action('Selected option')}
            placeholder="Select a city"
            hasError={boolean('Has Error', false)}
            disableScrollWhenOpen={boolean('Disable Scroll', false)}
            data-qaid="test-data-qaid"
            options={multiDimensional}
            getOptionValue={(option: any) => option.id}
            getOptionLabel={(option: any) => option.title}
          />
        </Boundary>

        <Boundary
          style={{ background: '#000', width: '300px', padding: '20px' }}
        >
          <Select
            invertColor
            handleOptionClick={action('Selected option')}
            placeholder="Select a city"
            hasError={boolean('Has Error', false)}
            disableScrollWhenOpen={boolean('Disable Scroll', false)}
            data-qaid="test-data-qaid"
            options={multiDimensional}
            getOptionValue={(option: any) => option.id}
            getOptionLabel={(option: any) => option.title}
          />
        </Boundary>
      </div>

      <Spacer />

      <h2>With custom icon on left hand side</h2>

      <div style={{ width: '100%', display: 'flex' }}>
        <Boundary style={{ width: '300px', padding: '20px' }}>
          <Select
            handleOptionClick={action('Selected option')}
            placeholder="Select a city"
            hasError={boolean('Has Error', false)}
            disableScrollWhenOpen={boolean('Disable Scroll', false)}
            renderLeftIcon={() => <Icon name="helpCircleOutline" />}
            data-qaid="test-data-qaid"
            options={multiDimensional}
            getOptionValue={(option: any) => option.id}
            getOptionLabel={(option: any) => option.title}
          />
        </Boundary>

        <Boundary
          style={{ background: '#000', width: '300px', padding: '20px' }}
        >
          <Select
            invertColor
            handleOptionClick={action('Selected option')}
            placeholder="Select a city"
            hasError={boolean('Has Error', false)}
            disableScrollWhenOpen={boolean('Disable Scroll', false)}
            renderLeftIcon={() => <Icon name="helpCircleOutline" />}
            data-qaid="test-data-qaid"
            options={multiDimensional}
            getOptionValue={(option: any) => option.id}
            getOptionLabel={(option: any) => option.title}
          />
        </Boundary>
      </div>

      <Spacer />

      <h2>With custom renderOption prop</h2>

      <div style={{ width: '100%', display: 'flex' }}>
        <Boundary style={{ width: '300px', padding: '20px' }}>
          <Select
            handleOptionClick={action('Selected option')}
            placeholder="Select a city"
            hasError={boolean('Has Error', false)}
            disableScrollWhenOpen={boolean('Disable Scroll', false)}
            renderLeftIcon={() => <Icon name="helpCircleOutline" />}
            data-qaid="test-data-qaid"
            options={multiDimensional}
            getOptionValue={(option: any) => option.id}
            getOptionLabel={(option: any) => option.title}
            renderOption={({ option, ...props }) => (
              <MenuItem {...props}>
                🇬🇧 {option.title}
                <span style={{ color: '#ccc' }}>, {option.country}</span>
              </MenuItem>
            )}
          />
        </Boundary>

        <Boundary
          style={{ background: '#000', width: '300px', padding: '20px' }}
        >
          <Select
            invertColor
            handleOptionClick={action('Selected option')}
            placeholder="Select a city"
            hasError={boolean('Has Error', false)}
            disableScrollWhenOpen={boolean('Disable Scroll', false)}
            renderLeftIcon={(iconProps: any) => (
              <Icon name="helpCircleOutline" {...iconProps} />
            )}
            data-qaid="test-data-qaid"
            options={multiDimensional}
            getOptionValue={(option: any) => option.id}
            getOptionLabel={(option: any) => option.title}
            renderOption={({ option, ...props }) => (
              <MenuItem {...props}>
                🇬🇧 {option.title}
                <span style={{ color: '#ccc' }}>, {option.country}</span>
              </MenuItem>
            )}
          />
        </Boundary>
      </div>
    </div>
  ));
