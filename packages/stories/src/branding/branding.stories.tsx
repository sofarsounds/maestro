import React from 'react';
import { storiesOf } from '@storybook/react';

import theme from '../../../uikit/src/theme';

import ColourPanel, { Row } from './ColourPanel';

const stories = storiesOf('Branding', module);

stories.add('Colour Scheme', () => (
  <>
    <h1>Colour Schema</h1>

    <Row>
      <ColourPanel colourName="Primary" hex={theme.colours.primary} />
    </Row>

    <h2>Blacks & Greys</h2>
    <Row>
      {[
        'backToBlack',
        'blackBetty',
        'paintItBlack',
        'blueSmoke',
        'macyGrey',
        'silverSprings',
        'whiteDenim'
      ].map(k => (
        <ColourPanel key={k} colourName={k} hex={theme.colours[k]} />
      ))}
    </Row>

    <h2>Shades of Green</h2>
    <Row>
      {[
        'green900',
        'green700',
        'green600',
        'green500',
        'green400',
        'green300',
        'green200',
        'green100',
        'green50'
      ].map(k => (
        <ColourPanel key={k} colourName={k} hex={theme.colours[k]} />
      ))}
    </Row>

    <h2>Misc Colours</h2>
    <Row>
      <ColourPanel colourName="redRedWine" hex={theme.colours.redRedWine} />
    </Row>
  </>
));

stories.add('Logo', () => <div>Add In Logos as SVGs here</div>);
stories.add('Typography', () => <div>Add Typography</div>);
stories.add('Iconography', () => <div>Add iconography</div>);
