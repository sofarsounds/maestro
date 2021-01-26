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
        keepInViewPort={boolean('Keep In ViewPort', false)}
        label="Click me to open the dropdown"
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
      >
        <p style={{ width: '200px' }}>
          I am the contents of a dropdown without a flyout container
        </p>
      </Dropdown>
    </>
  ))
  .add('Do not close on click of dropdown', () => {
    const keepOpenOnClick = boolean('keepOpenOnClick', true);

    return (
    <>
      <h1>Do not close on click of dropdown</h1>
      <Dropdown
        flyoutContainer={false}
        offset={{ vertical: 50 }}
        renderLabel={isOpen => (
          <PrimaryButton>{isOpen ? 'Open' : 'Close'}</PrimaryButton>
        )}
        keepOpenOnClick={keepOpenOnClick}
      >
        <p style={{ width: '200px' }}>
          I am the contents of a dropdown that stays open on click.
        </p>
      </Dropdown>
    </>
  )});
