import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import {
  LoadingBlocks
} from 'uikit';

storiesOf('Loading Blocks', module)
  .addDecorator(withKnobs)
  .add('Box', () => (
      <LoadingBlocks.Box width={text('Width', '300px')} />
  ))
  .add('Rectangle', () => (
      <LoadingBlocks.Rectangle width={text('Width', '200px')} height={text('Height', '40px')}  />
  ))
  .add('Circle', () => (
      <LoadingBlocks.Circle width={text('Width', '300px')} />
  ))
