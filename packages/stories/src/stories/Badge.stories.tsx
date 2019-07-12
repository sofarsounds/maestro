import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Badge } from 'uikit';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Badge colour="primary">{text('Content', '1')}</Badge>)
  .add('Clickable', () => (
    <Badge colour="primary" clickable onClick={action('Badge clicked')}>
      {text('Content', '1')}
    </Badge>
  ));
