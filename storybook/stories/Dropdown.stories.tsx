import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Icon, Dropdown, Select, PrimaryButton } from '../../src';

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
        flyoutContainer={false}
        renderLabel={isOpen => (
          <PrimaryButton>{isOpen ? 'Open' : 'Close'}</PrimaryButton>
        )}
      >
        <Select placeholder="cat" />
      </Dropdown>
    </>
  ));
