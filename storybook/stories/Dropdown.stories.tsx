import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Icon, Dropdown } from '../../src';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>Dropdown</h1>

      <Dropdown label="My Dropdown">
        <b>A Dropdown</b>
        <p>
          A dropdown component can be used to display help information or a
          short list of options
        </p>
      </Dropdown>

      <br />
      <br />

      <Dropdown
        renderLabel={() => (
          <b>
            Custom Trigger <Icon name="helpCircleOutline" />
          </b>
        )}
      >
        <b>Custom Trigger</b>
        <p>
          This dropdown uses the renderLabel prop on the dropdown to customise
          the appearance of the trigger used to open/close the dropdown
        </p>
      </Dropdown>
    </>
  ));
