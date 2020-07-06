import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { LoadingBlocks } from '../../src';

storiesOf('Loading Blocks', module)
  .addDecorator(withKnobs)
  .add('Box', () => (
    <>
      <h1>Box Loading Block</h1>
      <LoadingBlocks.Box width={text('Width', '300px')} />
    </>
  ))
  .add('Rectangle', () => (
    <>
      <h1>Rectangle Loading Block</h1>
      <LoadingBlocks.Rectangle
        width={text('Width', '200px')}
        height={text('Height', '40px')}
      />
    </>
  ))
  .add('Circle', () => (
    <>
      <h1>Circle Loading Block</h1>
      <LoadingBlocks.Circle width={text('Width', '300px')} />
    </>
  ));
