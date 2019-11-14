import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Checkbox } from '../../src';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>Checkbox</h1>

      <Checkbox id="opt1" name="a" onChange={action('change to 1')} checked>
        Option 1
      </Checkbox>
      <br />
      <br />
      <Checkbox
        id="opt2"
        disabled={true}
        name="b"
        onChange={action('change to 2')}
      />
      <br />
      <br />
      <Checkbox id="opt3" name="c" onChange={action('change to 3')}>
        Option 3
      </Checkbox>
      <br />
      <br />
      <Checkbox checked id="opt4" name="d" onChange={action('change to 4')}>
        Option 4
      </Checkbox>
    </>
  ));
