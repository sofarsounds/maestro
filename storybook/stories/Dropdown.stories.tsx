import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { Icon, Dropdown, Menu, Option, Select, PrimaryButton } from '../../src';
import cities from '../helpers/cities';

const mockClick = () => {
  console.log('dog');
};

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>Dropdown</h1>

      <Dropdown label="I am a clickable label">
        <b>A Dropdown</b>
        <p>
          A dropdown component can be used to display help information or a
          short list of options
        </p>
      </Dropdown>

      <br />
      <br />

      <Dropdown
        offsetTop={55}
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

      <br />
      <br />

      <Dropdown
        flyoutContainer={false}
        offsetTop={0}
        renderLabel={isOpen => (
          <PrimaryButton>{isOpen ? 'Open' : 'Close'}</PrimaryButton>
        )}
      >
        <p>I am the contents of a dropdown without a flyout container</p>
      </Dropdown>
    </>
  ));
