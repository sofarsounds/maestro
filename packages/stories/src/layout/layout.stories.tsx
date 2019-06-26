import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Grid from './Grid';
import Container from './Container';
import Spacer from './Spacer';
import Responsive from './Responsive';

storiesOf('02 / Layout|Grid', module).add('Grid', () => <Grid />);

storiesOf('02 / Layout|Container', module)
  .addDecorator(withKnobs)
  .add('Container', () => <Container />);

storiesOf('02 / Layout|Spacer', module)
  .addDecorator(withKnobs)
  .add('Spacer', () => <Spacer />);

storiesOf('02 / Layout|Responsive', module).add('Responsive', () => (
  <Responsive />
));
