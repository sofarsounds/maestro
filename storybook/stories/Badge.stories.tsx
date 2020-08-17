import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs'

import { Badge } from '../../src';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=112%3A0',
    }
  })
  .add('Default', () => (
    <>
      <h1>Default Badge</h1>
      <Badge color="primary">{text('Content', '1')}</Badge>
    </>
  ))
  .add('Clickable', () => (
    <>
      <h1>Clickable Badge</h1>
      <Badge color="primary" clickable onClick={action('Badge clicked')}>
        {text('Content', '1')}
      </Badge>
    </>
  ));
