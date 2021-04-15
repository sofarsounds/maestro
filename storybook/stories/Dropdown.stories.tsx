import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
  Icon,
  Dropdown,
  Menu,
  MenuItem,
  PrimaryButton
} from '../../src';
import cities from '../helpers/cities';

const mockClick = () => {
  console.log('dog');
};

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div style={{ height: '1000px' }}>
      <h1>Dropdown</h1>

      <Dropdown
        disableScrollWhenOpen={boolean('Disable Scroll', false)}
        keepInViewPort={{
          vertical: boolean('Keep In ViewPort (Vertical)', false),
          horizontal: boolean('Keep In ViewPort (Horizontal)', false),
        }}
        label="Click me to open the dropdown"
        invertColor={boolean('Invert Color', false)}
      >
        <b>A Dropdown</b>
        <p>
          A dropdown component can be used to display help information or a
          short list of options
        </p>
      </Dropdown>
    </div>
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
        invertColor={boolean('Invert Color', false)}
      >
        <Menu width={'200px'}>
          {cities.slice(0, 4).map((city, index) => (
            <MenuItem key={index} onClick={mockClick}>
              {city}
            </MenuItem>
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
        invertColor={boolean('Invert Color', false)}
      >
        <p style={{ width: '200px' }}>
          I am the contents of a dropdown without a flyout container
        </p>
      </Dropdown>
    </>
  ));
