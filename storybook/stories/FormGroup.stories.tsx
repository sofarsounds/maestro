import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import { Textfield, FormGroup, Icon, Dropdown } from '../../src';

storiesOf('Form Group', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>FormGroup</h1>
      <FormGroup
        label={text('Label', 'Email address')}
        required={boolean('Required', true)}
        errorMsg={text('Error Msg', null)}
      >
        <Textfield placeholder="your@email.com" />
      </FormGroup>
    </>
  ))
  .add('With Icon', () => (
    <>
      <h1>FormGroup</h1>
      <FormGroup
        label="Helpful"
        required={boolean('Required', true)}
        renderIcon={() => (
          <Dropdown renderLabel={isOpen => <Icon name="helpCircleOutline" />}>
            <p>I am the helptext for this input field.</p>
          </Dropdown>
        )}
      >
        <Textfield placeholder="your@email.com" />
      </FormGroup>
    </>
  ));
