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
import {
  Icon,
  Dropdown,
  Menu,
  MenuItem,
  Select,
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

      <div
        style={{
          marginTop: '200px',
          textAlign: 'center'
        }}
      >
        <Dropdown
          placement={text('Placement', 'bottom-left') as any}
          offset={{
            vertical: text('Offset Y', '0px'),
            horizontal: text('Offset X', '0px')
          }}
          renderLabel={() => <PrimaryButton block>Click Me</PrimaryButton>}
        >
          <b>A Dropdown</b>
          <p>I am a dropdown</p>
        </Dropdown>
      </div>
    </div>
  ));
