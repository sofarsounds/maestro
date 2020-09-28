import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

import { Textfield, FormGroup, Icon, Dropdown } from '../../src';

storiesOf('Form Group', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=12%3A42',
    },
  })
  .add('Default', () => (
    <>
      <h1>FormGroup</h1>
      <FormGroup
        label={text('Label', 'Email address')}
        required={boolean('Required', true)}
        errorMsg={text('Error Msg', '')}
        data-qaid="formgroup"
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
          <Dropdown renderLabel={() => <Icon name="helpCircleOutline" />}>
            <p>I am the helptext for this input field.</p>
          </Dropdown>
        )}
      >
        <Textfield placeholder="your@email.com" />
      </FormGroup>
    </>
  ));
