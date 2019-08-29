import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  number,
  boolean,
  select
} from '@storybook/addon-knobs';
import { Icon, Dropdown, Menu, Option, Select, PrimaryButton } from '../../src';
import cities from '../helpers/cities';

const mockClick = () => {
  console.log('dog');
};

const positions = ['top', 'right', 'bottom', 'left'];

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>Dropdown</h1>

      <Dropdown label="Click me to open the dropdown">
        <b>A Dropdown</b>
        <p>
          A dropdown component can be used to display help information or a
          short list of options
        </p>
      </Dropdown>
    </>
  ))
  .add('With Offset', () => (
    <>
      <h1>Dropdown with Offset</h1>
      <Dropdown
        offset={{ vertical: 55 }}
        flyoutContainer={false}
        renderLabel={isOpen => (
          <>
            <span style={{ marginRight: '5px', color: 'inherit' }}>
              My Account (with offset Menu)
            </span>
            <Icon
              color={'black'}
              name={isOpen ? 'caretUp' : 'caretDown'}
              size={'8px'}
            />
          </>
        )}
      >
        <Menu width={200} depth={4}>
          {cities.slice(0, 4).map((city, index) => (
            <Option key={index} value={city} onClick={mockClick}>
              {city}
            </Option>
          ))}
        </Menu>
      </Dropdown>
    </>
  ))
  .add('Without Flyout Container', () => (
    <>
      <h1>Without Flyout Container</h1>
      <Dropdown
        flyoutContainer={false}
        offset={{ vertical: 50 }}
        renderLabel={isOpen => (
          <PrimaryButton>{isOpen ? 'Open' : 'Close'}</PrimaryButton>
        )}
      >
        <p style={{ width: '200px' }}>
          I am the contents of a dropdown without a flyout container
        </p>
      </Dropdown>
    </>
  ));
