import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Colours from './Colours';
import Logos from './Logos';
import Typography from './Typography';
import Iconography from './Iconography';

storiesOf('01 / Brand|Logos', module).add('Sofar Logos', () => <Logos />, {
  isToolshown: false
});
storiesOf('01 / Brand|Colour Schema', module).add(
  'Colours',
  () => <Colours />,
  {
    isToolshown: false
  }
);
storiesOf('01 / Brand|Typography', module)
  .addDecorator(withKnobs)
  .add('Typography', () => <Typography />, { isToolshown: false })
  .add('Iconopgraphy', () => <Iconography />, { isToolshown: false });
