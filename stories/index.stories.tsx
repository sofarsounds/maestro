import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Button } from '../src/index';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

stories.add('with a button', () => (
  <Button
    onClick={action('Primary Button clicked')}
    disabled={boolean('Disabled', false)}
    loading={boolean('Loading', false)}
  >
    {text('Label', 'Hello Storybook')}
  </Button>
));
