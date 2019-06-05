import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Button } from '../../uikit/src';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add('Primary', () => (
  <Button
    onClick={action('Primary Button clicked')}
    disabled={boolean('Disabled', false)}
    loading={boolean('Loading', false)}
  >
    {text('Label', 'Hello Storybook')}
  </Button>
));
