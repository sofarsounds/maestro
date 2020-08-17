import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

import { Radio } from '../../src';

storiesOf('Radio Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=9%3A394',
    },
  })
  .add('Default', () => (
    <>
      <h1>Radio Button</h1>

      <Radio id="opt1" value="1" name="opt" onChange={action('change to 1')}>
        Option 1
      </Radio>
      <br />
      <br />
      <Radio id="opt2" value="2" name="opt" onChange={action('change to 2')}>
        Option 2
      </Radio>
      <br />
      <br />
      <Radio id="opt3" value="3" name="opt" onChange={action('change to 3')}>
        Option 3
      </Radio>
      <br />
      <br />
      <Radio id="opt4" value="4" name="opt" disabled>
        Disabled
      </Radio>
    </>
  ));
