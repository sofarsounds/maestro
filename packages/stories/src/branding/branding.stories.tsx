import React from 'react';
import { storiesOf } from '@storybook/react';

import Colours from './Colours';
import Logos from './Logos';
import Typography from './Typography';

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
  .add('Typography', () => <Typography />, { isToolshown: false })
  .add('Iconopgraphy', () => <div>icons</div>, { isToolshown: false });
